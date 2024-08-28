const filtros_secciones = document.getElementById("filtros-secciones");

const Todo_Y_Fitros = document.getElementById("Todo_Y_Fitros");

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
    }
    tagsEstilizados.push(
      `<li class="${colorClass} px-1 rounded-lg w-fit my-1">${tag}</li>`
    );
  }
  return tagsEstilizados.join("");
};

const agregarFiltroEstadoEnProceso = (arr, section) => {
  for (recursos of arr) {
    console.log(recursos.generos_recurso);
    tagsGeneros = creadorDeTags(recursos.generos_recurso);
    tagsPlataformas = creadorDeTags(recursos.plataformas_recurso);
    let nuevaCard = document.createElement("figure");
    nuevaCard.classList =
      "flex gap-x-4 p-4 border-2 rounded-xl items-center sm:h-72 h-fit w-fit overflow-x-auto";
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
    </figcaption>`;
    section.appendChild(nuevaCard);
    const boton_eliminar_card = document.getElementById(
      `boton_eliminar_card_${recursos.id}`
    );
    boton_eliminar_card.addEventListener("click", () => {
      let id = boton_eliminar_card.value;
      EliminarRecurso(id);
    });
    const boton_editar_card = document.getElementById(
      `boton_editar_card_${recursos.id}`
    );
    boton_editar_card.addEventListener("click", () => {
      idRecurso = boton_editar_card.value;
      dialog_editar_recurso.classList.toggle("invisible", false);
    });
    const boton_terminar_card = document.getElementById(
      `boton_terminar_card_${recursos.id}`
    );
    boton_terminar_card.addEventListener("click", () => {
      idRecurso = boton_terminar_card.value;
      dialog_terminar_recurso.classList.toggle("invisible", false);
    });
  }
};

const agregarFiltroEstadoPendiente = (arr, section) => {
  for (recursos of arr) {
    console.log(recursos.generos_recurso); //fill-yellow-300
    tagsGeneros = creadorDeTags(recursos.generos_recurso);
    tagsPlataformas = creadorDeTags(recursos.plataformas_recurso);
    let nuevaCard = document.createElement("figure");
    nuevaCard.classList =
      "flex gap-x-4 p-4 border-2 rounded-xl items-center sm:h-72 h-fit w-fit overflow-x-auto";
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
                class="w-4 h-4 mr-2 fill-yellow-300"
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
      </figcaption>`;
    section.appendChild(nuevaCard);
    const boton_eliminar_card = document.getElementById(
      `boton_eliminar_card_${recursos.id}`
    );
    boton_eliminar_card.addEventListener("click", () => {
      let id = boton_eliminar_card.value;
      EliminarRecurso(id);
    });
    const boton_editar_card = document.getElementById(
      `boton_editar_card_${recursos.id}`
    );
    boton_editar_card.addEventListener("click", () => {
      idRecurso = boton_editar_card.value;
      dialog_editar_recurso.classList.toggle("invisible", false);
    });
    const boton_terminar_card = document.getElementById(
      `boton_terminar_card_${recursos.id}`
    );
    boton_terminar_card.addEventListener("click", () => {
      idRecurso = boton_terminar_card.value;
      dialog_terminar_recurso.classList.toggle("invisible", false);
    });
  }
};

const agregarFiltroEstadoTerminado = (arr, section) => {
  for (recursos of arr) {
    console.log(recursos.generos_recurso); //fill-yellow-300
    tagsGeneros = creadorDeTags(recursos.generos_recurso);
    tagsPlataformas = creadorDeTags(recursos.plataformas_recurso);
    let nuevaCard = document.createElement("figure");
    nuevaCard.classList =
      "flex gap-x-4 p-4 border-2 rounded-xl items-center sm:h-72 h-fit w-fit overflow-x-auto";
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
                class="w-4 h-4 mr-2 fill-red-300"
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
      </figcaption>`;
    section.appendChild(nuevaCard);
    const boton_eliminar_card = document.getElementById(
      `boton_eliminar_card_${recursos.id}`
    );
    boton_eliminar_card.addEventListener("click", () => {
      let id = boton_eliminar_card.value;
      EliminarRecurso(id);
    });
    const boton_editar_card = document.getElementById(
      `boton_editar_card_${recursos.id}`
    );
    boton_editar_card.addEventListener("click", () => {
      idRecurso = boton_editar_card.value;
      dialog_editar_recurso.classList.toggle("invisible", false);
    });
  }
};

const dibujarEnProgreso = async () => {
  const section_en_progreso = document.getElementById("en-progreso");
  agregarFiltroEstadoEnProceso(
    await traerEstadoRecurso("En_Progreso"),
    section_en_progreso
  );
};

const dibujarPendientes = async () => {
  const section_pendiente = document.getElementById("pendiente");
  agregarFiltroEstadoPendiente(
    await traerEstadoRecurso("Pendiente"),
    section_pendiente
  );
};

const dibujarTerminado = async () => {
  const section_terminado = document.getElementById("terminado");
  agregarFiltroEstadoTerminado(
    await traerEstadoRecurso("Terminado"),
    section_terminado
  );
};

const dibujarSeccionesPorEstado = () => {
  Todo_Y_Fitros.innerHTML = `
  <section class="p-4 flex">
        <input
          class="border-2 bg-gradient-to-r from-gray-100 to-red-50 from-80% w-full px-2 py-4 rounded-sm text-gray-400 poppins-regular placeholder:"
          placeholder="  🔍︎  Búsqueda Por Nombre..."
          type="text"
          name="search_bar"
          id="search_bar"
        />
        <button
          class="p-4 rounded-r-lg bg-indigo-200 xl:display-invisible transition-all duration-200 xl:hidden"
        >
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
      </section>
    <form
      action=""
      class="flex flex-wrap mx-8 justify-center mt-2 text-center gap-2 lg:justify-between"
    >
      <button
        class="bg-purple-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
      >
        Estado
      </button>
      <button
        class="bg-indigo-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
      >
        Genero
      </button>
      <button
        class="bg-indigo-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
      >
        Plataforma
      </button>
    </form>
    <form
      action=""
      class="flex flex-wrap mx-8 justify-center mt-2 text-center gap-2"
    >
      <button
        class="bg-yellow-200 w-64 h-16 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
        id="boton_crear_recuros"
      >
        Crear
      </button>
    </form>
    <section id="filtros-secciones"></section>`;
  const filtros_secciones = document.getElementById("filtros-secciones");

  filtros_secciones.innerHTML = `<section
    class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4"
    id="en-progreso"
  >
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-lime-300"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >En Progreso
    </h5>
  </section>
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4" id="pendiente">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-yellow-300"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >Pendiente
    </h5>
  </section>
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4" id="terminado">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-red-300"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >Terminado
    </h5>
  </section>`;
  dibujarEnProgreso();
  dibujarPendientes();
  dibujarTerminado();
};

const AgregarGeneral = (arr, section) => {
  for (recursos of arr) {
    let colorCirculo = "fill-gray-300";
    switch (recursos.estado_recurso[0]) {
      case "En_progreso":
        colorCirculo = "fill-lime-300";
        break;
      case "Pendiente":
        colorCirculo = "fill-yellow-300";
        break;
      case "Terminado":
        colorCirculo = "fill-red-300";
        break;
    }
    console.log(recursos.generos_recurso); //fill-yellow-300
    tagsGeneros = creadorDeTags(recursos.generos_recurso);
    tagsPlataformas = creadorDeTags(recursos.plataformas_recurso);
    let nuevaCard = document.createElement("figure");
    nuevaCard.classList =
      "flex gap-x-4 p-4 border-2 rounded-xl items-center sm:h-72 h-fit w-fit overflow-x-auto";
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
                      class="w-4 h-4 mr-2 ${colorCirculo}"
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
            </figcaption>`;
    section.appendChild(nuevaCard);
    const boton_eliminar_card = document.getElementById(
      `boton_eliminar_card_${recursos.id}`
    );
    boton_eliminar_card.addEventListener("click", () => {
      let id = boton_eliminar_card.value;
      EliminarRecurso(id);
    });
    const boton_editar_card = document.getElementById(
      `boton_editar_card_${recursos.id}`
    );
    boton_editar_card.addEventListener("click", () => {
      idRecurso = boton_editar_card.value;
      dialog_editar_recurso.classList.toggle("invisible", false);
    });
    const boton_terminar_card = document.getElementById(
      `boton_terminar_card_${recursos.id}`
    );
    boton_terminar_card.addEventListener("click", () => {
      idRecurso = boton_terminar_card.value;
      dialog_terminar_recurso.classList.toggle("invisible", false);
    });
  }
};

const dibujarNetflix = async () => {
  const section_Netflix = document.getElementById("netflix");
  AgregarGeneral(await traerPlataformaRecurso("Netflix"), section_Netflix);
};

const dibujarAmazonPrime = async () => {
  const section_AmazonPrime = document.getElementById("amazonprime");
  AgregarGeneral(
    await traerPlataformaRecurso("AmazonPrime"),
    section_AmazonPrime
  );
};

const dibujarDisneyPlus = async () => {
  const section_DisneyPlus = document.getElementById("disneyplus");
  AgregarGeneral(
    await traerPlataformaRecurso("DisneyPlus"),
    section_DisneyPlus
  );
};

const dibujarHBOMax = async () => {
  const section_HBOMax = document.getElementById("hbomax");
  AgregarGeneral(await traerPlataformaRecurso("HBOMax"), section_HBOMax);
};

const dibujarAppleTVPlus = async () => {
  const section_AppleTVPlus = document.getElementById("appletvplus");
  AgregarGeneral(
    await traerPlataformaRecurso("AppleTVPlus"),
    section_AppleTVPlus
  );
};

const dibujarHulu = async () => {
  const section_Hulu = document.getElementById("hulu");
  AgregarGeneral(await traerPlataformaRecurso("Hulu"), section_Hulu);
};

const dibujarParamountPlus = async () => {
  const section_ParamountPlus = document.getElementById("paramountplus");
  AgregarGeneral(
    await traerPlataformaRecurso("ParamountPlus"),
    section_ParamountPlus
  );
};

const dibujarKindle = async () => {
  const section_Kindle = document.getElementById("kindle");
  AgregarGeneral(await traerPlataformaRecurso("Kindle"), section_Kindle);
};

const dibujarAppleBooks = async () => {
  const section_AppleBooks = document.getElementById("applebooks");
  AgregarGeneral(
    await traerPlataformaRecurso("AppleBooks"),
    section_AppleBooks
  );
};

const dibujarSeccionesPorPlataforma = () => {
  Todo_Y_Fitros.innerHTML = `
  <section class="p-4 flex">
        <input
          class="border-2 bg-gradient-to-r from-gray-100 to-red-50 from-80% w-full px-2 py-4 rounded-sm text-gray-400 poppins-regular placeholder:"
          placeholder="  🔍︎  Búsqueda Por Nombre..."
          type="text"
          name="search_bar"
          id="search_bar"
        />
        <button
          class="p-4 rounded-r-lg bg-indigo-200 xl:display-invisible transition-all duration-200 xl:hidden"
        >
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
      </section>
    <form
    action=""
    class="flex flex-wrap mx-8 justify-center mt-2 text-center gap-2 lg:justify-between"
    >
    <button
    class="bg-purple-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
    >
    Estado
    </button>
    <button
    class="bg-indigo-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
    >
    Genero
    </button>
    <button
    class="bg-indigo-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
    >
    Plataforma
    </button>
    </form>
    <form
    action=""
      class="flex flex-wrap mx-8 justify-center mt-2 text-center gap-2"
    >
    <button
    class="bg-yellow-200 w-64 h-16 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
    id="boton_crear_recuros"
    >
    Crear
    </button>
    </form>
    <section id="filtros-secciones"></section>`;
  const filtros_secciones = document.getElementById("filtros-secciones");
  filtros_secciones.innerHTML = `        <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="netflix">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-red-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >Netflix
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="amazonprime">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-yellow-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >AmazonPrime
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="disneyplus">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-blue-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >DisneyPlus
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="hbomax">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-purple-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >HBOMax
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="appletvplus">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-pink-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >AppleTVPlus
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="hulu">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-green-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >Hulu
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="paramountplus">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-sky-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >ParamountPlus
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="kindle">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-amber-400"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >Kindle
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="applebooks">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-pink-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" /></svg
      >AppleBooks
    </h5>
  </section>`;
  dibujarNetflix();
  dibujarAmazonPrime();
  dibujarDisneyPlus();
  dibujarHBOMax();
  dibujarAppleTVPlus();
  dibujarHulu();
  dibujarParamountPlus();
  dibujarKindle();
  dibujarAppleBooks();
};

const dibujarAccion = async () => {
  const section_Accion = document.getElementById("accion");
  AgregarGeneral(await traerFormatoGeneros("Accion"), section_Accion);
};

const dibujarComedia = async () => {
  const section_Comedia = document.getElementById("comedia");
  AgregarGeneral(await traerFormatoGeneros("Comedia"), section_Comedia);
};

const dibujarDrama = async () => {
  const section_Drama = document.getElementById("drama");
  AgregarGeneral(await traerFormatoGeneros("Drama"), section_Drama);
};

const dibujarTerror = async () => {
  const section_Terror = document.getElementById("terror");
  AgregarGeneral(await traerFormatoGeneros("Terror"), section_Terror);
};

const dibujarCienciaFiccion = async () => {
  const section_CienciaFiccion = document.getElementById("cienciaficcion");
  AgregarGeneral(
    await traerFormatoGeneros("CienciaFiccion"),
    section_CienciaFiccion
  );
};

const dibujarAventura = async () => {
  const section_Aventura = document.getElementById("aventura");
  AgregarGeneral(await traerFormatoGeneros("Aventura"), section_Aventura);
};

const dibujarFantasia = async () => {
  const section_Fantasia = document.getElementById("fantasia");
  AgregarGeneral(await traerFormatoGeneros("Fantasia"), section_Fantasia);
};

const dibujarRomance = async () => {
  const section_Romance = document.getElementById("romance");
  AgregarGeneral(await traerFormatoGeneros("Romance"), section_Romance);
};

const dibujarThriller = async () => {
  const section_Thriller = document.getElementById("thriller");
  AgregarGeneral(await traerFormatoGeneros("Thriller"), section_Thriller);
};

const dibujarSuspense = async () => {
  const section_Suspense = document.getElementById("suspense");
  AgregarGeneral(await traerFormatoGeneros("Suspense"), section_Suspense);
};

const dibujarWestern = async () => {
  const section_Western = document.getElementById("western");
  AgregarGeneral(await traerFormatoGeneros("Western"), section_Western);
};

const dibujarSeccionesPorGeneros = async () => {
  Todo_Y_Fitros.innerHTML = `
  <section class="p-4 flex">
        <input
          class="border-2 bg-gradient-to-r from-gray-100 to-red-50 from-80% w-full px-2 py-4 rounded-sm text-gray-400 poppins-regular placeholder:"
          placeholder="  🔍︎  Búsqueda Por Nombre..."
          type="text"
          name="search_bar"
          id="search_bar"
        />
        <button
          class="p-4 rounded-r-lg bg-indigo-200 xl:display-invisible transition-all duration-200 xl:hidden"
        >
          <svg
            class="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>
      </section>
    <form
      action=""
      class="flex flex-wrap mx-8 justify-center mt-2 text-center gap-2 lg:justify-between"
    >
      <button
        class="bg-purple-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
      >
        Estado
      </button>
      <button
        class="bg-indigo-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
      >
        Genero
      </button>
      <button
        class="bg-indigo-200 w-64 h-8 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
      >
        Plataforma
      </button>
    </form>
    <form
      action=""
      class="flex flex-wrap mx-8 justify-center mt-2 text-center gap-2"
    >
      <button
        class="bg-yellow-200 w-64 h-16 rounded-lg poppins-medium transition duration-200 ease-in-out transform hover:scale-105 text-xl"
        id="boton_crear_recuros"
      >
        Crear
      </button>
    </form>
    <section id="filtros-secciones"></section>`;
  const filtros_secciones = document.getElementById("filtros-secciones");

  filtros_secciones.innerHTML = `<section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="accion">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-orange-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Acción
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="comedia">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-lime-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Comedia
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="drama">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-red-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Drama
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="terror">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-purple-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Terror
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="cienciaficcion">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-green-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      CienciaFiccion
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="aventura">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-sky-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Aventura
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="fantasia">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-indigo-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Fantasia
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="romance">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-pink-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Romance
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="thriller">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-emerald-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Thriller
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="suspense">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-slate-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Suspense
    </h5>
  </section>
  
  <section class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4" id="western">
    <h5 class="poppins-medium text-medium flex w-full mb-8">
      <svg
        class="w-6 h-6 mr-4 fill-zinc-500"
        viewBox="0 0 23 22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="11.6428" cy="11" r="11" />
      </svg>
      Western
    </h5>
  </section>
  `;
  dibujarAccion();
  dibujarComedia();
  dibujarDrama();
  dibujarTerror();
  dibujarCienciaFiccion();
  dibujarAventura();
  dibujarFantasia();
  dibujarRomance();
  dibujarThriller();
  dibujarSuspense();
  dibujarWestern();
};

const dibujarMovies = async () => {
    
    Todo_Y_Fitros.innerHTML = `<section id="filtros-secciones" class="mt-8 w-full pl-8 flex flex-wrap gap-x-4 gap-y-4"></section>`;
  const filtros_secciones = document.getElementById("filtros-secciones");
  AgregarGeneral(await traerFormatoRecurso("Película"), filtros_secciones);
};
const dibujarSeries = async () => {
    Todo_Y_Fitros.innerHTML = `<section id="filtros-secciones"></section>`;
  const filtros_secciones = document.getElementById("filtros-secciones");
  AgregarGeneral(await traerFormatoRecurso("Serie"), filtros_secciones);
};
const dibujarLibros = async () => {
    Todo_Y_Fitros.innerHTML = `<section id="filtros-secciones"></section>`;
  const filtros_secciones = document.getElementById("filtros-secciones");
  AgregarGeneral(await traerFormatoRecurso("Libro"), filtros_secciones);
};

//dibujarMovies()
//dibujarSeries()
//dibujarLibros()

//dibujarSeccionesPorGeneros()

//dibujarSeccionesPorPlataforma();

//dibujarSeccionesPorEstado();