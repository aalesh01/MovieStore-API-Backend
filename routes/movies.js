const express = require('express');
const user = require('../users');

const movies = express.Router();

movies.get('/',async(req,res)=>{
      let allMovies=[];
      if(req.query.q){
        const keyword = req.query.q;
        console.log(keyword)
        allMovies=await user.find({"Title":{$regex:`^${keyword}` }})
      }
      if(req.query.sort){
         switch (req.query.sort){
            case "titleAsc":
                {
                    allMovies=await user.find().sort({"Title":1})
                    break;
                }
            case "titleDesc":
                {
                    allMovies=await user.find().sort({"Title":-1})
                    break;
                }
            case "ratingAsc":
                {
                    allMovies=await user.find().sort({"imdbRating":1})
                    break;
                }
            case "ratingDesc":
                {
                    allMovies=await user.find().sort({"imdbRating":-1})
                    break;
                }
         }
      }
      else allMovies = await user.find()
      res.send(allMovies)
      res.end()
})

// movies.get('/',async(req,res)=>{
//     console.log(req.query.)
//     const allMovies = await user.find()
//     res.send(allMovies)
//     res.end()
// })


movies.post('/insert',(req,res)=>{
       const allMovies = req.body;
       user.insertMany(allMovies)
       res.end('Data Inserted')
})

movies.post('/delete',(req,res)=>{
       const { deleteAll }  = req.body;
       if(deleteAll){ 
        user.collection.drop()
        res.end("All Data Deleted")
    }
    res.end("Nothing Deleted")
})

module.exports = movies
