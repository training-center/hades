# Hades - Back-End da Plataforma do Mentoria

## Get Started

Nós recomendamos a utilização do [Docker](https://www.docker.com/) para execução da nossa plataforma, assim você não precisará configurar seu ambiente.

### Rodando a API com Docker

- Primeiramente instale o Docker em sua maquina conforme a recomendações do site.
- Clone esse repositório na sua maquina.
- Entre na pasta clonada e execute:

```docker-compose up -d```

Após a execução do comando o API deve estár disponível em:

```localhost:3000```

Qualquer modificação em nos arquivos `.js` do projeto deverão recaregar o node automáticamente, pois este esta sendo executado através de um `nodemon`, assim é só codar que seu servidor irá atualizar automáticamente.

### Swagger

A API utiliza a documentação do [Swagger](https://swagger.io/).

Com o projeto rodando, a documentação da API deve estár disponível em:

```localhost:3000/docs```

#### Outras plataformas

Em caso de erros na composição do *Docker*, tais como: 

```ERROR: no supported platform found in manifest list```

Consulte outras plataformas: [i686](i686.md).

### Rodando os testes com Docker

Ha um `docker-compose` para rodar os testes da aplicação, nele irá criar um container com um banco novo para testes. Esse compose ira executar as migrations e seed no banco para testes, sequido dos testes unitários e aceitação e depois ira automáticamente desligar os containers para testes.

Para executar os testes é só executar o sequinte comando:

```docker-compose -f docker-compose.test.yml up --abort-on-container-exit | grep "test_1"```

### Utilizando Migrations

A arquitetura do projeto foi pensada utilizando o [migration do Sequelize](http://sequelize.readthedocs.io/en/v3/docs/migrations/).

Não há necessidade de instalar o `sequelize-cli` em sua maquina tendo em vista que este está presente dentro do container web.

Caso precise executar/criar uma migration entre no container web utilizando o sequinte comando:

```docker-compose exec --user 1000 web bash```
  
Dentro do container o `sequelize-cli` deverá estar presente em `/node_modules/.bin/sequelize` assim é só executar os comandos normalmente.

Os arquivos criados estarão disponiveis também fora do container, então poderás utilizar seu editor favorito.
