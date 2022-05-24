const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    addUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');
const { put } = require('./thought-routes');

router
    .route('/')
    .get(getAllUsers)
    .post(addUser)

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

router
    .route(':userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)
    
module.exports = router;