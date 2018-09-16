import User from '../models/User'


export default class MainController{

  public static async post (req, res) : Promise<any> {

    const user = User.create({
      'name': 'Jane',
      'lastname':'Doe',
      'password': 'password'
    });

    const userCreated = await user.save();
    return res.json({
      message: ''
    })
  }

  public static async update (req, res) : Promise<any> {

    //let user = new User();
    //
     const user = User.create({
      'id': 1,
      'name': 'Jane',
      'lastname':'Doe'
    });

    const userUpdated = await user.save();
    return res.json({
      message: userUpdated.toJson()
    })
  }

  public static async index (req, res) : Promise<any> {

    //const response = await User.find(1);

    const response = await User.select('users.*, employees.gender').leftJoin('employees', 'employees.user_id', '=', 'users.id').where('users.id', '=', 3).first()

    return res.json({
      message: response.toJson()
    })
  }

  public static async fetch(req, res) : Promise<any> {
  
    const response = await User.fetchAll()
    //const user = await User.find(2);

    return res.json({
      message: response.toJson()
    })
  }

}
