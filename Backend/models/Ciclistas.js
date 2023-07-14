import mongoose from "mongoose";

const cliclistaSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    equipo:{
        type: String,
        require: true,
        trim: true
    },
    nacionalidad:{
        type: String,
        require: true,
        trim: true
    },
    edad:{
        type: Number,
        require: true,
        trim: true
    }
},
{
    timestamps: true
}
);

const Ciclista = mongoose.model("ciclistas", cliclistaSchema);

export default Ciclista;