import { Model } from '@beardedframework/lumberjack';


export default class User extends Model{

  public table : string = 'users';

  public fillable : Array<string> = ['name', 'lastname'];
  
  public hidden : Array<string> = ['api_token', 'remember_token', 'password'];

  constructor(data : any = {}){
    super(data);
  }
}
