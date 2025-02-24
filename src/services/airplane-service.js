const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository} = require('../repositories');
const Apperror = require('../utils/errors/app-error');
const airplanerepository = new AirplaneRepository()
const createAirplane = async (data)=>{
    try{
        const airplane = await airplanerepository.create(data);
        return airplane
    }catch(error){
        if (error.name === 'SequelizeValidationError') {
        let  explaination = []
        error.errors.forEach(erritem => {
            explaination.push(erritem.message)
        });
            
            throw new Apperror(explaination, StatusCodes.BAD_REQUEST);
        }
        else{
            throw error
        }
    }
}

const getAirplanes = async ()=>{
    try{
        const airplanes = airplanerepository.getAll();
        return airplanes
    }catch(error){
        throw new Apperror(['Cannot fetch data of all airplanes'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const getAirplane = async (id)=>{
    try{
        const airplane = airplanerepository.get(id);
        
        return airplane
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('airplane you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airplane'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const destroyAirplane = async (id)=>{
    try{
        const airplane = airplanerepository.destroy(id);
        
        return airplane
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('airplane you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airplane'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const patchAirplane = async (data,id)=>{
    try{
        const airplane = airplanerepository.update(id,data);
        
        return airplane
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('airplane you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airplane'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
module.exports={
    createAirplane
    ,getAirplanes,
    getAirplane,
    destroyAirplane,
    patchAirplane
}