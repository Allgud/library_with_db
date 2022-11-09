import { Router } from "express";
import BookController from '../controllers/BookController.js'

const bookRouter = new Router()

bookRouter.post('/books', BookController.addBook)
bookRouter.get('/books', BookController.getAllBooks)
bookRouter.get('/books/:id', BookController.getBookById)
bookRouter.put('/books/:id', BookController.updateBook)
bookRouter.delete('/books/:id', BookController.deleteBook)

export default bookRouter