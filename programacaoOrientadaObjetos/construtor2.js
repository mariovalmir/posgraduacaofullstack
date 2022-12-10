class Pessoa {
  constructor(nome, anoNascimento, profissao) {

  }

  ola() {
    console.log("ola");
  }
}

class Estudante extends Pessoa {
  #matricula;
  
  construtor(nome, anoNascimento, profissao, matricula) {
    super(nome, anoNascimento, profissao);
    this.#matricula = matricula;
  };

  getMatricula(){
    return this.#matricula;
  };

  ola() {
    super.ola();
    console.log("colega");
  };
}

const aluno = new Estudante("Fulano", 1992, "Estudante", 60566);
aluno.ola();