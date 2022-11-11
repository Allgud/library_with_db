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
            const { operation } = req.query
            const { id } = req.params
            if(operation === "add") {
                await Book.findOneAndUpdate(
                    {_id: id},
                    {$addToSet : {
                        readers : {...req.body}
                    }}
                )
                res.send({message: 'User added to readers list'})
            }

            if(operation === "remove") {
                const book = await Book.findOne({id})
                const newReadersList = book.readers.filter(el => el.username !== req.body.username)
                book.readers = newReadersList
                await book.save()
                res.send({message: "User removed from readers list"})
            } 
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