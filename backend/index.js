import express from 'express';
import mysql from 'mysql2'
import cors from 'cors'




const app = express();


app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
<<<<<<< HEAD
    password:"Dayzy_21420",
=======
    password:"123Qwe45",
>>>>>>> 12907a72466bf0466dbb2afe609b1f879887400a
    database:"test"
})



app.get('/', (req, res) =>{
    const q = "SELECT * FROM test.books";

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
