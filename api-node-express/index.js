import express from 'express';

const application = express();
let port = 6200;

// Funcion Normal
// function nombreFuncion() {
// }

// Arrow Funcion
// const nombreFuncion = () => {

// }

application.get('/', (req, res) => {
    // Parametro REQ es lo que recibo del cliente
    res.send("The Server is Ready,  Status OK!!!")
})

application.listen(port, () => {
    console.log('The server is running on port ' + port);
});


