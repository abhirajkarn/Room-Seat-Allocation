const con = require(‘./connection’);
const express = require(‘express’);
const app = express();

app.use(express.json());

app.get(‘/:ID’, (req,res)=>{
      req.query.stud = parseInt(req.query.stud) ? req.query.stud : 15;
      con.query(“SELECT Room ID FROM Seat 
                        where Count(ID) > = ?”,stud,(err,res)=>{
              if(err){
                   res.send(‘Error’);
              }else{
                    res.send(result);
              }
       })
});
