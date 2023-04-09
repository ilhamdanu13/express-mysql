const usersModel = require('../models/users.model')

const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers()
        res.json({
            message: 'Get all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const getDetailUser = async (req, res) => {
    const {id} = req.params
    try {
        const [data] = await usersModel.getDetailUser(id)
        res.json({
            message: 'Get detail user success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req
    try {
        await usersModel.createUser(body)
        res.status(201).json({
            message: 'Create new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }

}

const updateUser = async (req, res) => {
    const {id} = req.params
    const {body} = req

    try {
        await usersModel.updateUser(body, id)
        res.json({
            message: 'Update user success',
            data: {
                id: id,
                ...body
            }
        })   
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        await usersModel.deleteUser(id)
        res.json({
            message: 'Delete user success',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error
        })
    }

}

module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser, getDetailUser
}