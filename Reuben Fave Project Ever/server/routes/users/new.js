const db = require('../../mongoUtils').getDB();
module.exports = function (req, res) {
    const { first_name, last_name, longitude, latitude } = req.body;
    db.collection('user').findOne({ 'first_name': first_name, 'last_name': last_name }, function (err, document) {
        if (err) throw err;
        if (!document) {
            db.collection('user').insertOne({
                'first_name': first_name,
                'last_name': last_name,
                'longitude': longitude,
                'latitude': latitude
            }, function (err, result) {
                if (!err) res.sendStatus(200);
                else res.sendStatus(400);
            })
        } else res.sendStatus(200);
    });
}