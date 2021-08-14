# Classes úteis para gerar e validar CPF

 - instalação:
 npm i gera_valida_cpf_br

 - importar:
 const { ValidaCPF, GeraCPF} = require('gera_valida_cpf_br')

 ```Como usar?

 - ValidaCPF(cpf): Essa classe recebe um cpf como construtor e precisa ter o método valida() chamado para validar o cpf.

  - GeraCPF(): Essa classe irá gerar um novo cpf através do método valida().
