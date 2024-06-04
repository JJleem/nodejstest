import express from "express";

const userRouter = express.Router();

const handleEditUser = (req, res, next) => {
  res.send("Edit User");
};
const handleDelete = (req, res, next) => {
  res.send("Delete Everything!!!! ");
};
userRouter.get("/edit", handleEditUser);
userRouter.get("/delete", handleDelete);
export default userRouter;
