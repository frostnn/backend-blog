import users from '../models/Users';


class AuthController {
  static async auth(req, res) {
    const {login, password} = req.body;

    const user = users.find((users) => users.login === login && users.password === password );
  
    if(!user) {
      res.status(401).json({ status: false, message: 'Incorrect user login or password!' })
    }
    
    res.json({status: true, user})
    }
}

export default AuthController;