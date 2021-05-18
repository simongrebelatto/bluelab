- Utilização -

  Na pasta /app, inserir no terminal "yarn dev" para iniciar o servidor
  (caso não utilizado antes, irá criar o bd, após isso, ir no terminal novamente aplicar a execução da migration com "yarn typeorm migration:run")
  
  Utilizando Insomnia
    criamos uma rota post para localhost:3333/user para a criação de um novo usuário
    {
      "name": "string",
      "phone": "number";
      "cpf": "number";
    }
    
    criamos uma rota get para localhost:3333/user para buscar todos os usuários
    {

    }
    
    criamos uma rota post para localhost:3333/cpf para consultar se cpf já está cadastrado
    {
      "cpf": "number"
    }