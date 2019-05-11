const AWS = require('aws-sdk');
AWS.config.update({region:'us-east-1'});
const doclient = new AWS.DynamoDB.DocumentClient({region:'us-east-1'});
const constant = require('../utilities/const');

function addItemToDynamoDB(params){

    let addData = doclient.put(params).promise().then((data)=>{
        console.log('Item added to DynamoDB successfully');
        return data;
    }).catch((error)=>{
        console.log('Failed to add item to DynamoDB')
        error.name = constant.errorCodes.dynamoDB;
        throw error;
    })

    return addData;

}

module.exports = {
    addItemToDynamoDB
}