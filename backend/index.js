import express from 'express';
import mysql from 'mysql2'
import cors from 'cors'




const app = express();


app.use(cors());

app.use(express.json());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",


    password:"Dayzy_21420",

    


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



app.post('/basket', (req, res) => {
   const { id_cards } = req.body;
    const q = "INSERT INTO lala_store.basket (id_cards) VALUES (?)";
    db.query(q, [id_cards], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true, id: result.insertId });
    });
});


app.get('/basket', (req, res) => {
    const q = `
        SELECT b.id, c.* 
        FROM lala_store.basket b
        JOIN lala_store.cards c ON b.id_cards = c.id
    `;
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        res.json(data);
    });
});


app.delete('/basket/:id', (req, res) => {
    const basketId = req.params.id;
    const q = "DELETE FROM lala_store.basket WHERE id = ?";
    db.query(q, [basketId], (err, result) => {
        if (err) return res.status(500).json(err);
        res.json({ success: true });
    });
});


const PORT = 4444;

app.listen(PORT, () =>{
    console.log("Server started!")
})
