import mongoose from "mongoose";

const equipoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    pais:{
        type: String,
        require: true,
        trim: true
    },
    director:{
        type: String,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Equipo = mongoose.model("equipos", equipoSchema);

export default Equipo;