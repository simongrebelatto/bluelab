import { Router } from 'express';
import { UserController } from './controllers/userController'

const routes = Router();

const userController = new UserController();
routes.post('/user', userController.create);
routes.get('/user', userController.list)
routes.post('/cpf', userController.consult)


export { routes };