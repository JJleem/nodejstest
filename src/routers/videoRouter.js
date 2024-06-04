import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req, res, next) => {
  res.send("Watch Video");
};
const handleEdit = (req, res, next) => {
  res.send("Edit Here");
};
videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEdit);
export default videoRouter;
