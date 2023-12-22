//import user model and mongoose
const User = require('../models/userModel');
const mongoose = require('mongoose');

  // Get all the users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
};

  // Get a user
const getUser = async (req, res) => {
    //get id if matches return json else 200 code
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid id' });
    }
    const user = await User.findById(id);
    if (!user) {
        res.status(404).json({ error: 'No such user' });
    }
    res.status(200).json(user);
};
//create a new user
const createUser = async (req, res) => {
    //store name and update db
    const {name, message } = req.body;
    //add doc on  db
    try {
        const user = await User.create({ name, message });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};
//update a user
const updateUser = async (req, res) => {
    //get params and update if id exists
    const {name, message} = req.body;
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid id' });
    }

    const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!user) {
        res.status(404).json({ error: 'No such user' });
    }
    res.status(200).json(user);
};

//delete a user
const deleteUser = async (req, res) => {
    //get id and delete if exists
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: 'Invalid id' });
    }
    const user = await User.findOneAndDelete({ _id: id });

    if (!user) {
        res.status(400).json({ error: 'No such user' });
    }
    res.status(200).json(user);
};


//export for routes
module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
