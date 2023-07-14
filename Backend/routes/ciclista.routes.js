import { Router } from 'express';
import {getCiclista, postCiclista, deleteCiclista, oneCiclista, putCiclista} from '../controllers/ciclista.controllers.js';

const router = Router();

router.get("/all", getCiclista);

router.post("/add", postCiclista);

router.delete("/del/:id", deleteCiclista);

router.get("/one/:id", oneCiclista);

router.put("/upd/:id", putCiclista);


export default router;