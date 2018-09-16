import * as express from 'express'
import  { config } from 'dotenv'
import  Routes  from './router/routes'
//import _ from 'lodash'

class App {
 
  public express;
  
  /*
   *
   * class constructor
   *
   * */
  constructor () {

    this.express = express();
    this.mountRoutes();
    config();
  }
  /*
   *
   * used to mount the routes
   *
   * @return void
   *
   * */
  private mountRoutes (): void {

    const routes = new Routes();
    const router = routes.paths();
    this.express.use('/', router);
  }
}

export default new App().express
