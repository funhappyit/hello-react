// const Router = require('koa-router');
import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

// const postsCtrl = require('./posts.ctrl');

const posts = new Router();

posts.get('/',postsCtrl.list);
posts.post('/',postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/:id',postsCtrl.read);
post.delete('/:id',postsCtrl.remove);
//posts.put('/:id',postsCtrl.checkObjectId,postsCtrl.replace);
post.patch('/:id',postsCtrl.update);

posts.use('/:id',postsCtrl.checkObjectId,post.routes());

// module.exports = posts;
export default posts;