import User from '../models/User'
//import MainController from '../controllers/MainController'
import { MainController }  from '@beardedframework/core'
import { to } from '@beardedframework/lumberjack';

export default class UserController extends MainController{
  /*
   *
   *
   *
   * */
  public store =  async(req, res) => {

    let err, userCreated;
    [err, userCreated] = await to(this.storeCrud(User, req));
    
    if(err || !userCreated)
      return this.response.error('error', err, res);
    
    return this.response.success('user was succefully created', userCreated.toJson(), res)
  }

  /*
   *
   *
   *
   * */
  public update = async  (req, res) => {

    //let user = new User();
    //
    let err, userUpdated;
    [err, userUpdated] = await to(this.updateCrud(User, req));

    if(err || !userUpdated)
      return this.response.error('error', err, res);
    
    return this.response.success('user was succefully updated', userUpdated.toJson(), res)
  }

  /*
   *
   *
   *
   * */
  public get = async (req, res) => {

    console.log('get');
    const id = req.params.id;
    const user = await this.getCrud(User, id)
    return this.response.success('ok', user.toJson(), res)
  }

  /*
   *
   *
   *
   * */
  public fetch = async (req, res) =>  {

    const page = req.query.page;
    const users = await this.fetchCrud(User, page);
    const usersFetched = (page > 0) ? users : users.toJson();
    return this.response.success('ok', usersFetched, res)
  }

}
