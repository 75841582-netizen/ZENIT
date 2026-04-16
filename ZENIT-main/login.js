let users = JSON.parse(localStorage.getItem("users"));

if (!users) {
    users = [
        { email: "admin@gmail.com", password: "1234" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existe = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            existe = true;
            break;
        }
    }

    if (existe) {
        alert("El usuario ya existe");
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso ✅");
    window.location.href = "login.html";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let encontrado = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            encontrado = true;
            break;
        }
    }

if (encontrado) {

    document.getElementById("message").innerText = "Welcome 🎉";

    localStorage.setItem("activeUser", email);
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);

} else {
    document.getElementById("message").innerText = "Incorrect data ❌";
}
}

function togglePassword() {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function goInstagramLogin() {
  if (confirm("Ir a inicio de sesión de Instagram?")) {
    window.open("https://www.instagram.com/accounts/login/", "_blank");
  }
}

function goFacebookLogin() {
  if (confirm("Ir a inicio de sesión de Facebook?")) {
    window.open("https://www.facebook.com/login/", "_blank");
  }
}