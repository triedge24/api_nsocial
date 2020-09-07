const app = require('./app');

// settings
app.set('port', process.env.PORT || 3800);

//configuracion moongose


// iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log('=> corriendo en http://localhost:'+app.get('port'));
});
