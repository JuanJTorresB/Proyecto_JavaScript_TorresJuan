//Traer Id de el User

var IdUserActual = "-1";

if (sessionStorage.getItem("credentials") !== "") {
  //Mostrar Pagina según Session ID
  main.classList.toggle("hidden", false);
  dashboard.classList.toggle("hidden", false);
  IdUserActual = sessionStorage.getItem("credentials");
} else if (localStorage.getItem("credentials") !== "") {
  //Mostrar Pagina según Local ID
  main.classList.toggle("hidden", false);
  dashboard.classList.toggle("hidden", false);
  IdUserActual = localStorage.getItem("credentials");
}

const addRecurso = async (recursos) => {
  respuesta = await fetch(`${url}/users/1/recursos`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(recursos),
  });
  if (respuesta.ok) {
    console.log("Recurso Añadido");
    return respuesta.json();
  } else {
    console.error("Error al Añadir Recurso");
  }
};

const crearRecurso = async (
  nombre,
  url,
  formato,
  generos,
  plataformas,
  estado
) => {
  let recursoEstructura = {
    nombre_recurso: nombre,
    url_portada: url,
    formato_recurso: formato,
    generos_recurso: generos,
    plataformas_recurso: plataformas,
    estado_recurso: estado,
    fecha_terminacion: "",
    valoracion_final: "",
    resenia: "",
  };
  await addRecurso(recursoEstructura);
};

const checkbox_seleccionados = (querySelectorAllArgg) => {
  let arrFinal = [];
  const checkbox_group = document.querySelectorAll(querySelectorAllArgg);
  for (checkbox of checkbox_group) {
    if (checkbox.checked) {
      arrFinal.push(checkbox.value);
    }
  }
  return arrFinal;
};

const formCrearRecurso = document.getElementById("formCrearRecurso");

const dialog_crear_recurso = document.getElementById("dialog_crear_recurso");

const boton_crear_recuros = document.getElementById("boton_crear_recuros");

boton_crear_recuros.addEventListener("click", (event) => {
  event.preventDefault();
  dialog_crear_recurso.classList.toggle("invisible", false);
});

formCrearRecurso.addEventListener("submit", (event) => {
  event.preventDefault();
  const form_nombre_recurso = document.getElementById(
    "form_nombre_recurso"
  ).value;
  const url_recurso = document.getElementById("url_recurso").value;
  const formato_recurso = checkbox_seleccionados('input[name="formato"]');
  const generos_recurso = checkbox_seleccionados('input[name="generos"]');
  const plataforma_recurso = checkbox_seleccionados(
    'input[name="Plataforma_Peli_Serie"]'
  );
  const estado_recurso = checkbox_seleccionados('input[name="Estado"]');
  crearRecurso(
    form_nombre_recurso,
    url_recurso,
    formato_recurso,
    generos_recurso,
    plataforma_recurso,
    estado_recurso
  );
  formCrearRecurso.reset();
  dialog_crear_recurso.classList.toggle("invisible", true);
});

const traerRecursosEstadoEnProgreso = () => {
  let urlRecursos = new URL(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`
  );
  urlRecursos.searchParams.append("estado_recurso", ["En_progreso"]);
  fetch(urlRecursos, {
    method: "GET",
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Recurso No Encontrado");
    })
    .then((resultado) => {
      agregarFiltroEstadoEnProceso(resultado, section_en_progreso);
    })
    .catch((error) => {
      console.error(error);
    });
};

//Id para editar el Recurso

var idRecurso;

const traerEstadoRecurso = async(buscar) => {
  try {
    let urlRecursos = new URL(
      `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`
    );
    urlRecursos.searchParams.append("estado_recurso", buscar);

    const res = await fetch(urlRecursos, {
      method: "GET",
      headers: { "content-type": "application/json" }
    });

    if (res.ok) {
      const tasks = await res.json();
      console.log(tasks);
      return tasks;
    } else {
      console.error("Recurso No Encontrado");
      return [];
    }
  } catch (error) {
    console.error("Error al Traer Estado de Recurso:", error);
    return [];
  }
};

const traerPlataformaRecurso = async(buscar) => {
  try {
    let urlRecursos = new URL(
      `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`
    );
    urlRecursos.searchParams.append("plataformas_recurso", buscar);

    const res = await fetch(urlRecursos, {
      method: "GET",
      headers: { "content-type": "application/json" }
    });

    if (res.ok) {
      const tasks = await res.json();
      console.log(tasks);
      return tasks;
    } else {
      console.error("Recurso No Encontrado");
      return [];
    }
  } catch (error) {
    console.error("Error al Traer Estado de Recurso:", error);
    return [];
  }
};

const traerFormatoGeneros = async(buscar) => {
  try {
    let urlRecursos = new URL(
      `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`
    );
    urlRecursos.searchParams.append("generos_recurso", buscar);

    const res = await fetch(urlRecursos, {
      method: "GET",
      headers: { "content-type": "application/json" }
    });

    if (res.ok) {
      const tasks = await res.json();
      console.log(tasks);
      return tasks;
    } else {
      console.error("Recurso No Encontrado");
      return [];
    }
  } catch (error) {
    console.error("Error al Traer Formato de Recurso:", error);
    return [];
  }
};


const traerFormatoRecurso = async(buscar) => {
  try {
    let urlRecursos = new URL(
      `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`
    );
    urlRecursos.searchParams.append("formato_recurso", buscar);

    const res = await fetch(urlRecursos, {
      method: "GET",
      headers: { "content-type": "application/json" }
    });

    if (res.ok) {
      const tasks = await res.json();
      console.log(tasks);
      return tasks;
    } else {
      console.error("Recurso No Encontrado");
      return [];
    }
  } catch (error) {
    console.error("Error al Traer Formato de Recurso:", error);
    return [];
  }
};

const traerNombreRecurso = async(buscar) => {
  try {
    let urlRecursos = new URL(
      `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`
    );
    urlRecursos.searchParams.append("nombre_recurso", buscar);

    const res = await fetch(urlRecursos, {
      method: "GET",
      headers: { "content-type": "application/json" }
    });

    if (res.ok) {
      const tasks = await res.json();
      console.log(tasks);
      return tasks;
    } else {
      console.error("Recurso No Encontrado");
      return [];
    }
  } catch (error) {
    console.error("Error al Traer Formato de Recurso:", error);
    return [];
  }
};

//Elinimar Racurso

const EliminarRecurso = async (id) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "DELETE",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("No se Puedo Eliminar");
    })
    .then((resultado) => {
      console.log("Card Eliminada");
    })
    .catch((error) => {
      console.error(error);
    });
};

const formEditarRecurso = document.getElementById("formEditarRecurso");

const dialog_editar_recurso = document.getElementById("dialog_editar_recurso");

formEditarRecurso.addEventListener("submit", (event) => {
  event.preventDefault();
  const form_nombre_recurso = document.getElementById(
    "form_nombre_recurso_editar"
  ).value;
  const url_recurso = document.getElementById("url_recurso_editar").value;
  const formato_recurso = checkbox_seleccionados(
    'input[name="formato_editar"]'
  );
  const generos_recurso = checkbox_seleccionados(
    'input[name="generos_editar"]'
  );
  const plataforma_recurso = checkbox_seleccionados(
    'input[name="Plataforma_Peli_Serie_editar"]'
  );
  const estado_recurso = checkbox_seleccionados('input[name="Estado_editar"]');
  EditarRecursoNombreRecurso(idRecurso, form_nombre_recurso);
  EditarRecursoUrlPortada(idRecurso, url_recurso);
  EditarRecursoFormatoRecurso(idRecurso, formato_recurso);
  EditarRecursoGenerosRecurso(idRecurso, generos_recurso);
  EditarRecursoPlataformasRecurso(idRecurso, plataforma_recurso);
  EditarRecursoEstadoRecurso(idRecurso, estado_recurso);
  formEditarRecurso.reset();
  dialog_editar_recurso.classList.toggle("invisible", true);
});

//Editar Recurso

const EditarRecursoNombreRecurso = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ nombre_recurso: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Nombre No Editado");
      return []
    })
    .then((task) => {
      console.log("Nombre Editado");
    })
    .catch((error) => {
      return []
    });
  };

const EditarRecursoFormatoRecurso = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ formato_recurso: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Formato No Editado");
      return []
    })
    .then((task) => {
      console.log("Formato Editado");
    })
      return []
};

const EditarRecursoUrlPortada = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ url_portada: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("URL Portada No Editada");
    })
    .then((task) => {
      console.log("URL Portada Editada");
    })
    .catch((error) => {
      console.error("Error al Editar URL Portada:", error);
    });
};

const EditarRecursoGenerosRecurso = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ generos_recurso: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Géneros No Editados");
    })
    .then((task) => {
      console.log("Géneros Editados");
    })
    .catch((error) => {
      console.error("Error al Editar Géneros:", error);
    });
};

const EditarRecursoPlataformasRecurso = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ plataformas_recurso: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Plataformas No Editadas");
    })
    .then((task) => {
      console.log("Plataformas Editadas");
    })
    .catch((error) => {
      console.error("Error al Editar Plataformas:", error);
    });
};

const EditarRecursoEstadoRecurso = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ estado_recurso: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Estado No Editado");
    })
    .then((task) => {
      console.log("Estado Editado");
    })
    .catch((error) => {
      console.error("Error al Editar Estado:", error);
    });
};

// Terminar tareas

const EditarRecursoFechaTerminacion = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fecha_terminacion: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Fecha de Terminación No Editada");
    })
    .then((task) => {
      console.log("Fecha de Terminación Editada");
    })
    .catch((error) => {
      console.error("Error al Editar Fecha de Terminación:", error);
    });
};

const EditarRecursoValoracionFinal = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ valoracion_final: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Valoración Final No Editada");
    })
    .then((task) => {
      console.log("Valoración Final Editada");
    })
    .catch((error) => {
      console.error("Error al Editar Valoración Final:", error);
    });
};

const EditarRecursoResenia = async (id, nuevo) => {
  fetch(
    `https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ resenia: nuevo }),
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.error("Reseña No Editada");
    })
    .then((task) => {
      console.log("Reseña Editada");
    })
    .catch((error) => {
      console.error("Error al Editar Reseña:", error);
    });
};

const formTerminarRecurso = document.getElementById("formTerminarRecurso");

const dialog_terminar_recurso = document.getElementById(
  "dialog_terminar_recurso"
);

formTerminarRecurso.addEventListener("submit", (event) => {
  event.preventDefault();
  const fecha_terminación = document.getElementById("fecha-terminación").value;
  const valoracion_final = document.getElementById("valoracion-final").value;
  const Resenia = document.getElementById("Resenia").value;
  EditarRecursoEstadoRecurso(idRecurso, ["Terminado"]);
  EditarRecursoFechaTerminacion(idRecurso, fecha_terminación);
  EditarRecursoValoracionFinal(idRecurso, valoracion_final);
  EditarRecursoResenia(idRecurso, Resenia);
  formTerminarRecurso.reset();
  dialog_terminar_recurso.classList.toggle("invisible", true);
});
