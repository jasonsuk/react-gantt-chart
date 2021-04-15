// Create custom error handlers

const notFound = (req, res, next) => {
    const error = new Error(`ERROR: Not found -- ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
    });
};

console.log(process.env.NODE_ENV);

export { notFound, errorHandler };
