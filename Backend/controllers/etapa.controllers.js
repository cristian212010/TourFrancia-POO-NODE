import Etapa from "../models/Etapas.js";

const getEtapa = async (req, res)=>{
    const etapas = await Etapa.find();
    res.json(etapas);
};

const postEtapa = async (req, res)=>{
    const etapa = new Etapa(req.body);
    try {
        const nuevaEtapa = await etapa.save();
        res.json(nuevaEtapa);
    } catch (error) {
        console.log(error);
    }
};

const deleteEtapa = async (req, res)=>{
    try {
        await Etapa.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"});
    }
};

const oneEtapa = async (req, res)=>{
    try {
        const etapa = await Etapa.findOne({_id:req.params.id});
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"});
    }
}

const putEtapa = async (req, res)=>{
    try {
        const etapa = await Etapa.findOne({_id:req.params.id});
        if (req.body.numero) {
            etapa.numero = req.body.numero;
        }
        if (req.body.fecha) {
            etapa.fecha = req.body.fecha;
        }
        if (req.body.inicio) {
            etapa.inicio = req.body.inicio;
        }
        if (req.body.fin) {
            etapa.fin = req.body.fin;
        }
        if (req.body.distancia) {
            etapa.distancia = req.body.distancia;
        }
        if (req.body.tipo) {
            etapa.tipo = req.body.tipo;
        }
        await etapa.save();
        res.send(etapa);
    } catch (error) {
        res.status(404);
        res.send({error: "Etapa no existe"});
    }
};


export {getEtapa, postEtapa, deleteEtapa, oneEtapa, putEtapa};