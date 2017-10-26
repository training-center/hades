# Hades - Back-End da Plataforma do Mentoria

## Get Started

Nós recomendamos a utilização do [Docker](https://www.docker.com/) para execução da nossa plataforma, assim você não precisará configurar seu ambiente.

### Utilizando Docker

Primeiramente instale o Docker em sua maquina conforme a recomendações do site.
Clone esse repositório na sua maquina.
Entre na pasta clonada e execute

```docker-compose up -d```

Após a execução do comando o API deve estár disponível em

```localhost:3000```

Qualquer modificação em nos arquivos `.js` do projeto deverão recaregar o node automáticamente, pois este esta sendo executado através de um `nodemon`, assim é só codar que seu servidor irá atualizar automáticamente.

### Utilizando Migrations

A arquitetura do projeto foi pensada utilizando o [migration do Sequelize](http://sequelize.readthedocs.io/en/v3/docs/migrations/).

Não há necessidade de instalar o `sequelize-cli` em sua maquina tendo em vista que este está presente dentro do container web.
Caso precise executar/criar uma migration entre no container web utilizando o sequinte comando

```docker exec -ti hades_web_1 bash```
  
(caso seu container web esteja com outro nome troque `hades_web_1` pelo nome do container)

Dentro do container o `sequelize-cli` deverá estar presente em `/node_modules/.bin/sequelize` assim é só executar os comandos normalmente.

Os arquivos criados estarão disponiveis também fora do container, então poderás utilizar seu editor favorito.
