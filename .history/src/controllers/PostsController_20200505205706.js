import posts from '../models/Post';
import TryCatchErrorDecorator from '../decorators/TryCatchErrorDecorator';
import HttpError from '../exeptions/httpError';

class PostController {
  @TryCatchErrorDecorator
  static async read(req, res) {
    const index = posts.findIndex((p) => +p.id === +req.params.id);

  if(index === -1) {
    throw new HttpError('Post not found', 404 )
  }

    res.json(posts[index])
  }
  @TryCatchErrorDecorator
  static async list(req, res) { 
    res.json(posts);
  }
  @TryCatchErrorDecorator
  static async create(req, res) { 
    posts.push(req.body)

    res.json({status: true, post: req.body})
  }
  @TryCatchErrorDecorator
  static async update(req, res) { 
    const index = posts.findIndex((p) => +p.id === +req.params.id);

    if(index === -1) {
      throw new HttpError('Post not found', 404 )
    }

    posts[index].header = req.body.header;
    posts[index].content = req.body.content;
    res.json({status: true, post: posts[index]})
  }
  @TryCatchErrorDecorator
  static async delete(req, res) { 
    const index = posts.findIndex((p) => +p.id === +req.params.id);

    if(index === -1) {
      throw new HttpError('Post not found', 404 )
    }
    posts.splice(index, 1);

    res.status(204).end();
  }

}

export default PostController;