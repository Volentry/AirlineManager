
const { StatusCodes } = require('http-status-codes')
const {FlightService} = require('../services/index')
const { SuccessResponse, ErrorResponse } = require('../utils/common')
const { Model } = require('sequelize')

async function createFlight(req,res) {

    try{
        const flight = await FlightService.createFlight({
           flightNumber:req.body.flightNumber,
           airplaneId:req.body.airplaneId,
           arrivalAirportId:req.body.arrivalAirportId,
           departureAirportId:req.body.departureAirportId,
           arrivalTime : req.body.arrivalTime,
           departureTime : req.body.departureTime,
           price : req.body.price,
           boardingGate : req.body.boardingGate,
           totalSeats : req.body.totalSeats,
        })
        SuccessResponse.data = flight
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode||StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

     
} 
async function getAllFlights(req,res) {

    try{
        const flights = await FlightService.getAllFlights(req.query)
        SuccessResponse.data = flights
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode||StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

     
} 
const getFlight = async (req,res,next)=>{
    try{
        const flight = await FlightService.getFlight(req.params.id);
        SuccessResponse.data = flight
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const updateFlightSeats = async (req,res,next)=>{
    try{
        const flight = await FlightService.updateFlightSeats({flightId:req.params.id,seats:req.body.seats,dec:req.body.dec});
        SuccessResponse.data = flight
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
module.exports ={ createFlight,getAllFlights,getFlight,updateFlightSeats}