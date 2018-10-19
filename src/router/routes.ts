import * as express from 'express'
import MainController from '../controllers/MainController'
import UserController from '../controllers/UserController'
import { middlewares } from '../config/middlewares'

export default class Routes{

  private router;
  private userController;
  /*
   *
   * routes class constructor
   *
   * @return void
   *
   * */
  constructor(){

    this.router = express.Router();

    this.userController = new UserController();
    // register middlewares
    this.router.all('*',  middlewares);
  }

  /*
   *
   * the router to be created
   *
   * @return express.Router
   *
   * */
  public paths() : express.Router {

    this.router.get('/users/:id', this.userController.get)
    this.router.get('/users/', this.userController.fetch)
    this.router.post('/users/', this.userController.store)
    this.router.put('/users/:id', this.userController.update)
      /*this.router.route('/users')
      .get(MainController.index )
      .put(MainController.update )
      .post(MainController.post )*/

    return this.router;
  }


}
  
