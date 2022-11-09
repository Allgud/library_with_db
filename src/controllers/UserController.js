import User from '../models/User.js'

class UserController {
    async createUser(req, res) {
        try{
            const user = await User.create({...req.body})
            res.status(201).send(user)
        } catch(err) {
            console.log(err);
        }
    }

    async getAllUsers(_, res) {
        try {
            const users = await User.find()
            res.send(users)
        } catch (err) {
            res.status(500).send('Something went wrong')
        }
        
    }

    async getUserById(req, res) {
        try {
            const {id} = req.params
            const user = await User.findById(id)
            res.send(user)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    async updateUser(req, res) {
        try {
            const newData = req.body
            if(!newData._id) {
                res.status(400).send('Id не указан')
            }
            const updatedUser = await User.findByIdAndUpdate(newData._id, newData, { new: true })
            res.send(updatedUser)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    async deleteUser(req, res) {
        try {
            const {id} = req.params
            const user = await User.findByIdAndDelete(id)
            res.send(user)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}

export default new UserController()