function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let mensaje = document.getElementById("mensaje");

    if (username === "Kevin" && password === "1234") {
        window.location.href = "profile/profile.html";
    } else {
        mensaje.innerText = "Usuario o contraseña incorrectos";
    }
}

function mostrarContenido() {
    document.getElementById("contenidoOculto").style.display = "block";
}

function activarBoton() {
    let check1 = document.getElementById("check1").checked;
    let check2 = document.getElementById("check2").checked;

    document.getElementById("botonFinal").disabled = !(check1 && check2);
}