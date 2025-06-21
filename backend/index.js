import express from 'express';
import mysql from 'mysql2'
import cors from 'cors'




const app = express();


app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"lala_store"
})



app.get('/', (req, res) =>{
    const q = "SELECT * FROM lala_store.cards";

    db.query(q, (err, data) =>{
        if(data){
            return res.json(data)
        }else{
            res.json(err)
        }
    })
})




app.get('/items', (req, res) =>{

    const searchQuery = req.query.data || '';


    const q = `SELECT * FROM test.books WHERE title LIKE ? `;

    db.query(q, [`${searchQuery}%`], (err, data) => {
        if(data){
            return res.json(data)
        }else{
            res.json(err)
        }
    })
})


const PORT = 4444;

app.listen(PORT, () =>{
    console.log("Server started!")
})
