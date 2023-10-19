 //Inflacion paises LATAM

const paises = [
  { id: 1, nombre: "Argentina 🇦🇷",Inflacion: 98.4},
  { id: 2, nombre: "Brasil 🇧🇷", Inflacion: 5.79},
  { id: 3, nombre: "Chile 🇨🇱", Inflacion: 12.8},
  { id: 4, nombre: "Uruguay 🇺🇾", Inflacion: 8.29},
  { id: 5, nombre: "Paraguay 🇵🇾", Inflacion: 8.1},
  { id: 6, nombre: "Ecuador 🇪🇨", Inflacion: 3.74},
  { id: 7, nombre: "Peru 🇵🇪", Inflacion: 8.46},
  { id: 8, nombre: "Bolivia 🇧🇴", Inflacion: 3.12},
  { id: 9, nombre: "Colombia 🇨🇴", Inflacion: 13.12},
  { id: 10, nombre: "Venezuela 🇻🇪", Inflacion: 305.7},
];

//ARRAY --> Inflacion anualizada de Argentina
const INFLACION_ACUMULADA = [0, 0.124, 0.263, 0.42, 0.596, 0.794, 1.016, 1.267, 1.548, 1.863, 2.219, 2.618, 3.066];

//Funcion de Buscar por Id
      
function buscar() {
  const id = prompt(
    "Ingrese el ID del país que desea buscar:\n" +
    "1 - Argentina 🇦🇷\n" +
    "2 - Brasil 🇧🇷\n" +
    "3 - Chile 🇨🇱\n" +
    "4 - Uruguay 🇺🇾\n" +
    "5 - Paraguay 🇵🇾\n" +
    "6 - Ecuador 🇪🇨\n" +
    "7 - Perú 🇵🇪\n" +
    "8 - Bolivia 🇧🇴\n" +
    "9 - Colombia 🇨🇴\n" +
    "10 - Venezuela 🇻🇪"
  );
  // Busca el país en el array
  const pais = paises.find((pais) => pais.id === parseInt(id));
  // Muestra el país al usuario
  if (pais) {
    alert(`La inflacion 2022 para ${pais.nombre} fue de ${pais.Inflacion}%`);
  } else {
    alert("No se encontró el país con el ID especificado.");
  }
}

//Funcion ranking

function ranking() {
  // Ordena el array de mayor a menor por el campo Inflacion
  paises.sort((pais1, pais2) => pais2.Inflacion - pais1.Inflacion);

  // Crea un nuevo array con solo los nombres y las inflaciones
  const paisesOrdenados = paises.map((pais) => ({
    nombre: pais.nombre,
    Inflacion: pais.Inflacion,
  }));

  // Convierte los objetos en cadenas de texto
  const paisesOrdenadosTexto = paisesOrdenados.map((pais) => `${pais.nombre} - ${pais.Inflacion} %`);

  // Muestra el array ordenado en un alert
  alert("Ranking inflacion paises LATAM 2022🌎:\n"  + paisesOrdenadosTexto.join("\n"));
}
      
// Funcion Calculadora Inflacionaria--> opcion 2

 function calculadoraInflacionaria () {

    let precioContado = prompt ("Por favor ingrese el monto de contado 💰");
    let precioCuotas = prompt ("Por favor ingrese el monto total en cuotas 💳");

  let cantidadCuotas;
  while (true) {
      cantidadCuotas = parseFloat(prompt("❗️ Ingrese la cantidad de cuotas -> maximo 12 cuotas ❗️"));
      if (!isNaN(cantidadCuotas) && cantidadCuotas >= 1 && cantidadCuotas <= 12) {
          break;
      }
      alert("❌ La cantidad de cuotas debe ser entre 1 y 12 ❌");
  }

let montoInteres = precioCuotas - precioContado;
let tasaInteres = montoInteres / precioContado;
    tasaInteres = tasaInteres.toFixed(2);
let porcentajeInteres = tasaInteres * 100 + "%";
let valorCuota = precioCuotas / cantidadCuotas;
    valorCuota = valorCuota.toFixed(2);

  let inflacionAcumulada = INFLACION_ACUMULADA[cantidadCuotas];

let tasaInteresAjustada = (tasaInteres - inflacionAcumulada) * 100;
    tasaInteresAjustada = tasaInteresAjustada.toFixed(2) + "%";

let resultado;
  if (tasaInteres <= inflacionAcumulada) {
      resultado = "Conviene hacer la compra en cuotas 💳";
    } else {
      resultado = "Conviene comprar en efectivo 💵";
    } 

alert (`Resumen de tu operacion 💰 \n 🔵 Precio Contado:$ ${precioContado} \n 🟠 Precio Financiado:$ ${precioCuotas} \n 🚩 Interes cobrado:$ ${montoInteres} \n 🎁 Valor de las cuotas:$ ${valorCuota}  \n❕Tasa de interes: ${porcentajeInteres}\n 🕯 Tasa de Interes ajustada:$ ${tasaInteresAjustada} \n 💵 ${resultado} `)};


// Función para mostrar el menú principal//

function menuPrincipal() {
  // Continua mostrando el menú hasta que el usuario seleccione la opción "Salir"
  do {
    opcion = prompt(" Elija una de las siguientes opciones:\n" +
    "1. Datos inflacion 2022 Latam 🌎\n" +
    "2. Calculadora cuotas vs inflacion version 🇦🇷\n" +
    "3. Salir");

    switch (opcion) {
      case "1":
        menuInflacion ();
        break;
      case "2":
        calculadoraInflacionaria ();
        break;
      case "3":
        alert ("Has salido del menú.");
        break;
      default:
        alert("Opción inválida - Vuelva a ingresar.");
        break;
    }
  } while (opcion !== "3");
}

//Menu inflacion --> opcion 1

function menuInflacion() {
  // Continua mostrando el menú hasta que el usuario seleccione la opción "Salir"
  do {
    // Valida que la opción sea válida
    if (opcion < 1 || opcion > 3) {
      alert("Opción inválida.");
      return;
    }
    opcion = prompt(" Elija una de las siguientes opciones:\n" +
    "1. Busqueda por Pais 🌎\n" +
    "2. Ranking 2022 Inflacion Latam 📈\n" +
    "3. Salir");

    switch (opcion) {
      case "1":
        buscar();
        break;
      case "2":
        ranking ();
        break;
      case "3":
        alert ("Has salido del menú.");
        break;
      default:
        alert("Opción inválida - Vuelva a ingresar.");
        break;
    }
  } while (opcion !== "3");
}

//*************************************/
//Ejecutamos la funcion menu principal
menuPrincipal ()