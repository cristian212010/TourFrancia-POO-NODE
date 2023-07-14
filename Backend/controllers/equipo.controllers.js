import Equipo from "../models/Equipos.js";

const getEquipo = async (req, res)=>{
    const equipos = await Equipo.find();
    res.json(equipos);
};

const postEquipo = async (req, res)=>{
    const equipo = new Equipo(req.body);
    try {
        const nuevoEquipo = await equipo.save();
        res.json(nuevoEquipo);
    } catch (error) {
        console.log(error);
    }
};

const deleteEquipo = async (req, res)=>{
    try {
        await Equipo.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no existe"});
    }
};

const oneEquipo = async (req, res)=>{
    try {
        const equipo = await Equipo.findOne({_id:req.params.id});
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no existe"});
    }
}

const putEquipo = async (req, res)=>{
    try {
        const equipo = await Equipo.findOne({_id:req.params.id});
        if (req.body.nombre) {
            equipo.nombre = req.body.nombre;
        }
        if (req.body.pais) {
            equipo.pais = req.body.pais;
        }
        if (req.body.director) {
            equipo.director = req.body.director;
        }
        await equipo.save();
        res.send(equipo);
    } catch (error) {
        res.status(404);
        res.send({error: "Equipo no existe"});
    }
};


export {getEquipo, postEquipo, deleteEquipo, oneEquipo, putEquipo};