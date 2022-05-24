const { Thought, User } = require("../models");

const thoughtController ={
    getAllThoughts(req,res){
        Thought.find()
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },

    getThoughtById(req,res){
        Thought.findOne({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },

    addThought(req,res){
        Thought.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },

    updateThought(req,res){
        Thought.findOneAndUpdate({_id:req.params.id},{ $set:  req.body })
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },

    getThoughtById(req,res){
        Thought.findOneAndRemove({_id:req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },

    addReaction(req,res){
        Thought.findOneAndUpdate({_id:req.params.id},{ $push:{ reactions:req.body} },{new:true})
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },

    addReaction(req,res){
        Thought.findOneAndUpdate({_id:req.params.id},{ $pull:{ reactions:{ reactionId: req.params.id}} },{new:true})
        .then(data => res.json(data))
        .catch(err => res.status(500)).json(err)
    },
}

module.exports = thoughtController
// { getAllThoughts, getThoughtById, addThought, updateThought, removeThought,addReaction, removeReaction}


