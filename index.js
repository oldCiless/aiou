const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(history());
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.send('Aiou');
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost:${app.get('port')}`);
});
