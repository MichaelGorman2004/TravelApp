const express = require('express');
const {createUser,getUsers,getUser,updateUser,deleteUser} = require('../controllers/userController');
const router = express.Router();

/**
 * routes for Users
 */

//GET all users
router.get('/', getUsers);

//Get a single user
router.get('/:id', getUser);

//POST a new user
router.post('/', createUser);

// PUT a new user
router.patch('/:id', updateUser);

//DELETE a user
router.delete('/:id', deleteUser);

//export router for server.js
module.exports = router;