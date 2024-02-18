import { Request, Response, Router } from 'express';
import UserCode from '../models/usercode';
const router: Router = Router();

router.post('/fetchID', async (req: Request, res: Response) => {
  const userCode = new UserCode(req.body)
  await userCode.save()
  res.json(userCode._id.toHexString());
});

router.get('/getCode', async (req: Request, res: Response) => {
  setTimeout(async () => {
    const userCode = await UserCode.findById(req.query.codeId);
    res.json(userCode);
  }, 5000); // 5000 milliseconds = 5 seconds
});


export default router;