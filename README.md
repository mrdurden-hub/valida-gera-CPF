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
```
![imgmd](https://user-images.githubusercontent.com/76436331/129997129-47f860f3-31af-47ed-bee3-53490da6619d.jpg)

