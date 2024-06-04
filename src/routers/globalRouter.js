import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res, next) => {
  return res.send("I Love middle");
};

const handleJoin = (req, res, next) => {
  return res.send("Here is Join!");
};

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
export default globalRouter;

// 만약 1개의 파일에서 1개의 데이터만 출력 할 예정
// export default

//만약 1개의 파일에서 복수의 데이터가 출력되어야한다
// export const ~~
