class CustomError extends Error
{
    constructor(err,statusCode)
    {
        super(err);
        this.statusCode=statusCode;
    }
}

const createError = (err,statusCode) => {
    return new CustomError(err,statusCode);
}

module.exports = {
    CustomError,
    createError
};