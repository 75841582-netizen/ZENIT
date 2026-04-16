function iniciarRutina() {
  const output = document.getElementById("output");
  output.innerHTML = "<h2>Rutina iniciada</h2>";

  let ejercicios = ["Flexiones", "Sentadillas", "Abdominales"];

  let i = 0;

  // 🔁 1. FOR...OF → mostrar lista inicial
  output.innerHTML += "<h3>Ejercicios:</h3>";
  for (let ejercicio of ejercicios) {
    output.innerHTML += "👉 " + ejercicio + "<br>";
  }

  // ⏱ TEMPORIZADOR
  function siguienteEjercicio() {
    if (i >= ejercicios.length) {
      output.innerHTML += "<h3>Rutina terminada ✅</h3>";

      mostrarDatos(); // mostrar datos al final
      return;
    }

    let tiempo = 30;

    output.innerHTML += `<p>Ejercicio: ${ejercicios[i]}</p>`;

    let intervalo = setInterval(() => {
      output.innerHTML += `⏱ ${tiempo} seg<br>`;
      tiempo--;

      if (tiempo < 0) {
        clearInterval(intervalo);
        output.innerHTML += "✔ Completado<br><br>";
        i++;
        siguienteEjercicio();
      }
    }, 1000);
  }

  siguienteEjercicio();
}

// 🛒 COMPRA
function comprarRutina() {
  const output = document.getElementById("output");
  output.innerHTML = "<h2>🛒 Seleccionaste una rutina PRO</h2>";

  document.getElementById("formDireccion").style.display = "block";
}

// 📍 CONFIRMAR COMPRA
function confirmarCompra() {
  const direccion = document.getElementById("direccion").value;
  const output = document.getElementById("output");

  if (direccion === "") {
    alert("Por favor ingresa tu dirección");
    return;
  }

  // 🔁 DO WHILE
  let confirmacion;
  do {
    confirmacion = prompt("¿Confirmas la compra? (si/no)");
  } while (confirmacion !== "si");

  output.innerHTML = `
    <h2>✅ Compra realizada</h2>
    <p>📦 Enviando a: ${direccion}</p>
    <p>🚚 Tu rutina llegará pronto</p>
  `;

  document.getElementById("formDireccion").style.display = "none";
}

// 🔁 2. FOR...IN → datos del usuario
function mostrarDatos() {
  const output = document.getElementById("output");

  let usuario = {
    nombre: "Sebastian",
    nivel: "Intermedio",
    ciudad: "Lima"
  };

  output.innerHTML += "<h3>👤 Datos del usuario:</h3>";

  for (let clave in usuario) {
    output.innerHTML += `${clave}: ${usuario[clave]}<br>`;
  }
}