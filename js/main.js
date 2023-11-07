const registro = {
  operaciones: [],
};

// Función para agregar una operación
function agregarOperacion(montoInicial, tasaInteres) {
  const operacion = {
    montoInicial: montoInicial,
    tasaInteres: tasaInteres,
  };

  registro.operaciones.push(operacion);
  guardar();
  mostrar();
}

// Función para calcular el monto total
function calcular(event) {
  event.preventDefault(); // Prevenir la acción predeterminada del formulario

  // Obtenemos los valores ingresados por el usuario
  let monto_inicial = parseFloat(document.getElementById('montoInicial'));
  let tasa_interes = parseFloat(document.getElementById('tasaInteres'));

  // Verificamos si los valores son válidos
  if (!isNaN(monto_inicial) && !isNaN(tasa_interes)) {
    // Calculamos el monto total
    let monto_total = monto_inicial * (1 + (tasa_interes / 100));

    // Llamamos a la función agregarOperacion para registrar esta operación
    agregarOperacion(monto_inicial, tasa_interes);

    // Mostramos el resultado en el div con id "registro"
    document.getElementById('registro').innerHTML = `Monto Inicial: $${monto_inicial.toFixed(2)}<br>Tasa de Interés: ${tasa_interes.toFixed(2)}%<br>Monto Total: $${monto_total.toFixed(2)}`;
  } else {
    // Si los valores no son válidos, mostramos un mensaje de error
    document.getElementById('registro').innerHTML = 'Por favor, ingrese valores válidos para el monto inicial y la tasa de interés.';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('simuladorForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir la acción predeterminada del formulario

    const montoInicial = parseFloat(document.getElementById('montoInicial').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value);

    if (!isNaN(montoInicial) && !isNaN(tasaInteres)) {
      const montoTotal = montoInicial * (1 + tasaInteres / 100);
      document.getElementById('registro').innerHTML = `Monto Inicial: $${montoInicial.toFixed(2)}<br>Tasa de Interés: ${tasaInteres.toFixed(2)}%<br>Monto Total: $${montoTotal.toFixed(2)}`;
    } else {
      document.getElementById('registro').innerHTML = 'Por favor, ingrese valores válidos para el monto inicial y la tasa de interés.';
    }
  });
});


// Función para borrar datos guardados
function BorrarResultados() {
  registro.operaciones = [];
  guardar();
  mostrar();
}

// Función para guardar los datos en algún lugar (puedes implementarla según tus necesidades)
function guardar() {
  // Puedes implementar la lógica de guardado aquí, como en una base de datos o almacenamiento local.
  // Por ejemplo, podrías usar localStorage para almacenar los datos en el navegador.
}

// Función para mostrar los datos guardados
function mostrar() {
  // Puedes implementar la lógica de mostrar los datos aquí.
  // Por ejemplo, podrías actualizar una tabla o lista de operaciones en la interfaz.
}
