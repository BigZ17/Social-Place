const router = require('express').Router();

const  {
    getAllUsers,
    createUsers,
    getUserByID,
    updateUser,
    deleteUser
} = require('../../controllers/users-controller')

    router
        //GET all users
        .get(getAllUsers)    
        //POST a new user:
        .post(createUsers)

    router
        //GET a single user by its _id and populated thought and friend data
        .get(getUserByID)
        //PUT to update a user by its _id
        .put(updateUser)
        //DELETE to remove user by its _id
        .delete(deleteUser)