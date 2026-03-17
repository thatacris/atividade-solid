## Parte 1 - Identificação das Violações

### ISP (Interface Segregation Principle)

A interface `Funcionario` possui métodos demais:

- trabalhar()
- registrarPonto()
- receberSalario()
- gerenciarEquipe()
- escreverCodigo()

Problema:
Nem todos os funcionários utilizam todos esses métodos.

Exemplos de erro no código:
- Gerente não escreve código
- Desenvolvedor não gerencia equipe
- Estagiário não recebe salário

Isso fica evidente pelo uso de:
throw new Error(...)

Impacto:
- Métodos desnecessários
- Código forçado a lançar erros
- Dificuldade de manutenção

LSP (Liskov Substitution Principle)

As classes não conseguem substituir corretamente a interface `Funcionario`.

Problema:
Qualquer classe que implementa `Funcionario` deveria funcionar sem erros, mas isso não acontece.

Exemplos:
- Gerente falha ao chamar escreverCodigo()
- Desenvolvedor falha ao chamar gerenciarEquipe()
- Estagiário falha em vários métodos

Erro no código:
Uso de throw new Error(...) em métodos obrigatórios.

Impacto:
- Quebra de contrato
- Comportamento inconsistente
- Erros em tempo de execução

 DIP (Dependency Inversion Principle)

O sistema depende diretamente de implementações concretas.

Problema:
Não existe uso de abstrações.

Impacto:
- Alto acoplamento
- Difícil manutenção
- Difícil expansão e testes


# Parte 2 - Explicação da Correção

 ISP

Separar a interface grande em interfaces menores.

Cada classe deve implementar apenas o que faz sentido.


### LSP

Nenhuma classe deve lançar erro em métodos herdados.

Se um método não faz sentido, ele não deve existir para aquela classe.

---

### DIP

O sistema deve depender de abstrações, não de classes concretas.

Isso permite trocar implementações sem modificar o sistema.

---

## Parte 3 - Novo Tipo: Freelancer

Características:
- Trabalha
- Escreve código

Não faz:
- Não registra ponto
- Não recebe salário fixo
- Não gerencia equipe

---

## Conclusão

O problema do código original é obrigar todas as classes a fazerem tudo, mesmo quando não faz sentido.

Isso gera:
- Erros no código
- Quebra de comportamento
- Alto acoplamento

Após aplicar os princípios SOLID:
- Cada classe faz apenas o necessário
- O sistema se torna mais estável
- Fica mais fácil adicionar novos tipos de funcionários
