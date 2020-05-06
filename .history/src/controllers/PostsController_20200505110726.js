import posts from '../models/Post';


class PostController {
  static async read(req, res) {
    const index = posts.findIndex((p) => +p.id === +req.query.id);
  if(index === -1) {
    res.status(404).json({ status: false, message: 'Post not found' })
  }

    res.json(posts[index])
  }

  static async list(req, res) { 
    res.json(posts);
  }

  static async create(req, res) { 
    posts.push(req.body)

    res.json({status: true, post: req.body})
  }
}

export default PostController;