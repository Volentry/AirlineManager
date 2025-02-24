
const { StatusCodes } = require('http-status-codes')
const {AirplaneService} = require('../services/index')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function createAirplane(req,res) {

    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity:req.body.capacity
        })
        SuccessResponse.data = airplane
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode||StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

     
} 
const getAirplanes = async (req,res,next)=>{
    try{
        const airplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
        console.log(error)
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const getAirplane = async (req,res,next)=>{
    try{
        const airplanes = await AirplaneService.getAirplane(req.params.id);
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const destroyAirplane = async (req,res,next)=>{
    try{
        const airplanes = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const patchAirplane = async (req,res,next)=>{
    try{
        const airplanes = await AirplaneService.patchAirplane(req.params.id,req.body);
        SuccessResponse.data = airplanes
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
        console.log(error)
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
module.exports = {createAirplane,getAirplanes,getAirplane,destroyAirplane,patchAirplane}