const path = require('path');
const hbs = require('express-handlebars');
const data = require('../data/friends');

expressApp.engine('handlebars', hbs({ defaultLayout: 'main' }));
expressApp.set('view engine', 'handlebars');

module.exports = function(expressApp) {
    expressApp.get('/survey', function(req, res) {
        return res.render('survey', { questions: data.questions });

    });

    expressApp.get('/', function(req, res) {
        return res.render('home');
    });
    
    expressApp.get('/img/friends.jpg', function(req, res) {
        res.sendFile(path.join(__dirname, '../../views/img/friends.jpg'));
    });
    
    expressApp.get('/css/styles.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../../views/css/styles.css'));
    });
}