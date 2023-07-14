import Ciclista from "../models/Ciclistas.js";

const getCiclista = async (req, res)=>{
    const ciclistas = await Ciclista.find();
    res.json(ciclistas);
};

const postCiclista = async (req, res)=>{
    const ciclista = new Ciclista(req.body);
    try {
        const nuevoCiclista = await ciclista.save();
        res.json(nuevoCiclista);
    } catch (error) {
        console.log(error);
    }
};

const deleteCiclista = async (req, res)=>{
    try {
        await Ciclista.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"});
    }
};

const oneCiclista = async (req, res)=>{
    try {
        const ciclista = await Ciclista.findOne({_id:req.params.id});
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"});
    }
}

const putCiclista = async (req, res)=>{
    try {
        const ciclista = await Ciclista.findOne({_id:req.params.id});
        if (req.body.nombre) {
            ciclista.nombre = req.body.nombre;
        }
        if (req.body.equipo) {
            ciclista.equipo = req.body.equipo;
        }
        if (req.body.nacionalidad) {
            ciclista.nacionalidad = req.body.nacionalidad;
        }
        if (req.body.edad) {
            ciclista.edad = req.body.edad;
        }
        await ciclista.save();
        res.send(ciclista);
    } catch (error) {
        res.status(404);
        res.send({error: "Ciclista no existe"});
    }
};


export {getCiclista, postCiclista, deleteCiclista, oneCiclista, putCiclista};
