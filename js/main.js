 alert ("💸 Bienvenidos a cuotas versus inflacion 🇦🇷")
 alert ("Este simulador sirve para comparar si tu compra en cuotas conviene hacerla al contado o financiada dada la inflacion actual 🇦🇷 Argentina \n🚨 12,4% Agosto 2023🚨 \n🚨140% interanual 🚨 \n🚨306,6% anualizada")

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

  let inflacionAcumulada;
    if (cantidadCuotas == 1) { inflacionAcumulada = 0.124}
    else if (cantidadCuotas == 2) { inflacionAcumulada = 0.263}
    else if (cantidadCuotas == 3) { inflacionAcumulada = 0.42}
    else if (cantidadCuotas == 4) { inflacionAcumulada = 0.596}
    else if (cantidadCuotas == 5) { inflacionAcumulada = 0.794}
    else if (cantidadCuotas == 6) { inflacionAcumulada = 1.016}
    else if (cantidadCuotas == 7) { inflacionAcumulada = 1.267}
    else if (cantidadCuotas == 8) { inflacionAcumulada = 1.548}
    else if (cantidadCuotas == 9) { inflacionAcumulada = 1.863}
    else if (cantidadCuotas == 10) { inflacionAcumulada = 2.219}
    else if (cantidadCuotas == 11) { inflacionAcumulada = 2.618}
    else if (cantidadCuotas == 12) { inflacionAcumulada = 3.066};

let tasaInteresAjustada = (tasaInteres - inflacionAcumulada) * 100;
    tasaInteresAjustada = tasaInteresAjustada.toFixed(2) + "%";

  let resultado;
  switch (true) {
    case cantidadCuotas == 1 && tasaInteres < 0.124:
      resultado = "Conviene hacer la compra en cuotas 💳 ";
      break;    
    case cantidadCuotas == 2 && tasaInteres < 0.263:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;    
    case cantidadCuotas == 3 && tasaInteres < 0.42:
      resultado = "Conviene hacer la compra en cuotas 💳";
      break;
    case cantidadCuotas == 4 && tasaInteres < 0.596:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 5 && tasaInteres < 0.794:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 6 && tasaInteres < 1.016:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 7 && tasaInteres < 1.267:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 8 && tasaInteres < 1.548:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 9 && tasaInteres < 1.863:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 10 && tasaInteres < 2.219:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 11 && tasaInteres < 2.618:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    case cantidadCuotas == 12 && tasaInteres < 3.066:
    resultado = "Conviene hacer la compra en cuotas 💳";
    break;
    default:
      resultado = "Conviene comprar en efectivo 💵";
         break;
 }


 alert (`Resumen de tu operacion 💰 \n 🔵 Precio Contado:$ ${precioContado} \n 🟠 Precio Financiado:$ ${precioCuotas} \n 🚩 Interes cobrado:$ ${montoInteres} \n 🎁 Valor de las cuotas:$ ${valorCuota}  \n❕Tasa de interes: ${porcentajeInteres}\n 🕯 Tasa de Interes ajustada:$ ${tasaInteresAjustada} \n 💵 ${resultado} `);    
}

calculadoraInflacionaria ()

alert("⛔️Disclaimer: Los datos usados en el simulador son meramente de ejemplo y no pueden coincidir con la realidad \n Se utilizo una inflacion flat mensual del 12.4% para ejemplificar la variacion anual⛔️")

