const data = require('../data/friends');

module.exports = function(expressApp) {
    expressApp.get('/api/friends', function(req, res) {
        res.json(data.people);
    });

    expressApp.post('/api/friends', function(req, res) {
        data.people.push(req.body);
        res.json(true);
    });
}