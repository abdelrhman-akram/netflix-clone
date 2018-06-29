var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id/:name', function(req, res) {
    res.send({idSent: req.params.id, nameSent: req.params.name});
});

router.get('/:id/', function(req, res) {
    res.send({idSent: req.params.id});
});

module.exports = router;
