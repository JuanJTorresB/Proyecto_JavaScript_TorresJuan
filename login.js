// Lógica de Cambio de Inicio de Sesión A Registro y Viceversa Front

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
                      class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>
                  <div class="mt-7">
                    <input
                    required
                    id="apellidos_register"
                    type="text"
                      placeholder="   Apellidos"
                      class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                    />
                  </div>
                <div class="mt-7">
                  <input
                  required
                    id="email_register"
                    type="email"
                    placeholder="   Correo electrónico"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>
                <div class="mt-7">
                  <input
                  required
                    id="password_register"
                    type="password"
                    placeholder="   Contraseña"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>
                <div class="mt-7">
                    <input
                  required
                    id="password_register_confirmar"
                    type="password"
                      placeholder="   Confirmar Contraseña"
                      class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
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
  const form_register = document.getElementById("form_register")
  const nombres_register = document.getElementById("nombres_register");
  const apellidos_register = document.getElementById("apellidos_register");
  const email_register = document.getElementById("email_register");
  const password_register = document.getElementById("password_register");
  const password_register_confirmar = document.getElementById(
    "password_register_confirmar"
  );
  const remember_me_register = document.getElementById("remember_me_register");
  const inicio_sesion_cambio = document.getElementById("inicio_sesion_cambio");
  form_register.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(nombres_register.value);
    console.log(apellidos_register.value);
    console.log(email_register.value);
    console.log(password_register.value);
    console.log(password_register_confirmar.value);
    console.log(remember_me_register.checked);
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
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  />
                </div>

                <div class="mt-7">
                  <input
                  required
                  id="password_login"
                  type="password"
                    placeholder="   Contraseña"
                    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
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
  const form_login = document.getElementById("form_login")
  const login_Submit = document.getElementById("login_Submit");
  const correo_login = document.getElementById("correo_login");
  const password_login = document.getElementById("password_login");
  const remember_login = document.getElementById("remember_login");
  const crear_cuenta_cambio = document.getElementById("crear_cuenta_cambio");
  form_login.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(correo_login.value);
    console.log(password_login.value);
    console.log(remember_login.checked);
  });
  crear_cuenta_cambio.addEventListener("click", mostrarRegistro);
};

mostrarInicioSesion();

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

const peticiónLoginGET = async () => {
  const resultadoUsers = await petición(`${url}/users`, opcionesGET);
  console.log(resultadoUsers);
};

const registerUser = () => {
  let newUser = {
    correo: "juanjtorresbecerra@gmail.com",
    contrasenia: "1234",
    info: {
      nombre: "Juan Jose",
      apellidos: "Torres Becerra",
    },
  };
  addUser(newUser);
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
