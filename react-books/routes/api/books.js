const router = require("express").Router();
const db = require("../../controllers/booksController");

router.route("/").get(db.findAll).post(db.create);

router.route("/:id").delete(db.remove);

module.exports = router;
