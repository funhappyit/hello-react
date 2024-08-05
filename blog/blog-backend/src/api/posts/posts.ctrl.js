import Post from '../../models/post.js'; // 파일 확장자를 명시적으로 작성
import mongoose from 'mongoose';
import Joi from 'joi';

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
   const schema = Joi.object().keys({
        //객체가 다음 필드를 가지고 있음을 검증
       title:Joi.string().required(), //required()가 있으면 필수 항목
       body: Joi.string().required(),
       tags: Joi.array()
           .items(Joi.string())
           .required(), //문자열로 이루어진 배열
   });

   //검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
        return;
    }

    const {title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body,
        tags
    });
    try {
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
    //query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
    //값이 주어지지 않았다면 1을 기본으로 사용합니다.
    const page = parseInt(ctx.query.page || '1', 10);
    if(page < 1){
        ctx.status = 400;
        return;
    }
    try {
        const posts = await Post.find()
            .sort({_id:-1})
            .limit(10)
            .skip((page-1)*10)
            .lean()
            .exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page',Math.ceil(postCount/10));
        ctx.body = posts
            .map(post=>({
                ...post,
                body:
                    post.body.length < 200 ? post.body : `${post.body.slice(0,200)}...`,
            }));
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
    // write에서 사용한 schema와 비슷한데, required()가 없습니다.
    const schema = Joi.object().keys({
       title: Joi.string(),
       body: Joi.string(),
       tags: Joi.array().items(Joi.string()),
    });

    //검증하고 나서 검증 실패인 경우 에러 처리
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
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
