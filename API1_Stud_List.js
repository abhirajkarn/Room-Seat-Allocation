const con = require(‘./connection’);
const express = require(‘express’);
const app = express();

app.use(express.json());

app.get(‘/:ID’, (req,res)=>{
      const data = [req.params.ID];
      con.query(“SELECT ST.ID, ST.Name, S.Room ID FROM Student ST,      
                        Seat S where ST.ID = S.ID and 
                        Room ID = ?”,data,(err,res)=>{
              if(err){
                   res.send(‘Error’);
              }else{
                    res.send(result);
              }
       })
});
