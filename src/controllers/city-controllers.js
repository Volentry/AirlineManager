
const { StatusCodes } = require('http-status-codes')
const {CityService} = require('../services/index')
const { SuccessResponse, ErrorResponse } = require('../utils/common')

async function createCity(req,res) {

    try{
        const city = await CityService.createCity({
            name: req.body.name,
        })
        SuccessResponse.data = city
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    }catch(error){
        ErrorResponse.error = error
        return res.status(error.statusCode||StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

     
} 
const destroyCity = async (req,res,next)=>{
    try{
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.data = city
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
const patchCity = async (req,res,next)=>{
    try{
        const city = await CityService.patchCity(req.params.id,req.body);
        SuccessResponse.data = city
        return res.status(StatusCodes.OK).json(SuccessResponse)

    }catch(error){
        ErrorResponse.error = error;
       
       
        return res.status(error.statusCode).json(ErrorResponse);
        
    }

}
module.exports = {
    createCity,destroyCity,patchCity
}