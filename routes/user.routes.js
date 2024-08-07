const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/create", userController.create);
router.post("/get-one", userController.getOne);
router.put("/add-balance", userController.addBalance);
router.put("/add-level", userController.addLevel);
router.put("/complete-task", userController.completeTask);
router.post("/get-referrals", userController.getRef);

module.exports = router;
