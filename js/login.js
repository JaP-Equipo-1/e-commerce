// loginForm
function submitForm(event){
    event.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var loginError = document.getElementById("loginError");
    var errorMessage = "";

    if (usuario !== "" && contrasena !== ""){
        localStorage.setItem('usuario', usuario);
        window.location.href = "index.html";
    } else {
        errorMessage = "usuario y/o contrasena requerido";
    }

    loginError.innerHTML = errorMessage;
};
