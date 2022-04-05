import express from 'express';

const application = express();
const port = 6200;

// Funcion Normal
// function nombreFuncion() {
// }

// public void numbreFuncion(){

// }

// Arrow Funcion
// const nombreFuncion = () => {

// }

// HTTP
// GET
// POST
// PATH
// PUT
// DELETE

// application.get('/RUTA', /*arroyFuntion*/)

application.get('/products', (request, response) => {
    // request.body.name
    // request.body.email
    // request.query.email = estecorreo@gmail.com
    // request.query.name = carlitos

    // Parametro REQ es lo que recibo del cliente
    response.send("This is the view of products");
})

// application.listen(puerto, funcion)
application.listen(port, () => {
    console.log('The server is running on port ' + port);
});


