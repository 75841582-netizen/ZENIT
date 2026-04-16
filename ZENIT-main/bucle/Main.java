// 🔁 1. FOR → mostrar ejercicios
let ejercicios = ["Flexiones", "Sentadillas", "Abdominales"];

function iniciarRutina() {
  const output = document.getElementById("output");
  output.innerHTML = "<h2>Rutina iniciada</h2>";

  for (let i = 0; i < ejercicios.length; i++) {
    output.innerHTML += "Ejercicio: " + ejercicios[i] + "<br>";
  }

  temporizador();
}

// 🔁 2. WHILE → temporizador manual
function temporizador() {
  const output = document.getElementById("output");

  let tiempo = 30;

  let intervalo = setInterval(() => {
    output.innerHTML += "⏱ " + tiempo + " seg<br>";
    tiempo--;

    // usamos lógica tipo while
    if (tiempo < 0) {
      clearInterval(intervalo);
      output.innerHTML += "✔ Terminado<br>";
    }
  }, 1000);
}

// 🛒 COMPRA
function comprarRutina() {
  document.getElementById("formDireccion").style.display = "block";
}

// 🔁 3. DO WHILE → confirmar compra obligatoria
function confirmarCompra() {
  let direccion = document.getElementById("direccion").value;

  if (direccion === "") {
    alert("Ingresa dirección");
    return;
  }

  let confirmar;
  do {
    confirmar = prompt("¿Confirmas compra? (si)");
  } while (confirmar !== "si");

  mostrarResumen(direccion);
}

// 🔁 4. FOR...OF → resumen de ejercicios
function mostrarResumen(direccion) {
  const output = document.getElementById("output");

  output.innerHTML = "<h2>Compra exitosa ✅</h2>";
  output.innerHTML += "📍 Dirección: " + direccion + "<br>";

  output.innerHTML += "<h3>Rutina comprada:</h3>";

  for (let ejercicio of ejercicios) {
    output.innerHTML += "✔ " + ejercicio + "<br>";
  }

  mostrarDatos();
}

// 🔁 5. FOR...IN → datos del usuario
function mostrarDatos() {
  const output = document.getElementById("output");

  let usuario = {
    nombre: "Sebastian",
    nivel: "Principiante",
    energia: "Alta"
  };

  output.innerHTML += "<h3>Datos del usuario:</h3>";

  for (let clave in usuario) {
    output.innerHTML += clave + ": " + usuario[clave] + "<br>";
  }
}