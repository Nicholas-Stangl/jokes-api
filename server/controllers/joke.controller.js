const Joke = require('../models/joke.model');


module.exports.findAllJokes = (req, res)=>{
    Joke.find()
        .then(alljokes =>{
            res.json({results: alljokes})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.createJoke = (req, res)=>{

    console.log("REQUEST.BODY LOOKS LIKE THIS--->", req.body)
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id })
        .then(oneJoke=>{
            res.json({results: oneJoke})
        })
        .catch(err=>res.json(err))
}

module.exports.updateOneJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedQuote =>{
            res.json({results: updatedQuote})
        })
        .catch(err=> res.json(err))
}

module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err=> res.json(err))
}