// 요청이 위에서 아래로 내려감
// 원하는 주소를 찾으면 그 아래껀 자동으로 무시
const path = require('path');
const express = require('express');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ expanded: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found!' });
});

app.listen(3000);
