const express = require('express'),
  engine = require('ejs-mate'),
  app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs'); // so you can render('index')
app.use(express.static(__dirname + '/public'));

// render 'index' into 'boilerplate':
app.get('/', function (req, res, next) {
  res.render('nonMembers/index', { title: 'UGSOALocal223' });
});

app.get('/aboutUs', function (req, res, next) {
  res.render('nonMembers/aboutUs', { title: 'About UGSOALocal223' });
});

app.get('/contacts', function (req, res, next) {
  res.render('nonMembers/contacts', { title: 'Contact UGSOALocal223' });
});

app.get('/links', function (req, res, next) {
  res.render('nonMembers/links', { title: 'UGSOALocal223 Links' });
});

app.get('/forms', function (req, res, next) {
  res.render('nonMembers/forms', { title: 'UGSOALocal223 Forms' });
});

app.get('/members', function (req, res, next) {
  res.render('nonMembers/members', { title: 'UGSOALocal223 Members' });
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
})