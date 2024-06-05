import express from "express";
import { edit, remove, logout, see } from "../controlers/userControler";
const userRouter = express.Router();

// const handleEditUser = (req, res, next) => {
//   res.send("Edit User");
// };
// const handleDelete = (req, res, next) => {
//   res.send("Delete Everything!!!! ");
// };
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);
export default userRouter;
