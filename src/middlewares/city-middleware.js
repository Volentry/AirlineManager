const { StatusCodes } = require("http-status-codes")
const { ErrorResponse } = require("../utils/common");
const Apperror = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){

    if(!req.body.name){
        ErrorResponse.message = 'name is required';
        ErrorResponse.error = new Apperror(['Name is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next( )

}
module.exports = {validateCreateRequest}