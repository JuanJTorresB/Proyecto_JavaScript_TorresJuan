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

  const crearRecurso = async()=>{
    let recursoEstructura = {
        nombre_recurso : "a",
        url_portada : "a",
        formato_recurso : "a",
        generos_recurso : [],
        plataformas_recurso : [],
        estado_recurso : "",
        fecha_terminacion : "",
        valoracion_final : "",
        resenia : "",
    }
  }

//addRecurso("", 1)