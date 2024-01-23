const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, function(err, result){
    // console.log('Descreve -> ', result.describe().AtendeClienteService.AtendeClientePort)
    result.consultaCEP({cep: '91210120'}, function (err, res){
        if (err){
            console.log(err)
        } else {
            console.log(res)
        }
    })
});