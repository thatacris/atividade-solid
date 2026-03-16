# Atividade SOLID 

<h5> 1- ISP: 
  interface Funcionario {
 trabalhar()
 registrarPonto()
 receberSalario()
 gerenciarEquipe()
 escreverCodigo()
}
resposta- a interface esta muito grande, assim obrigando as classes implementar métodos desnecessários.

LSP: throw new Error("Gerente não escreve código");
Quebra a norma esperada da interface

DIP:private gerente: Gerente = new Gerente(); 
Classe concreta e direta
