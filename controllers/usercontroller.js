const users = require("../users.json");

// Function to get all users
function getAllUsers(req, res) {
  try {
    res.json(users);
  } catch (err) {}
}

module.exports = {
  getAllUsers,
};
