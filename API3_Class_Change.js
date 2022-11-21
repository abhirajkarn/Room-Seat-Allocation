const con = require(‘./connection’);
const express = require(‘express’);
const app = express();

app.use(express.json());

app.put(‘/:ID’, (req,res)=>{
      const data = [req.body.Room ID,req.params.ID];
      con.query(“UPDATE Seat set Room ID = ? where ID = ?”,data,(err,res)=>{
              if(err){
                   res.send(‘Error’);
              }else{
                    res.send(result);
              }
       })
});
