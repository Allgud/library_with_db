const logger = (req, res, next) => {
    console.log(req.url)
    next()
}

export default logger