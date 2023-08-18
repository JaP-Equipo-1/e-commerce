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
        errorMessage = "usuario y contrasena requerido";
    }

    loginError.innerHTML = errorMessage;
};

//Mostrar contraseña;
function mostrarPassword() {
    var contrasena = document.getElementById("contrasena");
   var show_eye = document.getElementById("show_eye");
   var hide_eye = document.getElementById("hide_eye");

 hide_eye.classList.remove("d-none");
 if (contrasena.type === "password") {
   contrasena.type = "text";
   show_eye.style.display = "none";
   hide_eye.style.display = "block";
 } else {
   contrasena.type = "password";
   show_eye.style.display = "block";
   hide_eye.style.display = "none";
 }
}