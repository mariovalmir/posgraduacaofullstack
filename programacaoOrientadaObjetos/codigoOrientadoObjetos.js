 const funcionario = {
  horaExtra: 100,
  qtHoras: 20,
  salarioFixo: 5000,
  calculaSalario: function() {
    return this.salarioFixo +  (this.horaExtra* this.qtHoras);
  }
};

let total = funcionario.calculaSalario();
console.log(total);