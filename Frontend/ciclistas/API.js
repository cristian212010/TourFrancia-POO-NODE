const urlAll = "http://localhost:4000/api/ciclistas/all";
const urlAdd = "http://localhost:4000/api/ciclistas/add";
const urlDelete = "http://localhost:4000/api/ciclistas/del";
const urlOne = "http://localhost:4000/api/ciclistas/one";
const urlUpdate = "http://localhost:4000/api/ciclistas/upd";

//Read
export const allCiclistas = async () =>{
    try {
        const ciclistas = await fetch(urlAll);
        const infoCiclistas = ciclistas.json();
        return infoCiclistas;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addCiclista = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "index.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteCiclista = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "index.html"
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
export async function updateCiclista(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "index.html"
    } catch (error) {
        console.log(error);
    }
};