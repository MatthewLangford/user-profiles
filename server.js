let express = require('express');
let bodyParser = require('body-parser');
let session = require('express-session');
let cors = require('cors');
let config = require('./config');
let userCtrl = require('./controllers/userCtrl');
let profileCtrl = require('./controllers/profileCtrl');

let app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
let corsOptions = {
    origin: 'http://localhost: 3000'
};
app.use(cors(corsOptions));
app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true
}));



app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getFriendsProfile);

























app.listen(3000);