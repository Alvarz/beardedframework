import { Model } from '@beardedframework/lumberjack';


export default Employee  extends Model{

  /*
   * @var { string } the database table name
   * */
  public table : string = 'employees';

  /*
   * @var { array } the fillable fields of database
   * */
  public fillable : Array<string> = [];
  
  /*
   * @var { array } the hidden fields of database
   * */
  public hidden : Array<string> = [];

  /*
   * class constructor
   * */
  constructor(data : any = {}){
     super(data);
  }
}

