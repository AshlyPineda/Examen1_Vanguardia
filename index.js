const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Setting
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());

//Rutas
app.use('/api/alumno', require('./routes/alumno.routes'));

//Server inicio
app.listen(app.get('port'), () => {
    console.log('Listening on port 3000!', app.get('port'));
});