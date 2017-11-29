# Hades - Back-End da Plataforma do Mentoria

## Get Started

Nós recomendamos a utilização do [Docker](https://www.docker.com/) para execução da nossa plataforma, assim você não precisará configurar seu ambiente.

### Rodando a API com Docker

- Primeiramente instale o Docker em sua máquina conforme as recomendações do site oficial.
- Clone este repositório na sua máquina.
- Entre na pasta clonada e execute:

```docker-compose up -d```

Após a execução do comando a API deve estar disponível em:

```localhost:3000```

Qualquer modificação nos arquivos `.js` do projeto deverão recarregar o node automaticamente, pois ele estará sendo executado através de um `nodemon`, assim é só codar e seu servidor irá atualizar automaticamente.

#### Outras plataformas

Em caso de erros na composição do *Docker*, tais como: 

```ERROR: no supported platform found in manifest list```

Consulte outras plataformas: [i686](i686.md).

#### Problemas com Windows

Caso você faça clone do repositório e após um ````docker-compose up -d``` recebeu a mensagem de `no such file or directory`, pode ser que seu problema seja com EOL de arquivos do Windows (CRLF). Para isso é bem simples de resolver, delete seu clone do repositorio e configure seu GIT para não clonar automáticamente com CRLF com sequinte comando:
```git config --global core.autocrlf false```

Após isso é só clonar novamente e repositório que deve resolver seu problema. 

### Rodando os testes com Docker

Há um `docker-compose` para rodar os testes da aplicação, com ele haverá a criação de um container com um banco novo para testes. Esse compose irá executar as migrations e seed no banco para testes, seguido dos testes de unidade e de aceitação, e depois irá automaticamente desligar os containers para testes.

Para executar os testes é só executar o seguinte comando:

```docker-compose -f docker-compose.test.yml up --abort-on-container-exit | grep "test_1"```

### Utilizando Migrations

A arquitetura do projeto foi pensada utilizando o [migration do Sequelize](http://sequelize.readthedocs.io/en/v3/docs/migrations/).

Não há necessidade de instalar o `sequelize-cli` em sua máquina tendo em vista que este está presente dentro do container web.

Caso precise executar/criar uma migration, entre no container web utilizando o seguinte comando:

```docker-compose exec --user 1000 web bash```
  
Dentro do container, o `sequelize-cli` deverá estar presente em `/node_modules/.bin/sequelize`, assim é só executar os comandos normalmente.

Os arquivos criados estarão disponíveis também fora do container, então poderás utilizar seu editor favorito.
