var express       = require("express");
var router 	      = express.Router();

// route for root directory
router.get("/", function(req, res){
	res.render("home");
});

// export router object
module.exports = router;