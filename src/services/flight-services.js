const { StatusCodes } = require('http-status-codes');
const { AirportRepository, FlightRepository} = require('../repositories');
const Apperror = require('../utils/errors/app-error');
const { Op } = require('sequelize');
const flightrepository = new FlightRepository()
const createFlight = async (data)=>{
    try{
        const flight = await flightrepository.create(data);
        return flight
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
const getAllFlights = async (query)=>{
     filter = {}
     let sortFilter = []
     const endingTripDate = '  23:59:00'
   if(query.trips){
    [departureAirportId,arrivalAirportId] = query.trips.split('-')

   }
   filter.departureAirportId = departureAirportId
   filter.arrivalAirportId = arrivalAirportId
   if(query.price){
    [minPrice,maxPrice] = query.price.split('-')
    filter.price = {
        [Op.between]:[(minPrice===undefined)?0:minPrice,(maxPrice===undefined)?20000:maxPrice]
    }

   }

   if(query.travellers){
    filter.totalSeats = {
        [Op.gte]:query.travellers
    }
   }
   if(query.tripDate){
    filter.departureTime = {
        [Op.between]:[query.tripDate,query.tripDate + endingTripDate]
    }
   }
   if(query.sort){

    let params = query.sort.split(',')
    sortFilter =  params.map((param)=>param.split('_'))


   }
   
   try{
    const flights = flightrepository.getAllFlights(filter,sortFilter)
    return flights
}catch(error){
    throw new Apperror(['Cannot fetch data of all airports'],StatusCodes.INTERNAL_SERVER_ERROR)

}
}
const getFlight = async (id)=>{
    try{
        const flight = flightrepository.get(id);
        
        return flight
    }catch(error){
        if(error.statusCode==404){
            throw new Apperror('flight you requested is not present',error.statusCode)
        }
        throw new Apperror(['Cannot fetch data of the airport'],StatusCodes.INTERNAL_SERVER_ERROR)
    }
} 

module.exports={
    createFlight,
    getAllFlights,
    getFlight
   
}