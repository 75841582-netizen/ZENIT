function mostrarSuscripcion() {
  document.getElementById("subscriptionSection").style.display = "block";
  document.getElementById("message").innerText = "";
  document.getElementById("result").innerHTML = "";
}

function confirmarSuscripcion() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message");

  if (fullName === "" || email === "" || address === "") {
    message.innerText = "Please complete all fields.";
    return;
  }

  let confirmacion;
  do {
    confirmacion = prompt("Do you confirm the subscription? (yes/no)");
  } while (confirmacion !== "yes");

  message.innerText = "Subscription data confirmed. Now complete the payment with Yape.";
}

function confirmarPago() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const result = document.getElementById("result");
  const message = document.getElementById("message");

  if (fullName === "" || email === "" || address === "") {
    message.innerText = "Please complete the form first.";
    return;
  }

  message.innerText = "Verifying payment...";

  setTimeout(() => {
    result.innerHTML = `
      <h2>✅ Active Subscription</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Plan:</strong> PRO Plan</p>
      <p><strong>Payment method:</strong> Yape</p>
      <p>Your subscription is now active.</p>
    `;

    message.innerText = "";
    document.getElementById("subscriptionSection").style.display = "none";
  }, 3000);
}