const uuid = require('uuid/v4');
const awsService = require('../api/awsService');

let createFulfilledResponse = (sessionAttributes, message)=>{
    let response = {
        sessionAttributes : sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType : "PlainText",
                content : message
            }
        }
    }
    return response;
}

let createFailedResponse = (sessionAttributes, message)=>{
    let response = {
        sessionAttributes : sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Failed",
            message: {
                contentType : "PlainText",
                content : message
            }
        }
    }
    return response;
}

let bookTicket = async (event)=>{

    var movie = event.currentIntent.slots.movie;
    var name = event.currentIntent.slots.name;
    var day = event.currentIntent.slots.day;
    var time = event.currentIntent.slots.time;

    var params ={

        TableName : "ticketData",
        Item : {
            'Name' : name,
            'Movie': movie,
            'Day' : day,
            'Time' : time
        }

    }
    try{
        await awsService.addItemToDynamoDB(params);
    }catch(error){
        console.log('Error: ',error);
        throw error;
    }

}

module.exports = {
    createFulfilledResponse,
    createFailedResponse,
    bookTicket
}