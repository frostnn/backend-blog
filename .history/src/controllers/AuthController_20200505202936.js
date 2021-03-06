import users from '../models/Users';
import TryCatchErrorDecorator from '../decorators/TryCatchErrorDecorator';
import HttpError from '../exeptions/httpError';
class AuthController {
  @TryCatchErrorDecorator
  static async auth(req, res) {
    const {login, password} = req.body;
    const user = users.find((users) => users.login === login && users.password === password );
  
    if(!user) {
      //res.status(401).json({ status: false, message: 'Incorrect user login or password!' })
    throw new HttpError('incorrect login or password', 401)
    }
    
    res.json({status: true, user})
    }
}

export default AuthController;