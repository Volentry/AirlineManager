const CrudRepository = require('./crud-repository')
const {Flight,Airplane,Airport, Sequelize, City} = require('../models');
const { where } = require('sequelize');
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);
    }
   async getAllFlights(filter,sortFilter){
    const response  = await Flight.findAll({
        where:filter,
        order:sortFilter,
        include:[{
            model:Airplane,
            required:true,
            as:'airplane_detail'
        },{
            model:Airport,
            required:true,
            as:'departure_Airport',
            on:{
                col1:Sequelize.where(Sequelize.col("Flight.departureAirportId"),'=',Sequelize.col('departure_Airport.code'))
            },
            include:{
                model:City,
                required:true
            }
        },{
            model:Airport,
            required:true,
            as:'arrival_Airport',
            on:{
                col1:Sequelize.where(Sequelize.col("Flight.arrivalAirportId"),'=',Sequelize.col('arrival_Airport.code'))
            },
            include:{
                model:City,
                required:true
            }
        }]
    });
        return response
    }
   }

module.exports = FlightRepository