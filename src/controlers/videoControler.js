export const trending = (req, res, next) => {
  return res.render("home");
};

export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch");
};

export const edit = (req, res) => {
  console.log(req.params);
  return res.send("Edit");
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
