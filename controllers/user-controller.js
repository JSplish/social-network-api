const { Thought, User } = require("../models");

const userController = {
    getAllUsers(req,res){
        User.find()
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },

    getUserById(req,res){
        User.findOne({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },

    addUser(req,res){
        User.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },

    updateUser(req,res){
        User.findOneAndUpdate({_id:req.params.id},{ $set:  req.body })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },

    addFriend(req,res){
        User.findOneAndUpdate({_id:req.params.userId},{ $push:{ friends:req.params.friendId} },{new:true})
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },

    deleteUser(req,res){
        User.findOneAndUpdate({_id:req.params.userId},{ $pull:{ friends: req.params.id } },{new:true})
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },

    removeFriend(req,res){
        User.findOneAndUpdate({_id:req.params.userId},{ $pull:{ friends:req.params.friendId} },{new:true})
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err))
    },
}

module.exports = userController