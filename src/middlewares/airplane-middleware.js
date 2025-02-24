const { StatusCodes } = require("http-status-codes")
const { ErrorResponse } = require("../utils/common");
const Apperror = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){

    if(!req.body.modelNumber){
        ErrorResponse.message = 'model number is required';
        ErrorResponse.error = new Apperror(['ModelNumber is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    next( )

}
module.exports = {validateCreateRequest}