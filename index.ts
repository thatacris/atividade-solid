// Interfaces (ISP)
interface Trabalhavel { trabalhar(): void; }
interface PontoRegistravel { registrarPonto(): void; }
interface Assalariado { receberSalario(): void; }
interface Gerenciavel { gerenciarEquipe(): void; }
interface Programavel { escreverCodigo(): void; }

// Classes (LSP)
class Gerente implements Trabalhavel, PontoRegistravel, Assalariado, Gerenciavel {
 trabalhar() { console.log("Gerente trabalhando"); }
 registrarPonto() { console.log("Ponto registrado"); }
 receberSalario() { console.log("Salário recebido"); }
 gerenciarEquipe() { console.log("Gerenciando equipe"); }
}

class Desenvolvedor implements Trabalhavel, PontoRegistravel, Assalariado, Programavel {
 trabalhar() { console.log("Desenvolvedor trabalhando"); }
 registrarPonto() { console.log("Ponto registrado"); }
 receberSalario() { console.log("Salário recebido"); }
 escreverCodigo() { console.log("Escrevendo código"); }
}

class Estagiario implements Trabalhavel, PontoRegistravel, Programavel {
 trabalhar() { console.log("Estagiário trabalhando"); }
 registrarPonto() { console.log("Ponto registrado"); }
 escreverCodigo() { console.log("Estagiário escrevendo código"); }
}

// Novo tipo
class Freelancer implements Trabalhavel, Programavel {
 trabalhar() { console.log("Freelancer trabalhando"); }
 escreverCodigo() { console.log("Freelancer codando"); }
}

// DIP
class SistemaRH {
 private funcionario: Trabalhavel;

 constructor(funcionario: Trabalhavel) {
   this.funcionario = funcionario;
 }

 iniciarTrabalho() {
   this.funcionario.trabalhar();
 }
}

// Teste
const sistema = new SistemaRH(new Desenvolvedor());
sistema.iniciarTrabalho();
