const urlAll = "http://localhost:4000/api/etapas/all";
const urlAdd = "http://localhost:4000/api/etapas/add";
const urlDelete = "http://localhost:4000/api/etapas/del";
const urlOne = "http://localhost:4000/api/etapas/one";
const urlUpdate = "http://localhost:4000/api/etapas/upd";

//Read
export const allEtapas = async () =>{
    try {
        const etapas = await fetch(urlAll);
        const infoEtapas = etapas.json();
        return infoEtapas;
    } catch (error) {
        console.log(error);
    }
}

//Insert
export const addEtapa = async (registro) => {
    try {
      await fetch(`${urlAdd}/`, {
        method: "POST",
        body: JSON.stringify(registro),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location = "etapa.html";
    } catch (error) {
        console.log(error);
    }
};

//Delete
export const deleteEtapa = async (id) =>{
    try {
        await fetch(`${urlDelete}/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type":"application/json",
            }
        });
        window.location.href = "etapa.html"
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
export async function updateEtapa(data,id){
    try {
            await fetch(`${urlUpdate}/${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type':"application/json",
            },
        });
        window.location.href = "etapa.html"
    } catch (error) {
        console.log(error);
    }
};