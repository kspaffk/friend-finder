const express = require('express');

expressApp = express();
var PORT = process.env.PORT || 6080;

expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.json());

require('./app/routing/apiRoutes')(expressApp);
require('./app/routing/htmlRoutes')(expressApp);

expressApp.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});