import * as express from 'express'
import MainController from '../controllers/MainController'
import MainMiddleware from './middlewares/MainMiddleware'

export default class Routes{

  private router;
  /*
   *
   * routes class constructor
   *
   * @return void
   *
   * */
  constructor(){

    this.router = express.Router();

    // register middlewares
    this.router.use(MainMiddleware);
  }

  /*
   *
   * the router to be created
   *
   * @return express.Router
   *
   * */
  public paths() : express.Router {
    
    this.router.get('/', MainController.index );
    this.router.get('/update', MainController.update );
    this.router.get('/store', MainController.store );
    this.router.get('/fetch', MainController.fetch );

    return this.router;
  }

}
  
