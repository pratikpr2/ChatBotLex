const valid = require('validator');

let validate = (event)=>{

    var date = event.currentIntent.slots.day
    var currentDate = new Date();

    let flag = valid.isAfter(date,currentDate.toLocaleDateString()); 

    console.log(currentDate.toLocaleDateString());
    console.log(valid.isAfter(date,currentDate.toLocaleDateString()));

    return flag;

}
module.exports={
    validate
}