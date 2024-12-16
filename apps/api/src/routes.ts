/** Dependencies */
import { Router } from 'express';

/** Import routers */

/** Create main express router */
const router: Router = Router();

/** Apply all sub-routers */
router.get('/', (req, res) => {
  res.json({ active: true });
});

/** Export the main router */
export default router;
