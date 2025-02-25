const { StatusCodes } = require("http-status-codes")
const { ErrorResponse } = require("../utils/common");
const Apperror = require("../utils/errors/app-error");

function validateCreateRequest(req,res,next){

    if(!req.body.flightNumber){
        ErrorResponse.message = 'flightNumber is required';
        ErrorResponse.error = new Apperror(['flightNumber is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = 'airplaneId is required';
        ErrorResponse.error = new Apperror(['airplaneId is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = ' is required';
        ErrorResponse.error = new Apperror([' is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = ' is required';
        ErrorResponse.error = new Apperror([' is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.arrivalTime){
        ErrorResponse.message = ' is required';
        ErrorResponse.error = new Apperror([' is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.departureTime){
        ErrorResponse.message = ' is required';
        ErrorResponse.error = new Apperror([' is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.price){
        ErrorResponse.message = ' is required';
        ErrorResponse.error = new Apperror([' is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if(!req.body.totalSeats){
        ErrorResponse.message = ' is required';
        ErrorResponse.error = new Apperror([' is missing'],StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }


    next( )

}
module.exports = {validateCreateRequest}