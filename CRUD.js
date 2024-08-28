//Traer Id de el User

var IdUserActual = "-1"

if (sessionStorage.getItem("credentials") !== "") {
  //Mostrar Pagina según Session ID
  main.classList.toggle("hidden", false)
  dashboard.classList.toggle("hidden", false)
  IdUserActual = sessionStorage.getItem("credentials")

} else if (localStorage.getItem("credentials") !== "") {
  //Mostrar Pagina según Local ID
  main.classList.toggle("hidden", false)
  dashboard.classList.toggle("hidden", false)
  IdUserActual = localStorage.getItem("credentials")
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

const crearRecurso = async (nombre, url, formato, generos, plataformas, estado) => {
  let recursoEstructura = {
    nombre_recurso: nombre,
    url_portada: url,
    formato_recurso: formato,
    generos_recurso: generos,
    plataformas_recurso: plataformas,
    estado_recurso: estado,
    fecha_terminacion: "",
    valoracion_final: "",
    resenia: ""
  };
  await addRecurso(recursoEstructura)
}

const checkbox_seleccionados = (querySelectorAllArgg) => {
  let arrFinal = []
  const checkbox_group = document.querySelectorAll(querySelectorAllArgg)
  for (checkbox of checkbox_group) {
    if (checkbox.checked) {
      arrFinal.push(checkbox.value)
    }
  }
  return arrFinal
}

const formCrearRecurso = document.getElementById("formCrearRecurso")

const dialog_crear_recurso = document.getElementById("dialog_crear_recurso")

const boton_crear_recuros = document.getElementById("boton_crear_recuros")

boton_crear_recuros.addEventListener("click", (event) => {
  event.preventDefault()
  dialog_crear_recurso.classList.toggle("invisible", false)
})

formCrearRecurso.addEventListener("submit", (event) => {
  event.preventDefault();
  const form_nombre_recurso = document.getElementById("form_nombre_recurso").value;
  const url_recurso = document.getElementById("url_recurso").value;
  const formato_recurso = checkbox_seleccionados('input[name="formato"]');
  const generos_recurso = checkbox_seleccionados('input[name="generos"]');
  const plataforma_recurso = checkbox_seleccionados('input[name="Plataforma_Peli_Serie"]');
  const estado_recurso = checkbox_seleccionados('input[name="Estado"]');
  crearRecurso(form_nombre_recurso, url_recurso, formato_recurso, generos_recurso, plataforma_recurso, estado_recurso);
  formCrearRecurso.reset();
  dialog_crear_recurso.classList.toggle("invisible", true);
})


const traerRecursosEstadoEnProgreso = () => {
  let urlRecursos = new URL(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`);
  urlRecursos.searchParams.append('estado_recurso', ["En_progreso"]);
  fetch(urlRecursos, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Recurso No Encontrado")
  }).then(resultado => {
    agregarFiltroEstadoEnProceso(resultado, section_en_progreso)
  }).catch(error => {
    console.error(error)
  })

}

const section_en_progreso = document.getElementById("en-progreso")

const creadorDeTags = (arr) => {
  let tagsEstilizados = [];
  for (let tag of arr) {
    let colorClass = "";
    switch (tag) {
      //Generos
      case "Accion":
        colorClass = "bg-orange-300 text-white";
        break;
      case "Comedia":
        colorClass = "bg-lime-300 text-white";
        break;
      case "Drama":
        colorClass = "bg-red-300 text-white";
        break;
      case "Terror":
        colorClass = "bg-purple-300 text-white";
        break;
      case "CienciaFiccion":
        colorClass = "bg-green-300 text-white";
        break;
      case "Aventura":
        colorClass = "bg-sky-300 text-white";
        break;
      case "Fantasia":
        colorClass = "bg-indigo-300 text-white";
        break;
      case "Romance":
        colorClass = "bg-pink-300 text-white";
        break;
      case "Thriller":
        colorClass = "bg-emerald-500 text-white";
        break;
      case "Suspense":
        colorClass = "bg-slate-300 text-white";
        break;
      case "Western":
        colorClass = "bg-zinc-300 text-white";
        break;
      // Plataformas
      case "Netflix":
        colorClass = "bg-red-500 text-white";
        break;
      case "AmazonPrime":
        colorClass = "bg-yellow-500 text-white";
        break;
      case "DisneyPlus":
        colorClass = "bg-blue-500 text-white";
        break;
      case "HBOMax":
        colorClass = "bg-purple-500 text-white";
        break;
      case "AppleTVPlus":
        colorClass = "bg-pink-500 text-white";
        break;
      case "Hulu":
        colorClass = "bg-green-500 text-white";
        break;
      case "ParamountPlus":
        colorClass = "bg-sky-500 text-white";
        break;
      case "Kindle":
        colorClass = "bg-amber-400 text-white";
        break;
      case "AppleBooks":
        colorClass = "bg-pink-500 text-white";
        break;
      default:
        colorClass = "bg-gray-900"; // Color por defecto si no se encuentra el tag
        break;
    }//bg-cyan-300 px-1 rounded-lg w-fit my-1
    tagsEstilizados.push(`<li class="${colorClass} px-1 rounded-lg w-fit my-1">${tag}</li>`);
  }
  return tagsEstilizados.join('');
};

const agregarFiltroEstadoEnProceso = (arr, section) => {
  for (recursos of arr) {
    console.log(recursos.generos_recurso) //fill-yellow-300
    tagsGeneros = creadorDeTags(recursos.generos_recurso)
    tagsPlataformas = creadorDeTags(recursos.plataformas_recurso)
    let nuevaCard = document.createElement("figure")
    nuevaCard.classList = "flex gap-x-4 p-4 border-2 rounded-xl items-center sm:h-72 h-fit w-fit overflow-x-auto"
    nuevaCard.innerHTML = `<img
    id="Img_recurso"
    class="w-32 h-38"
    src="${recursos.url_portada}"
    alt="${recursos.nombre_recurso}"
  />
  <figcaption class="max-h-42 min-h-52 gap-y-2 flex flex-wrap flex-col w-fit content-around"> 
    <h6 id="${recursos.nombre_recurso}" class="poppins-medium">
    ${recursos.nombre_recurso}
    </h6>
    <section id="Estado_recurso">
      <h5 class="poppins-medium text-sm flex w-full">
        <figure>
          <svg
            class="w-4 h-4 mr-2 fill-lime-300"
            viewBox="0 0 23 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.6428" cy="11" r="11" />
          </svg>
        </figure>
        ${recursos.estado_recurso}
      </h5>
    </section>
    <section id="Tags_recurso">
      <h5 class="poppins-medium text-sm flex w-full">
        <figure>
          <svg
            class="w-4 h-4 mr-2 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128l95.1 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0L325.8 320l58.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-68.9 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7-95.1 0-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384 32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 21.3-128L64 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l68.9 0 11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320l95.1 0 21.3-128-95.1 0z"
            />
          </svg>
        </figure>
        <ul class="flex flex-wrap max-w-72 gap-x-2">
        ${tagsGeneros}
        </ul>
      </h5>
    </section>
    <section id="Plataforma_recurso">
      <span class="poppins-medium text-sm flex w-full">
        <figure>
          <svg
            class="w-4 h-4 mr-2 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
            />
          </svg>
        </figure>
        <ul class="flex flex-wrap max-w-72 gap-x-2">
        ${tagsPlataformas}
        </ul>
      </span>
    </section>
    <section>
    <button id="boton_eliminar_card_${recursos.id}" value="${recursos.id}" class="bg-red-400 p-2 rounded-lg  "><svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
    <button id="boton_editar_card_${recursos.id}" value="${recursos.id}" class="bg-indigo-400 p-2 rounded-lg"><svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg></button>  
    <button id="boton_terminar_card_${recursos.id}" value="${recursos.id}" class="bg-cyan-400 p-2 rounded-lg"><svg class="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48l0 304L96 384 96 80zm313 47c-9.4-9.4-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L409 161c9.4-9.4 9.4-24.6 0-33.9zM0 336c0-26.5 21.5-48 48-48l16 0 0 128 448 0 0-128 16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96z"/></svg></button>
    </section>
  </figcaption>`
  section.appendChild(nuevaCard)
  const boton_eliminar_card = document.getElementById(`boton_eliminar_card_${recursos.id}`)
  boton_eliminar_card.addEventListener("click", ()=>{
    let id = boton_eliminar_card.value
    EliminarRecurso(id)
  })
  const boton_editar_card = document.getElementById(`boton_editar_card_${recursos.id}`)
  boton_editar_card.addEventListener("click", ()=>{
    idRecurso = boton_editar_card.value
    dialog_editar_recurso.classList.toggle("invisible", false);
  })
  const boton_terminar_card = document.getElementById(`boton_terminar_card_${recursos.id}`)
  boton_terminar_card.addEventListener("click", ()=>{
    idRecurso = boton_terminar_card.value
    dialog_terminar_recurso.classList.toggle("invisible", false);
  })
  }
}

//Id para editar el Recurso

var idRecurso

const traerRecursosEstadoTerminado = () => {
  let urlRecursos = new URL(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`);
  urlRecursos.searchParams.append('estado_recurso', ["Terminado"]);
  fetch(urlRecursos, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Recurso No Encontrado")
  }).then(tasks => {
    console.log(tasks)
  }).catch(error => {
    console.error(error)
  })

}

const section_pendiente = document.getElementById("pendiente")

const agregarFiltroEstadoPendiente = (arr, section) => {
  for (recursos of arr) {
    let nuevaCard = document.createElement("figure")
    nuevaCard.classList = "flex gap-x-4 p-4 border-2 rounded-xl"

    section.appendChild(nuevaCard)
  }
}

const traerRecursosEstadoPendiente = () => {
  let urlRecursos = new URL(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos`);
  urlRecursos.searchParams.append('estado_recurso', ["Pendiente"]);
  fetch(urlRecursos, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Recurso No Encontrado")
  }).then(resultado => {
    console.log(resultado)
  }).catch(error => {
    console.error(error)
  })

}

//Elinimar Racurso

const EliminarRecurso = async(id)=>{
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    console.error("No se Puedo Eliminar")
  }).then(resultado => {
    console.log("Card Eliminada")
  }).catch(error => {
    console.error(error)
  })
}

const formEditarRecurso = document.getElementById("formEditarRecurso")

const dialog_editar_recurso = document.getElementById("dialog_editar_recurso")

formEditarRecurso.addEventListener("submit", (event) => {
  event.preventDefault();
  const form_nombre_recurso = document.getElementById("form_nombre_recurso_editar").value;
  const url_recurso = document.getElementById("url_recurso_editar").value;
  const formato_recurso = checkbox_seleccionados('input[name="formato_editar"]');
  const generos_recurso = checkbox_seleccionados('input[name="generos_editar"]');
  const plataforma_recurso = checkbox_seleccionados('input[name="Plataforma_Peli_Serie_editar"]');
  const estado_recurso = checkbox_seleccionados('input[name="Estado_editar"]');
  EditarRecursoNombreRecurso(idRecurso, form_nombre_recurso)
  EditarRecursoUrlPortada(idRecurso, url_recurso)
  EditarRecursoFormatoRecurso(idRecurso, formato_recurso)
  EditarRecursoGenerosRecurso(idRecurso, generos_recurso)
  EditarRecursoPlataformasRecurso(idRecurso, plataforma_recurso)
  EditarRecursoEstadoRecurso(idRecurso, estado_recurso)
  formEditarRecurso.reset();
  dialog_editar_recurso.classList.toggle("invisible", true);
})

//Editar Recurso

const EditarRecursoNombreRecurso = async(id, nuevo)=>{
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({nombre_recurso: nuevo})
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    console.error("Nombre No Editado")
  }).then(task => {
    console.log("Nombre Editado")
  }).catch(error => {
  })
};

const EditarRecursoFormatoRecurso = async(id, nuevo)=>{
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({formato_recurso: nuevo})
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Formato No Editado")
  }).then(task => {
    console.log("Formato Editado")
  }).catch(error => {
  })
};

const EditarRecursoUrlPortada = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({url_portada: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("URL Portada No Editada");
  })
  .then(task => {
    console.log("URL Portada Editada");
  })
  .catch(error => {
    console.error("Error al Editar URL Portada:", error);
  });
};

const EditarRecursoGenerosRecurso = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({generos_recurso: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Géneros No Editados");
  })
  .then(task => {
    console.log("Géneros Editados");
  })
  .catch(error => {
    console.error("Error al Editar Géneros:", error);
  });
};

const EditarRecursoPlataformasRecurso = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({plataformas_recurso: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Plataformas No Editadas");
  })
  .then(task => {
    console.log("Plataformas Editadas");
  })
  .catch(error => {
    console.error("Error al Editar Plataformas:", error);
  });
};

const EditarRecursoEstadoRecurso = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({estado_recurso: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Estado No Editado");
  })
  .then(task => {
    console.log("Estado Editado");
  })
  .catch(error => {
    console.error("Error al Editar Estado:", error);
  });
};

// Terminar tareas

const EditarRecursoFechaTerminacion = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({fecha_terminacion: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Fecha de Terminación No Editada");
  })
  .then(task => {
    console.log("Fecha de Terminación Editada");
  })
  .catch(error => {
    console.error("Error al Editar Fecha de Terminación:", error);
  });
};

const EditarRecursoValoracionFinal = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({valoracion_final: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Valoración Final No Editada");
  })
  .then(task => {
    console.log("Valoración Final Editada");
  })
  .catch(error => {
    console.error("Error al Editar Valoración Final:", error);
  });
};

const EditarRecursoResenia = async(id, nuevo) => {
  fetch(`https://66caa49f59f4350f064f915e.mockapi.io/StoryStack/users/${IdUserActual}/recursos/${id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({resenia: nuevo})
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    console.error("Reseña No Editada");
  })
  .then(task => {
    console.log("Reseña Editada");
  })
  .catch(error => {
    console.error("Error al Editar Reseña:", error);
  });
};


const formTerminarRecurso = document.getElementById("formTerminarRecurso")

const dialog_terminar_recurso = document.getElementById("dialog_terminar_recurso")

formTerminarRecurso.addEventListener("submit", (event) => {
  event.preventDefault();
  const fecha_terminación = document.getElementById("fecha-terminación").value;
  const valoracion_final = document.getElementById("valoracion-final").value;
  const Resenia = document.getElementById("Resenia").value;
  EditarRecursoEstadoRecurso(idRecurso, ["Terminado"])
  EditarRecursoFechaTerminacion(idRecurso, fecha_terminación)
  EditarRecursoValoracionFinal(idRecurso, valoracion_final)
  EditarRecursoResenia(idRecurso, Resenia)
  formTerminarRecurso.reset();
  dialog_terminar_recurso.classList.toggle("invisible", true);
})

const TerminarRecursos = ()=>{

}

traerRecursosEstadoEnProgreso()