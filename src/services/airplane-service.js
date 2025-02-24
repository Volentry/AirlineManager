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
module.exports={
    createAirplane
    ,getAirplanes
}