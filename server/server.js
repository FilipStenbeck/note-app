const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { css, manifest, favicon, scripts } = require('./viewUtil');
const { name, version } = require('../package.json');
const { BASE_PATH } = require('./constants');
const PORT = 3000;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get(`${BASE_PATH}/health`, (req, res) =>
    res.status(200).json({ name, version, status: 'up' })
);

const buildPath = express.static(path.join(__dirname, '../build'));
app.use(BASE_PATH, buildPath);
let apiHost;

if (process.env.REACT_APP_API_ROOT) {
    console.log(`REACT_APP_API_ROOT: ${process.env.REACT_APP_API_ROOT}`);
    apiHost = process.env.REACT_APP_API_ROOT;
} else {
    logger.error(
        'No api host set, please use env variable REACT_APP_API_ROOT to set host'
    );
}
console.log(css);

app.get(`${BASE_PATH}/*`, function(req, res) {
    res.render('index', {
        config: { REACT_APP_API_ROOT: apiHost },
        css,
        manifest,
        favicon,
        scripts
    });
});

app.listen(PORT, () =>
    console.log(`server running on on http://localhost:${PORT}/${BASE_PATH}`)
);
