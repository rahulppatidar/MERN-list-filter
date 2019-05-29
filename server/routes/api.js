const express = require('express');
const apiRoute = express.Router();
const UserController = require('../controllers/User')

apiRoute.post('/signup',UserController.signup);
apiRoute.get('/users',UserController.getAllUsers);
apiRoute.delete('/user',UserController.deleteUser);
apiRoute.put('/user',UserController.updateUser);

module.exports= apiRoute;