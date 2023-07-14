const urlAll = "http://localhost:4000/api/equipos/all";
const urlAdd = "http://localhost:4000/api/equipos/add";
const urlDelete = "http://localhost:4000/api/equipos/del";
const urlOne = "http://localhost:4000/api/equipos/one";
const urlUpdate = "http://localhost:4000/api/equipos/upd";

//Read
export const allEquipos = async () =>{
    try {
        const equipos = await fetch(urlAll);
        const infoEquipos = equipos.json();
        return infoEquipos;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addEquipo = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "equipo.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteEquipo = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "equipo.html"
    } catch (error) {
        console.log(error);
    }
};

//Read One
export async function selectOne(id) {
    try {
        const response = await fetch(`${urlOne}/${id}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
};

//Update
export async function updateEquipo(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "equipo.html"
    } catch (error) {
        console.log(error);
    }
};