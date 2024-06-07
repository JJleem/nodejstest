// const fakeUser = {
//   username: "David",
//   loggedIn: true,
// };

import { request } from "express";

const videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "2 minute ago",
    views: 1,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second Video",
    createdAt: "10 minute ago",
    views: 4124,
    comment: 123,
    rating: 6,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "30 minute ago",
    views: 212,
    comment: 6,
    rating: 4,
  },
];

export const trending = (req, res, next) => {
  return res.render("home", {
    pageTitle: "Home",
    videos,
    // home: "Home",
    // fakeUser: fakeUser,
  });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", {
    pageTitle: `watching ${video.title}`,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => {
  return res.send("Search");
};

export const upload = (req, res) => {
  return res.send("Upload");
};

export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
