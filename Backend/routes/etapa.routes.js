import { Router } from 'express';
import {getEtapa, postEtapa, deleteEtapa, oneEtapa, putEtapa} from '../controllers/etapa.controllers.js';

const router = Router();

router.get("/all", getEtapa);

router.post("/add", postEtapa);

router.delete("/del/:id", deleteEtapa);

router.get("/one/:id", oneEtapa);

router.put("/upd/:id", putEtapa);


export default router;