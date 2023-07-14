import express from "express";
import cors from "cors";
import ciclistasRoutes from '../routes/ciclista.routes.js';
import equiposRoutes from '../routes/equipo.routes.js';
import etapasRoutes from '../routes/etapa.routes.js';
import premiosRoutes from '../routes/premio.routes.js';

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.ciclistasPath = '/api/ciclistas';
        this.equiposPath = '/api/equipos';
        this.etapasPath = '/api/etapas';
        this.premiosPath = '/api/premios';
        this.middlewars();
        this.routes();
    }

    middlewars(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.ciclistasPath, ciclistasRoutes);
        this.app.use(this.equiposPath, equiposRoutes);
        this.app.use(this.etapasPath, etapasRoutes);
        this.app.use(this.premiosPath, premiosRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT ${this.port}`);
        });
    }
}

export default Server;