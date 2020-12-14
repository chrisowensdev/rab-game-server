const mysql = require('mysql');

export const conn = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DATABASE,
});

conn.connect((err, res) => {
    if (err) throw err;
    console.log('Conntected!', res);
    conn.query('SELECT * from users', (err, result, fields) => {
        if (err) throw err;
        console.log(result.map((item) => item.twitterId));
    });
});
