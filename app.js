const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.set('port', 5000);

app.listen(app.get('port'), () => console.log(`Server running on port : ${app.get('port')}`));