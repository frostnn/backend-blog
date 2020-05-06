import { Router } from 'express';
import PostsController from '../controllers/PostsController';

const router = Router();

router.get('./post', PostsController.read);
router.get('./posts', PostsController.list);
router.post('./posts', PostsController.create);
router.put('./posts', PostsController.update);
router.delete('./posts', PostsController.delete);

export default router;