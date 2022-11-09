import Book from "../models/Book.js";

class BookController {
    async addBook(req, res) {
        try {
            const book = await Book.create({...req.body})
            res.status(201).send(book)
        } catch (err) {
            
        }
    }

    async getAllBooks(_, res) {
        try {
            const books = await Book.find()
            res.send(books)
        } catch (err) {
            res.status(500).send('Something went wrong')
        }
    }

    async getBookById(req, res) {
        try {
            const {id} = req.params
            if(!id) {
                res.status(400).send('Не введён ID')
            }
            const book = await Book.findById(id)
            res.send(book)
        } catch (err) {
            res.status(500).send(err.message)
        }    
    }

    async updateBook(req, res) {
        try {
            const data = req.body
            if(data._id) {
                res.status(400).send('Id не указан')
            }
            const updatedBook = await Book.findByIdAndUpdate(data._id, data, { new: true })
            res.send(updatedBook)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    async deleteBook(req, res) {
        try {
            const { id } = req.params
            const book = await Book.findByIdAndDelete(id)
            res.send(book)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}

export default new BookController()