const router = require("express").Router();
const todosRoute = require("./todos");

router.use("/todos", todosRoute);

module.exports = router;
