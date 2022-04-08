const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'admin',
    database: 'tset',
    password: 'toor'
});

module.exports = connection