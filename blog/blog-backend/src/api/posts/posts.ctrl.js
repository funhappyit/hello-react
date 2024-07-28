import Post from '../../models/post';
import mongoose from "mongoose";

const {ObjectId} = mongoose.Types;

export const checkObjectId = (ctx,next)=> {
    const {id} = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400; //Bad Request
        return;
    }
    return next();
};

let postId = 1; // id의 초깃값입니다.

// posts 배열 초기 데이터
const posts = [
    {
        id: 1,
        title: '제목',
        body: '내용',
    },
];

/*
포스트 작성
POST /api/posts
{title,body}
*/
export const write = async ctx => {
    // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
    const { title, body,tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags
    });
    try{
        await post.save();
        ctx.body = post;
    }catch (e){
        ctx.throw(500,e);
    }
};

/*
포스트 목록 조회
GET /api/posts
*/
export const list = async ctx => {
    try {
        const posts = await Post.find().exec();
        ctx.body = posts;
    }catch (e){
        ctx.throw(500,e);
    }
};

/*
특정 포스트 조회
GET /api/posts/:id
*/
export const read = async ctx => {
    const { id } = ctx.params;
    try{
        const post = await Post.findById(id).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch (e) {
        ctx.throw(500, e);
    }
};

/*
특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = async ctx => {
    const { id } = ctx.params;
    try{
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    }catch (e){
        ctx.throw(500,e);
    }
};

/*
포스트 수정 (전체)
PUT /api/posts/:id
{title,body}
*/
export const replace = ctx => {
    // put 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용합니다.
    const { id } = ctx.params;
    // 해당 id를 가진 post가 몇 번째인지 확인합니다.
    const index = posts.findIndex((p) => p.id.toString() === id);
    // 포스트가 없으면 오류를 반환합니다.
    if (index === -1) {
        ctx.status = 404;
        ctx.body = {
            message: '포스트가 존재하지 않습니다.',
        };
        return;
    }
    posts[index] = {
        id: parseInt(id), // Ensure id is an integer
        ...ctx.request.body,
    };
    ctx.body = posts[index];
};

/*
포스트 수정 (특정 필드 변경)
PATCH /api/posts/:id
{title,body}
*/
export const update = async ctx => {
    // PATCH 메서드는 주어진 필드만 교체합니다.
    const { id } = ctx.params;
    try{
        const post =  await Post.findByIdAndUpdate(id,ctx.request.body,{
            new:true, //이 값을 설정하면 업데이트된 데이터를 반환합니다.
            //false일 때는 업데이트되기 전의 데이터를 반환합니다.
        }).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch (e) {
        ctx.throw(500,e);
    }
};
