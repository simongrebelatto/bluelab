import { Request, response, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/userRepository';

class UserController {

  //Criar Usuário
  async create( request: Request, response: Response ) {
    const { user_name, phone, cpf } = request.body;
    const userRepository = getCustomRepository(UserRepository);

    // Verificações e Validações
    const userAlreadyExists = await userRepository.findOne({
      cpf
    })

    if(userAlreadyExists) {
      return response.status(400).json({
        success: false,
        message: "User Already Exists"
      });
    }
    else if (phone.length < 11 || phone.length > 11) {
      return response.status(400).json({
        success: false,
        message: "Phone is not valid"
      });      
    }
    else if(cpf.length < 11 || cpf.length > 11) {
      return response.status(400).json({
        success: false,
        message: "CPF is not valid"
      });
    }

    const user = userRepository.create({
      user_name, 
      phone,
      cpf
    })

    await userRepository.save(user);

    return response.status(201).json({
      success: true,
      message: "User successfully registered",
      user: user_name,
      telefone: phone,
      cpf: cpf
    });

  }

  //Consultar CPF
  async consult(request: Request, response: Response) {

    const { cpf } = request.body;
    const userRepository = getCustomRepository(UserRepository);

    const consultCpf = await userRepository.findOne({
      cpf
    })

    if(consultCpf) {
      return response.status(201).json({
        success: true,
        message: "CPF Already Registered"
      });
    } else {
      return response.status(201).json({
        success: false,
        message: "CPF is not Registered"
      });
    }

  }
  
  //Listar todos os usuários
  async list(request: Request, response: Response) {

    const userRepository = getCustomRepository(UserRepository);
    const list = await userRepository.find();
    return response.status(200).json(list);

  }
}

export { UserController }
