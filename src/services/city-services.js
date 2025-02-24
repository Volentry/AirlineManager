const { StatusCodes } = require('http-status-codes');
const { CityRepository} = require('../repositories');
const Apperror = require('../utils/errors/app-error');
const cityrepository = new CityRepository()
const createCity = async (data)=>{
    try{
        const city = await cityrepository.create(data);
        return city
    }catch(error){
        if (error.name === 'SequelizeValidationError'|| error.name === 'SequelizeUniqueConstraintError'){
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
const destroyCity = async (id)=>{
    try{
        const city = cityrepository.destroy(id);
        
        return city
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('city you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the city'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
const patchCity = async (data,id)=>{
    try{
        const city = cityrepository.update(id,data);
        
        return city
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('city you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the city'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 
module.exports ={
    createCity,
    destroyCity,
    patchCity
    
}
