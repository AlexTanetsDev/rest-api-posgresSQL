const Router = require("express");

const router = new Router();

const userControllers = require("../controllers/userController");

router.post("/user", userControllers.createUser);
router.get("/user", userControllers.getAllUsers);
router.get("/user/:id", userControllers.getUser);
router.get("/profile", userControllers.getAllProfiles);
router.get("/profile/:id", userControllers.getUserProfile);
router.put("/user/:id", userControllers.updateUser);
router.delete("/user/:id", userControllers.deleteUser);

module.exports = router;
