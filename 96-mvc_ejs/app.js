// 요청이 위에서 아래로 내려감
// 원하는 주소를 찾으면 그 아래껀 자동으로 무시
const path = require('path');
const express = require('express');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');
const { get404 } = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ expanded: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(3000);
