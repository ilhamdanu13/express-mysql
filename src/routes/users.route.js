const express = require('express')
const userController = require('../controllers/users.controller')
const router = express.Router()

// Read - GET
router.get('/', userController.getAllUsers)
//Create - POST
router.post('/', userController.createNewUser)
// Update - PATCH
router.patch('/:id', userController.updateUser)
// Delete - DELETE
router.delete('/:id', userController.deleteUser)

module.exports = router