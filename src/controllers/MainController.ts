import User from '../models/User'


export default class MainController{
  
  /*
   *
   * used to save data
   *
   * @ object req
   * @ object res
   *
   * @return Promise
   *
   * */
  public static async store (req, res) : Promise<any> {

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

  /*
   *
   * used to update data
   *
   * @ object req
   * @ object res
   *
   * @return Promise
   *
   * */
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

  /*
   *
   * main entry
   *
   * @ object req
   * @ object res
   *
   * @return Promise
   *
   * */
    public static async get (req, res) : Promise<any> {
  
      let data = User.find(req.id);

      return res.json(data.toJson())
  }
  /*
   *
   * main entry
   *
   * @ object req
   * @ object res
   *
   * @return Promise
   *
   * */
    public static async index (req, res) : Promise<any> {

    return res.json({
      message: "hello world"
    })
  }

  /*
   *
   * used to fetch data
   *
   * @ object req
   * @ object res
   *
   * @return Promise
   *
   * */
  public static async fetch(req, res) : Promise<any> {
  
    const response = await User.fetchAll()
    //const user = await User.find(2);

    return res.json({
      message: response.toJson()
    })
  }

}
