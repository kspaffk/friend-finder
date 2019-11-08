const path = require('path');
const data = require('../data/friends');

module.exports = function(expressApp) {
    expressApp.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    expressApp.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });
    
    expressApp.get('/img/friends.jpg', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/img/friends.jpg'));
    });
    
    expressApp.get('/css/styles.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/css/styles.css'));
    });
}