document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

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
});