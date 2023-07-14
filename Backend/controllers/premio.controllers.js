import Premio from "../models/Premios.js";

const getPremio = async (req, res)=>{
    const premios = await Premio.find();
    res.json(premios);
};

const postPremio = async (req, res)=>{
    const premio = new Premio(req.body);
    try {
        const nuevoPremio = await premio.save();
        res.json(nuevoPremio);
    } catch (error) {
        console.log(error);
    }
};

const deletePremio = async (req, res)=>{
    try {
        await Premio.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"});
    }
};

const onePremio = async (req, res)=>{
    try {
        const premio = await Premio.findOne({_id:req.params.id});
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"});
    }
}

const putPremio = async (req, res)=>{
    try {
        const premio = await Premio.findOne({_id:req.params.id});
        if (req.body.nombre) {
            premio.nombre = req.body.nombre;
        }
        if (req.body.descripcion) {
            premio.descripcion = req.body.descripcion;
        }
        if (req.body.ganador) {
            premio.ganador = req.body.ganador;
        }
        if (req.body.equipo) {
            premio.equipo = req.body.equipo;
        }
        await premio.save();
        res.send(premio);
    } catch (error) {
        res.status(404);
        res.send({error: "Premio no existe"});
    }
};


export {getPremio, postPremio, deletePremio, onePremio, putPremio};