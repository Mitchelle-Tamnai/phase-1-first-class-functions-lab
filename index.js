// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){

    return function(fare){
        return num * fare
    }
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return 3 * fare
}

const selectDifferentDrivers = function (drivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}