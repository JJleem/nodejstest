export const join = (req, res, next) => {
  return res.send("Join");
};

export const edit = (req, res) => {
  return res.send("Edit User");
};

export const remove = (req, res) => {
  return res.send("Remove User");
};

export const login = (req, res) => {
  return res.send("Login here");
};
export const logout = (req, res) => {
  return res.send("Logout here");
};
export const see = (req, res) => {
  return res.send("See id?");
};
