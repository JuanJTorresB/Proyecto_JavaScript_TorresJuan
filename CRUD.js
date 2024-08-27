const addRecurso = async (niuwRecurso, id) => {
    respuesta = await fetch(`${url}/users/${id}/recursos`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({niuwRecurso}),
    });
    if (respuesta.ok) {
      console.log("Recurso Añadido");
      return respuesta.json();
    } else {
      console.error("Error al Añadir Recurso");
    }
  };

/*   const crearRecurso = async()=>{
    let recursos = []
    let niuwRecurso = {
        nombre_recurso:"En Agosto Nos Vemos",
        estado_recurso:"Terminado",
        genero_recurso:"Drama"
    }
    recursos.push(niuwRecurso)
    return recursos
  } */

addRecurso("Juanitos", 1)