# Classes úteis para gerar e validar CPF

 
<h3>Instalação:</h3>
 
```shell
 npm i valida-gera-cpf
```

<h3>Importanto as classes:</h3>

 ```js
 const { ValidaCPF, GeraCPF} = require("valida-gera-cpf")
```

 - ValidaCPF(cpf): Essa classe recebe um cpf como argumento e precisa ter o método valida( ) chamado para validar o cpf. Exemplo:

  ```js
 const valido = new ValidaCPF('00000000000').valida()
```
  - GeraCPF(): Essa classe irá gerar um novo cpf através do método geraNovoCpf().

  ```js
 const cpf = new GeraCPF().geraNovoCpf()
<<<<<<< HEAD
```
=======
```

>>>>>>> 130dbb0e6e309d3f5cda9ce4f6ee89a468385372
