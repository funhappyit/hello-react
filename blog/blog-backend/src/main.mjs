import dotenv from 'dotenv';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api/index.js';
import createFakeData from './createFakeData.js'; // 필요 시 활성화

// dotenv 설정
dotenv.config();

const { PORT, MONGO_URI } = process.env;

// MongoDB 연결
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
         createFakeData(); // 필요 시 활성화
    })
    .catch(e => {
        console.error(e);
    });

// Koa 애플리케이션 생성
const app = new Koa();
const router = new Router();

// 라우터 설정
router.use('/api', api.routes()); // API 라우터 적용

// 라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

// app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
    console.log('Listening to port %d', port);
});