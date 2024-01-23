const soap = require('soap');
const url = 'http://localhost:8001/wscalc1?wsdl'

soap.createClient(url, function(err, client) {
    if (err) throw err;
    //console.log(client.describe().ws.calc);
    client.multiplicar({a: 10,b: 3},function(err,res){
        if (err) throw err;
        console.log(res);
    });
    client.somar({a: 4,b: 6},function(err,res){
        if (err) throw err;
        console.log(res);
    });
});