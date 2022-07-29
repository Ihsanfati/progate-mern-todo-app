const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(cors());

//mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mern-databases'
});

//mysql error handling
connection.connect((err) => {
    if(err){
        console.log('error connecting: ' + err.stack);
        return;
    } else {
        console.log("Connection database success...");
    }
});

//session setup
app.use(
    session({
      secret: 'my_secret_key', 
      resave: false,
      saveUninitialized: false,
    })
);

// pengecekan session
app.use((req, res, next) => {
    if(req.session.userID == undefined){
      console.log("Akun tidak login");
    } else {
      console.log("Akun telah login");
    }
    next();
  });

//API endpoints to connect get data from database
app.get('/', async (req, res) => {
    await connection.query(
        'SELECT id, username, job, email, password FROM users',
        (error, results) => {
            req.session.userID = results[0].id;
            res.json(results);
        }
    )
});
app.post('/data', async (req, res) => {
    console.log(req.body.id);
    await connection.query(
        'SELECT users_id, id, title, completed FROM todos WHERE users_id = ?',
        [req.body.id],
        (error, results) => {
            console.log(results);
            res.json(results);
        }
    )
});
app.post('/data/insert', async (req, res) => {
    const users_id = req.body.users_id;
    const id = req.body.todos_id;
    const title =  req.body.title;
    const completed = req.body.completed;

    console.log(users_id);
    console.log(id);
    console.log(title);
    console.log(completed);

    await connection.query(
        'INSERT INTO todos (users_id, id, title, completed) VALUES (?, ?, ?, ?)',
        [users_id, id, title, completed],
        (error, results) => {
            console.log(results);
            res.json(results);
        }
    )
})
app.post('/', async (req, res) => {
    const fullName = req.body.fullName;
    const job = req.body.job;
    const email =  req.body.email;
    const password = req.body.password;

    console.log(fullName);
    console.log(job);
    console.log(email);
    console.log(password);

    await connection.query(
        'INSERT INTO users (username, job, email, password) VALUES (?, ?, ?, ?)',
        [fullName, job, email, password],
        (error, results) => {
            console.log(results);
            res.json('SUCCESS');
        }
    )
    res.json(req.body);
});

app.listen(3001, () => {
    console.log("Building server...");
    console.log("Server is running...");
})