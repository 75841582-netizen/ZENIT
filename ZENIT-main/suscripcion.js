function mostrarFormulario() {
  document.getElementById("formSection").style.display = "block";
  document.getElementById("mensaje").innerText = "";
}

function procesarSuscripcion() {
  const mensaje = document.getElementById("mensaje");

  // Datos del formulario
  let datos = [
    document.getElementById("name").value.trim(),
    document.getElementById("email").value.trim()
  ];

  let nombres = ["Name", "Email"];

  // 🔁 1. FOR → validar campos
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] === "") {
      mensaje.innerText = nombres[i] + " is required ❌";
      return;
    }
  }

  // 🔁 2. WHILE → confirmación
  let confirmacion = prompt("Confirm subscription? (yes/no)");

  while (confirmacion !== "yes") {
    confirmacion = prompt("Please type 'yes' to confirm");
  }

  mensaje.innerText = "Subscription confirmed ✔";

  // 🔁 3. DO WHILE → pago
  let pago;

  do {
    pago = prompt("Did you complete the payment? (yes/no)");
  } while (pago !== "yes");

  // Resultado final
  mensaje.innerText = "Payment successful 💜 Subscription active ✅";
}