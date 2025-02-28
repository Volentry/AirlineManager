function addRowLockOnFlights(flightId){
    return `SELECT * FROM FLIGHTS WHERE FLIGHTS.Id = ${flightId} FOR UPDATE`
}
module.exports = addRowLockOnFlights