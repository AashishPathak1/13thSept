const users = require("../users.json");

// Function to get all users
function getAllUsers(req, res) {
  try {
    res.json(users);
  } catch (err) {}
}

function getUser(req, res) {
  try {
    let id = parseInt(req.params.id);
    let user = users.find((u) => u.id === id);
    res.json(user);
  } catch (err) {}
}
module.exports = {
  getAllUsers,
  getUser
};
