import { Router } from 'express';
import {getPremio, postPremio, deletePremio, onePremio, putPremio} from '../controllers/premio.controllers.js';

const router = Router();

router.get("/all", getPremio);

router.post("/add", postPremio);

router.delete("/del/:id", deletePremio);

router.get("/one/:id", onePremio);

router.put("/upd/:id", putPremio);


export default router;