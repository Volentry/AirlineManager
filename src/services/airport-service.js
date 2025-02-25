const { StatusCodes } = require('http-status-codes');
const { AirportRepository} = require('../repositories');
const Apperror = require('../utils/errors/app-error');
const airportrepository = new AirportRepository()
const createAirport = async (data)=>{
    try{
        const airport = await airportrepository.create(data);
        return airport
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

const getAirports = async ()=>{
    try{
        const airports = airportrepository.getAll();
        return airports
    }catch(error){
        throw new Apperror(['Cannot fetch data of all airports'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const getAirport = async (id)=>{
    try{
        const airport = airportrepository.get(id);
        
        return airport
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('airport you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airport'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const destroyAirport = async (id)=>{
    try{
        const airport = airportrepository.destroy(id);
        
        return airport
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('airport you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airport'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const patchAirport = async (data,id)=>{
    try{
        const airport = airportrepository.update(id,data);
        
        return airport
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('airport you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airport'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
module.exports={
    createAirport
    ,getAirport,
    getAirports,
    destroyAirport,
    patchAirport
}