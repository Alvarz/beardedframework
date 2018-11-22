import { Model } from '@beardedframework/lumberjack';

/*
 * @Class User
 * */
export default class User extends Model{

  /*
   * @var {string} table to be used
   * */
  public table : string = 'users';

  /*
   * @var {Array<string>} fillable fields
   * */
  public fillable : Array<string> = ['username', 'name', 'lastname', 'email', 'api_token'];
  
  /*
   * @var {Array<string>} hidden fields
   * */
  public hidden : Array<string> = ['api_token', 'remember_token', 'password'];

  /*
   * class constructor
   * */
  constructor(data : any = {}){
    super(data);
  }
}
