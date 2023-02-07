function validarUsuario() {
    let password = document.getElementById('nombre-usuario');
    let nombreUsuario = document.getElementById('password');
    
    if ((nombreUsuario.value != password.value) || (nombreUsuario.value.length <= 0)) {
        password.value = "", nombreUsuario.value = "";
    } else {
        window.location.replace("../index.html");
    }
}