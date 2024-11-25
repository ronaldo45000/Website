const express = require('express');
const mysql = require('mysql2');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const dotenv = require('dotenv')

// Serve static assets
app.use("/assets", express.static("assets"));

// MySQL connection
dotenv.config()
const db = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_pw,
    database: process.env.DB_db,
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(session({
    secret: 'secret_key',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Route to handle form submission
app.post('/api/submitForm', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO contactInfo(name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            res.status(500).send('Error inserting data into database');
        } else {
            console.log('Data inserted successfully');
            res.status(200).send('Data inserted successfully');
        }
    });
    
});

app.post('/api/increment', (req, res) => {
    db.query('SELECT * FROM ClickCount WHERE id = 1', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to fetch count.');
            return;
        }

        if (results.length === 0) {
            // If no record is found, create it
            db.query('INSERT INTO ClickCount (id, count) VALUES (1, 1)', (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Failed to insert initial count.');
                    return;
                }
                res.send('Count initialized to 1.');
            });
        } else {
            // If record exists, increment the count
            db.query('UPDATE ClickCount SET count = count + 1 WHERE id = 1', (err) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Failed to increment count.');
                    return;
                }
                res.send('Count incremented successfully.');
            });
        }
    });
});

// Fetch count
app.get('/api/count', (req, res) => {
    db.query('SELECT count FROM ClickCount WHERE id = 1', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Failed to fetch count.');
            return;
        }
        res.json({ count: results[0].count });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
