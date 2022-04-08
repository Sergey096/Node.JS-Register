const { createUser, getUsers, login} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation")

router.get("/", getUsers);
router.post("/create", checkToken ,createUser);
router.post("/login", login)

module.exports = router;