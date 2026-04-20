function mostrarFormulario() {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("mensaje").innerText = "";
}

function procesarSuscripcion() {
  const mensaje = document.getElementById("mensaje");

  let datos = [
    document.getElementById("nombre").value.trim(),
    document.getElementById("email").value.trim()
  ];

  let nombres = ["Nombre", "Correo"];

  // 🔁 FOR → validar
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] === "") {
      mensaje.innerText = nombres[i] + " es obligatorio ❌";
      return;
    }
  }

  // 🔁 WHILE → confirmar suscripción
  let confirmacion = prompt("¿Confirmas la suscripción? (si/no)");

  while (confirmacion !== "si") {
    confirmacion = prompt("Escribe 'si' para confirmar");
  }

  mensaje.innerText = "Escanea el QR y realiza el pago 💸";

  // 🔁 DO WHILE → pago con QR
  let pago;

  do {
    pago = prompt("¿Ya realizaste el pago por Yape? (si/no)");
  } while (pago !== "si");

  // 💾 guardar suscripción
  let suscripcion = {
    nombre: datos[0],
    email: datos[1],
    plan: "PRO",
    metodo: "Yape",
    activo: true
  };

  localStorage.setItem("suscripcion", JSON.stringify(suscripcion));

  mensaje.innerText = "Pago confirmado 💜 Suscripción activa ✅";
}