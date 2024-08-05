import Router from 'koa-router';
import * as authCtrl from './auth.ctrl.js'; // 파일 확장자 명시

const auth = new Router();

auth.post('/register',authCtrl.register);
auth.post('/login',authCtrl.login);
auth.get('/check',authCtrl.check);
auth.post('/logout',authCtrl.logout);

export default auth;
