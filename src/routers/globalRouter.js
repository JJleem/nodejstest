import express from "express";
import { join, login } from "../controlers/userControler";
import { home, search } from "../controlers/videoControler";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
export default globalRouter;

// 만약 1개의 파일에서 1개의 데이터만 출력 할 예정
// export default

//만약 1개의 파일에서 복수의 데이터가 출력되어야한다
// export const ~~
