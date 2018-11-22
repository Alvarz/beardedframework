import User from '../models/User'
import { MainController, ResponseService }  from '@beardedframework/core'
import Logger  from '@beardedframework/logger'
import { to } from '@beardedframework/lumberjack';

/*
 * @class UserController
 */
export default class UserController extends MainController{
  /*
   * method to store users
   * @param {express.req}
   * @param {express.res}
   * @return {object} 
   * */
  public store =  async(req, res) => {

    let err, userCreated;
    [err, userCreated] = await to(this.storeCrud(User, req));
    
    if(err || !userCreated){
      Logger.error(err)
      return ResponseService.error('error', err, res);
    }
    return ResponseService.success('user was succefully created', userCreated.toJson(), res)
  }

  /*
   * method to update users
   * @param {express.req}
   * @param {express.res}
   * @return {object} 
   * */
  public update = async  (req, res) => {

    //let user = new User();
    //
    let err, userUpdated;
    [err, userUpdated] = await to(this.updateCrud(User, req));

    if(err || !userUpdated){
      Logger.error(err)
      return ResponseService.error('error', err, res);
    }
    return ResponseService.success('user was succefully updated', userUpdated.toJson(), res)
  }

  /*
   * method to get a user
   * @param {express.req}
   * @param {express.res}
   * @return {object} 
   * */
  public get = async (req, res) => {

    Logger.info('get');
    const id = req.params.id;
    const user = await this.getCrud(User, id)
    return ResponseService.success('ok', user.toJson(), res)
  }

  /*
   * method to fetch users
   * @param {express.req}
   * @param {express.res}
   * @return {object} 
   * */
  public fetch = async (req, res) =>  {

    const page = req.query.page;
    const users = await this.fetchCrud(User, page);
    const usersFetched = (page > 0) ? users : users.toJson();
    return ResponseService.success('ok', usersFetched, res)
  }
}
