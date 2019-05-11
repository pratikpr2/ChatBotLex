'use strict'
const helper =  require('./src/utilities/helper');
const validator = require('./src/utilities/validator');

exports.handler = async (event) => {
    console.log('Event ', JSON.stringify(event));
    var sessionAttributes = event.sessionAttributes;
    var intentName = event.currentIntent.name;
    var response = null;
    var message = null;
    try {
        let flag = validator.validate(event);

        if (flag) {
            message = "Ticket Booked, Enjoy the Show !"
            response = helper.createFulfilledResponse(sessionAttributes, message);
            await helper.bookTicket(event);
        }
        else {
            message = "Please Select a date to Book from tomorrow"
            response = helper.createFailedResponse(sessionAttributes, message);
        }
        return response;
    } catch (error) {
        console.log('Error to process lexBookTicketLambda ',error);
    }
}