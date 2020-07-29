// **************
// *   PUERTO   *
// **************
process.env.PORT = process.env.PORT || 3000;

// ***************
// *   ENTORNO   *
// ***************

// NODE_ENV: Variable de entorno que usa heroku. Si existe, es que estamos en producción, si no, estamos en desarrollo
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// ****************
// *   DATABASE   *
// ****************

let urlDB;

if (process.env.NODE_ENV === 'development') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://Nexobeta28:PXjddZKINazYP1fp@cafe-udemy.8fm7k.mongodb.net/cafe'
}

// Nos creamos esta variable de entorno
process.env.URL_DB = urlDB;