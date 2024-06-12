import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../controlers/videoControler";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);

export default videoRouter;
