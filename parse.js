var url = require('url');
var adr = 'http://localhost:8080/index.html?ano=2017&mes=dezembro'; 
var q = url.parse(adr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.htm'
console.log(q.search); //returns '?year=2017&mouth=february'
console.log('Brasil 1 x 1 Croácia')
var qdata = q.query; // returns an object: {ano: 2017, mes: 'dezembro'}
console.log(qdata.mes); // returns 'dezembro'