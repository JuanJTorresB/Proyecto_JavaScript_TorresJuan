// Lógica de Cambio de Inicio de Sesión A Registro y Viceversa Front

const dashboard = document.getElementById("dashboard");

const main = document.getElementById("main");

const form_inicial = document.getElementById("form_inicial");

const mostrarRegistro = () => {
  form_inicial.innerHTML = `<div
          class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100"
        >
          <div class="relative sm:max-w-sm w-full">
            <div
              class="card bg-indigo-200 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
            ></div>
            <div
              class="card bg-purple-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
            ></div>
            <div
              class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
            >
              <label
                class="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Register
              </label>
              <form id="form_register" method="#" action="#" class="mt-10">
                <div>
                    <input
                    required
                    id="nombres_register"
                      type="text"
                      placeholder="   Nombres"
                      class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4 invalid:text-pink-600"
                    />
                  </div>
                  <div class="mt-7">
                    <input
                    required
                    id="apellidos_register"
                    type="text"
                      placeholder="   Apellidos"
                      class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4 invalid:text-pink-600"
                    />
                  </div>
                <div class="mt-7">
                  <input
                  required
                    id="email_register"
                    type="email"
                    placeholder="   Correo electrónico"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4 invalid:text-pink-600"
                  />
                </div>
                <div class="mt-7">
                  <input
                  required
                    id="password_register"
                    type="password"
                    placeholder="   Contraseña"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4 invalid:text-pink-600"
                  />
                </div>
                <div class="mt-7">
                    <input
                  required
                    id="password_register_confirmar"
                    type="password"
                      placeholder="   Confirmar Contraseña"
                      class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 pl-4 invalid:text-pink-600"
                    />
                  </div>

                <div class="mt-7 flex">
                  <label
                  
                  for="remember_me_register"
                  class="inline-flex items-center w-full cursor-pointer"
                  >
                  <input
                  id="remember_me_register"
                      type="checkbox"
                      class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="remember"
                    />
                    <span class="ml-2 text-sm text-gray-600"> Recuerdame </span>
                  </label>
                </div>
                <div class="mt-7">
                    <input id="submit_register" type="submit" value="Register" class="bg-indigo-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">
                </div>
                <div class="mt-7">
                  <div class="flex justify-center items-center">
                    <label class="mr-2">¿Ya Tienes Cuenta?</label>
                    <a
                    id="inicio_sesion_cambio"
                      href="#"
                      class="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                    >
                      Inicia Sesión
                    </a>  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
  const form_register = document.getElementById("form_register");
  const nombres_register = document.getElementById("nombres_register");
  const apellidos_register = document.getElementById("apellidos_register");
  const email_register = document.getElementById("email_register");
  const password_register = document.getElementById("password_register");
  const password_register_confirmar = document.getElementById(
    "password_register_confirmar"
  );
  const remember_me_register = document.getElementById("remember_me_register");
  const inicio_sesion_cambio = document.getElementById("inicio_sesion_cambio");
  form_register.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (password_register.value === password_register_confirmar.value) {
      let emailRegistrado = await gmailRegistered(email_register.value);
      if (!emailRegistrado) {
        await registerUser(
          email_register.value,
          password_register.value,
          nombres_register.value,
          apellidos_register.value
        );
        form_inicial.classList.toggle("hidden", true);
        main.classList.toggle("hidden", false);
        dashboard.classList.toggle("hidden", false);
        if (remember_me_register.checked) {
          let id = await gmailRegisteredToId(email_register.value);
          localStorage.setItem("credentials", `${id}`);
          IdUserActual = id
          console.log("Id:")
          console.log(idRecurso)
        } else {
          let id = await gmailRegisteredToId(email_register.value);
          sessionStorage.setItem("credentials", `${id}`);
          IdUserActual = id
          console.log("Id:")
          console.log(idRecurso)
        }
      } else {
        alert("El Email ya esta Registrado");
      }
    } else {
      alert("Las Contraseñas No son Iguales");
    }
  });
  inicio_sesion_cambio.addEventListener("click", mostrarInicioSesion);
};

const mostrarInicioSesion = () => {
  form_inicial.innerHTML = `<div
          class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100"
        >
          <div class="relative sm:max-w-sm w-full">
            <div
              class="card bg-indigo-200 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"
            ></div>
            <div
              class="card bg-purple-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"
            ></div>
            <div
              class="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md"
            >
              <label
                class="block mt-3 text-sm text-gray-700 text-center font-semibold"
              >
                Login
              </label>
              <form id="form_login" method="#" action="#" class="mt-10">
                <div>
                  <input
                  required
                  id="correo_login"
                    type="email"
                    placeholder="   Correo electrónico"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 invalid:text-pink-600"
                  />
                </div>

                <div class="mt-7">
                  <input
                  required
                  id="password_login"
                  type="password"
                    placeholder="   Contraseña"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 invalid:text-pink-600"
                  />
                </div>

                <div class="mt-7 flex">
                  <label
                  for="remember_login"
                    class="inline-flex items-center w-full cursor-pointer"
                  >
                    <input
                      id="remember_login"
                      type="checkbox"
                      class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      name="remember"
                    />
                    <span class="ml-2 text-sm text-gray-600"> Recuerdame </span>
                  </label>
                </div>

                <div class="mt-7" id="login_Submit">
                  <button type="submit" value="Login" class="cursor-pointer bg-indigo-400 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105">Login</button>
                </div>
                <div class="mt-7">
                  <div class="flex justify-center items-center">
                    <label class="mr-2">¿Eres nuevo?</label>
                    <a
                    href=#
                      class="text-blue-500 transition duration-500 ease-in-out transform hover:-translate-x hover:scale-105"
                      id = "crear_cuenta_cambio"
                    >
                      Crea una cuenta
                  </a>  
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
  const form_login = document.getElementById("form_login");
  const correo_login = document.getElementById("correo_login");
  const password_login = document.getElementById("password_login");
  const remember_login = document.getElementById("remember_login");
  const crear_cuenta_cambio = document.getElementById("crear_cuenta_cambio");
  form_login.addEventListener("submit", async (event) => {
    event.preventDefault();
    let emailRegistrado = await gmailRegistered(correo_login.value);
    if (emailRegistrado) {
      if (
        (await gmailRegisteredToPassword(correo_login.value)) ==
        password_login.value
      ) {
        form_inicial.classList.toggle("hidden", true);
        main.classList.toggle("hidden", false);
        dashboard.classList.toggle("hidden", false);
        if (remember_login.checked) {
          let id = await gmailRegisteredToId(correo_login.value);
          localStorage.setItem("credentials", `${id}`);
        } else {
          let id = await gmailRegisteredToId(correo_login.value);
          sessionStorage.setItem("credentials", `${id}`);
        }
      } else {
        alert("Contraseña Incorrecta");
      }
    } else {
      alert("Email No Registrado");
    }
  });
  crear_cuenta_cambio.addEventListener("click", mostrarRegistro);
};

// Consulta a la api

const cabeceras = new Headers();
cabeceras.set("Content-Type", "application/json");

const petición = async (url, opciones) => {
  const respuesta = await fetch(url, opciones);
  if (respuesta.ok) {
    const datos = await respuesta.json();
    return datos;
  } else {
    return [];
  }
};

const url = "https://66caa49f59f4350f064f915e.mockapi.io/StoryStack";

const gmailRegistered = async (userEmailParaConfirmar) => {
  const resultadoUsers = await petición(`${url}/users`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  for (user of resultadoUsers) {
    if (user.correo == userEmailParaConfirmar) {
      return true;
    }
  }
  return false;
};

const gmailRegisteredToId = async (userEmailParaId) => {
  const resultadoUsers = await petición(`${url}/users`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  for (user of resultadoUsers) {
    if (user.correo == userEmailParaId) {
      return user.id;
    }
  }
};

const gmailRegisteredToPassword = async (userEmailParaPassword) => {
  const resultadoUsers = await petición(`${url}/users`, {
    method: "GET",
    headers: { "content-type": "application/json" },
  });
  for (user of resultadoUsers) {
    if (user.correo == userEmailParaPassword) {
      return user.contrasenia;
    }
  }
};

const registerUser = async (Correo, Password, Nombre, Apellidos) => {
  let newUser = {
    correo: Correo,
    contrasenia: Password,
    info: {
      nombre: Nombre,
      apellidos: Apellidos,
    },
  };
  await addUser(newUser);
};

const addUser = async (newUser) => {
  respuesta = await fetch(`${url}/users`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newUser),
  });
  if (respuesta.ok) {
    console.log("Datos Añadidos");
    return respuesta.json();
  } else {
    console.error("Error al Añadir User");
  }
};

//Setear a un string vació Credenciales en caso de no tener activadas en el momento

localStorage.setItem("credentials", localStorage.getItem("credentials") ?? "");

sessionStorage.setItem(
  "credentials",
  sessionStorage.getItem("credentials") ?? ""
);

const Bot_logout = document.getElementById("Bot_logout")

Bot_logout.addEventListener("click", ()=>{
  localStorage.setItem("credentials", "" );
  sessionStorage.setItem("credentials", "" );
  location.reload();
})

if (sessionStorage.getItem("credentials") !== "") {
  //Mostrar Pagina según Session ID
  IdUserActual = sessionStorage.getItem("credentials")
  main.classList.toggle("hidden", false);
  dashboard.classList.toggle("hidden", false);
} else if (localStorage.getItem("credentials") !== "") {
  //Mostrar Pagina según Local ID
  IdUserActual = localStorage.getItem("credentials")
  main.classList.toggle("hidden", false);
  dashboard.classList.toggle("hidden", false);
} else {
  mostrarInicioSesion();
}
