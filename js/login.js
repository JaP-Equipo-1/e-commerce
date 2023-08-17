function submitForm(event){
    event.preventDefault();
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let loginError = document.getElementById("loginError");
    let errorMessage = "";

    if (usuario !== "" && contrasena !== ""){
        localStorage.setItem('usuario', usuario);
        window.location.href = "index.html";
    } else {
        errorMessage = "usuario y/o contrasena requerido";
    }

    loginError.innerHTML = errorMessage;
};
