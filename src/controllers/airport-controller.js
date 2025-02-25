
const { StatusCodes } = require('http-status-codes')
const {AirportService} = require('../services/index')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function createAirport(req,res) {

    try{
        const airport = await AirportService.createAirport({
           name:req.body.name,
           code:req.body.code,
           address:req.body.address,
           cityId : req.body.cityId
        })
        SuccessResponse.data = airport
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode||StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

     
} 
const getAirports = async (req,res,next)=>{
    try{
        const airports = await AirportService.getAirports();
        SuccessResponse.data = airports
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
        console.log(error)
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const getAirport = async (req,res,next)=>{
    try{
        const airport = await AirportService.getAirport(req.params.id);
        SuccessResponse.data = airport
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const destroyAirport = async (req,res,next)=>{
    try{
        const airport = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.data = airport
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const patchAirport = async (req,res,next)=>{
    try{
        const airport = await AirportService.patchAirport(req.params.id,req.body);
        SuccessResponse.data = airport
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
        console.log(error)
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
module.exports = {createAirport,getAirports,getAirport,destroyAirport,patchAirport}