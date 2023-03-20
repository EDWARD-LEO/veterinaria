function saludar(){
  alert("Hola querida mascota");
}

function presentarse(){
  alert("Te saluda Jhon Francia");
}

const botonSaludo = document.getElementById("saludo");
botonSaludo.addEventListener("click", presentarse);