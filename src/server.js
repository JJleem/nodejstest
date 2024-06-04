// const express = require("express");

// const app = express();

// app.use();

// 2024년 => 다양한 엔지니어들이 저마다의 모듈을 사용하더라도 여튼 현시점에서 가장 최신 문법으로 변현된 타입의 문법을 사용하는 것이 가장 적합한 선택!
// req  , res
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();
const morganMiddleWare = morgan("dev");
app.use(morganMiddleWare);

//Making Global Router

//////
app.use("/", globalRouter);
//////
app.use("/users", userRouter);
///////
app.use("/videos", videoRouter);

const handleLogin = (req, res) => {
  return res.send({ message: "Login here" });
};
// const handleProtected = (req, res, next) => {
//   return res.send("Welcome to the Private Lounge!");
// };

// app.use(privateMiddleWare);
// app.get("/", handleHome);
// app.get("/protected", handleProtected);
// JS 이벤트 구현!!
// 사용자가 어떤 버튼을 클릭, 함수를 실행 => 실행문

const handleListening = () => {
  console.log(`🛸 Server listening onPort http://localhost:${PORT} 🛸`);
};

app.listen(PORT, handleListening);
