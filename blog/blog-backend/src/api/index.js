import Router from 'koa-router';
import posts from './posts/index.js';
import auth from "./auth/index.js"; // 디렉토리 내부의 index.js를 명시적으로 가져옴

const api = new Router();

api.use('/posts', posts.routes());
api.use('/auth', auth.routes());
export default api;