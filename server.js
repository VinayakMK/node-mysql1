const express = require("express");
const app = express();
const PORT = 4000;
const mysql = require("mysql");

const connection = mysql.createConnection({
    user:'root',
    password:'root',
    host:'localhost',
    database:'schm_01'
});

app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('Home');
});

app.post('/signup', (req,res)=>{
    console.log(req.body);
    const {fullname,password,email} = req.body;
    const query = `INSERT INTO users (fullname, email, password) VALUES ('${fullname}','${email}','${password}')`
    connection.query(query, (err,result)=>{
        if(err){
            console.log(err.message);
        }
        console.log(result);
        res.send('Signup seccessfully completed');
    })
    
});

app.get('/users', (req,res)=>{

    res.send('Users');
});

app.listen(PORT, ()=>{
    console.log('Server is running on port 4000');
});