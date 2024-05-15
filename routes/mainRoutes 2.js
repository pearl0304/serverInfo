import express from 'express';
import { getMainPage } from '../controllers/mainController.js';
const router = express.Router();

/* TODO
* 1. 로그인 체크 후 로그인이 안되어 있으면 로그인 화면으로 이동
* 2. 토큰 시간이 만기 되었을 경우 로그인 페이지로 이동
* */
router.get('/', getMainPage);
export default router;