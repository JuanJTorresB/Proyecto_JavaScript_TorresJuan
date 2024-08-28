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

const crearRecurso = async (nombre, url, formato, generos, plataformas, estado, fecha_terminacion, valoracion_final, resenia) => {
  let recursoEstructura = {
    nombre_recurso: nombre,
    url_portada: url,
    formato_recurso: formato,
    generos_recurso: generos,
    plataformas_recurso: plataformas,
    estado_recurso: estado,
    fecha_terminacion: fecha_terminacion,
    valoracion_final: valoracion_final,
    resenia: resenia,
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
  const fecha_terminación = document.getElementById("fecha-terminación").value;
  const valoracion_final = document.getElementById("valoracion-final").value;
  const Resenia = document.getElementById("Resenia").value;
  crearRecurso(form_nombre_recurso, url_recurso, formato_recurso, generos_recurso, plataforma_recurso, estado_recurso, fecha_terminación, valoracion_final, Resenia);
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
        colorClass = "bg-slate-300 text-white";
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
    console.log(recursos.generos_recurso)
    tagsGeneros = creadorDeTags(recursos.generos_recurso)
    tagsPlataformas = creadorDeTags(recursos.plataformas_recurso)
    let nuevaCard = document.createElement("figure")
    nuevaCard.classList = "flex gap-x-4 p-4 border-2 rounded-xl items-center"
    nuevaCard.innerHTML = `<img
    id="Img_recurso"
    class="w-32 h-64"
    src="${recursos.url_portada}"
    alt="${recursos.nombre_recurso}"
  />
  <figcaption class="h-flex  min-h-64 gap-y-2 flex flex-col">
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
        <ul>
        ${tagsGeneros}
        </ul>
      </h5>
    </section>
    <section id="Plataforma_recurso">
      <h5 class="poppins-medium text-sm flex w-full">
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
        <ul>
        ${tagsPlataformas}
        </ul>
      </h5>
    </section>
  </figcaption>`
    section.appendChild(nuevaCard)
  }
}

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
traerRecursosEstadoEnProgreso()