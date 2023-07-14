import { Router } from 'express';
import {getEquipo, postEquipo, deleteEquipo, oneEquipo, putEquipo} from '../controllers/equipo.controllers.js';

const router = Router();

router.get("/all", getEquipo);

router.post("/add", postEquipo);

router.delete("/del/:id", deleteEquipo);

router.get("/one/:id", oneEquipo);

router.put("/upd/:id", putEquipo);


export default router;