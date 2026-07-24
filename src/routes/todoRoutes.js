import express from 'express'
import db from '../db.js'

const router = express.Router()

//GET all the todos for the logged-in user
router.get('/', (req, res) => {
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
    const todos = getTodos.all(req.userId)
    res.json(todos)
})

//CREATE a new todo
router.post('/', (req, res) => {

})

//UPDATE a todo 
router.put('/:id', (req, res) => {

})

//DELETE a todo 
router.delete('/:id', (req, res) => {

})

export default router