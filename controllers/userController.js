const db = require("../db");
const { queryCreator, controllersWrapper } = require("../helpers");
const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const createUser = async (req, res) => {
  const { username, email, role, firstName, lastName, state } = req.body;

  if (!emailPattern.test(email))
    res.status(400).json("Invalid email, check you enter");

  const nevUserProfile = await db.query(
    "INSERT INTO profiles (firstName, lastName, state) VALUES ($1, $2, $3) RETURNING *",
    [firstName, lastName, state]
  );
  const newUser = await db.query(
    "INSERT INTO users (userName, email, role, profileId) VALUES ($1, $2, $3,$4) RETURNING *",
    [username, email, role, nevUserProfile[0].id]
  );
  res.status(201).json({ newUser, nevUserProfile });
};

const getAllUsers = async (req, res) => {
  const { role } = req.query;
  const users = role
    ? await db.query("SELECT * FROM users where role = $1", [role])
    : await db.query("SELECT * FROM users");

  res.json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await db.query("SELECT * FROM users where id = $1", [id]);
  res.json(user);
};

const getAllProfiles = async (req, res) => {
  const profiles = await db.query("SELECT * FROM profiles");
  res.json(profiles);
};

const getUserProfile = async (req, res) => {
  const { id } = req.params;
  const profile = await db.query("SELECT * FROM profiles where id = $1", [id]);
  res.json(profile);
};

const updateUser = async (req, res) => {
  const { id } = req.params;

  const { userQuerryStr, profileQuerryStr } = queryCreator(req.body);
  const response = {};
  if (userQuerryStr.length !== 0) {
    const updatedUser = await db.query(
      `UPDATE users SET ${userQuerryStr} where id = ${id} RETURNING *`
    );
    response.user = updatedUser[0];
  }

  if (profileQuerryStr.length !== 0) {
    const updatedProfile = await db.query(
      `UPDATE profiles SET ${profileQuerryStr} where id = ${id} RETURNING *`
    );
    response.profile = updatedProfile[0];
  }

  res.json(response);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await db.query("DELETE FROM users where id = $1", [id]);
  await db.query("DELETE FROM profiles where id = $1", [id]);
  res.json("User deleted");
};

module.exports = {
  createUser: controllersWrapper(createUser),
  getAllUsers: controllersWrapper(getAllUsers),
  getUser: controllersWrapper(getUser),
  updateUser: controllersWrapper(updateUser),
  deleteUser: controllersWrapper(deleteUser),
  getAllProfiles: controllersWrapper(getAllProfiles),
  getUserProfile: controllersWrapper(getUserProfile),
};
