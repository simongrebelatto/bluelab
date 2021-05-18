- Aplicação -

/APP
  
  /node_modules = dependências para Node
  
  /src
    /controllers - Arquivos para controles, requests e responses
      - userController.ts = Recebimento de Request, criação de usuário, verificação e consulta, retorno de response com JSON. 
    
    /database = banco de dados
      /migrations = Criações das tabelas e alterações
      /model = Criação de entidades e vinculação dela com o banco de dados
      - index.ts = criação da conexão com bd utilizando opções de ormconfig.json

    /repositories = Faz a interligação entre a entidade e os resto da aplicação
      - userRepository.ts = Classe que interliga as funções de uma entidade com a entidade do Users

    - app.ts = chama a criação do banco de dados, cria o app utilizando o express, deixa por padrão a utilização de JSON e as rotas
    - server.ts = inicia o servidor em node pela porta :3333
    - routes.ts = cria a utilização de rotas e o controller que será usado em cada

  - .gitignore = Arquivos e diretórios para evitar o commit indesejável
  - LICENSE = Licensa MIT
  - ormconfig.json = Configurações para o TypeORM
  - package.json = Configurações, dados, scripts e dependências
  - tsconfig.json = Configurações para uso de Typescript
  - yarn.lock
  - readme.md