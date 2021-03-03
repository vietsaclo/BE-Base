import {Router, Request, Response} from 'express';
import {PORT} from './config_cho_tui'

const router = Router();
const getRoot_DEFAULT = (req: Request, res: Response) => {
    return res.status(200).send(`WELCOM TO YOU: Read API Doc at: http://localhost:${PORT}/api-docs`);
};
router.get('/', getRoot_DEFAULT);

export default router;