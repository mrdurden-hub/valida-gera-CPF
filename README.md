# Classes úteis para gerar e validar CPF
 
Como usar ?
 
```shell
 npm i gera_valida_cpf_br
```

 ```js
 const { ValidaCPF, GeraCPF} = require('gera_valida_cpf_br')
```

 - ValidaCPF(cpf): Essa classe recebe um cpf como construtor e precisa ter o método valida() chamado para validar o cpf.

  - GeraCPF(): Essa classe irá gerar um novo cpf através do método valida().
