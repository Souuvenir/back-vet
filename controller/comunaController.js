var comuna = require('../models/comunaModel.js');

var comunaController = {
    getComunaByid: (req, res) => {
        comuna.findOne({ id: req.params._id }, function (err, comuna) {
            if (err) {
                res.status(500);
                res.json({ status: 500, err });
            } else {
                res.json(comuna);
            }
        });
    }
}

module.exports = comunaController;