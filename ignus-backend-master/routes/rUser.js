var express = require("express"),
	cUser = require("../controllers/cUser");

var router = express.Router();

router.get("/",cUser.getUsers);
router.get("/:userId",cUser.getUserById);
router.get("/menu/intranet/:user_id", cUser.getMenuForUser);
router.get("/menu/mobile/:user_id", cUser.getMenuMobileForUser);
router.get("/role/:user_id", cUser.getRolesByUser);
router.get("/:user_id/remove_role/:role_id", cUser.removeUserRole);
router.post('/employee', cUser.addEmployee);
router.post('/client', cUser.addClient);
router.put('/:userId', cUser.updateUser);
router.put('/role/:user_id', cUser.addUserRoles);

module.exports = router;
