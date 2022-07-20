const moment = require('moment');
const salam = require('./ex');

console.log(salam())
console.log(`sekarang hari ${moment().format(`D MMMM YYYY`)}`)