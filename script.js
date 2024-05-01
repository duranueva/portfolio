let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades_columnA() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("skill-a1");
    habilidades[1].classList.add("skill-a2");
    habilidades[2].classList.add("skill-a3");
    habilidades[3].classList.add("skill-a4");
    habilidades[4].classList.add("skill-a5");
  }
}

function efectoHabilidades_columnB() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[5].classList.add("skill-b1");
    habilidades[6].classList.add("skill-b2");
    habilidades[7].classList.add("skill-b3");
    habilidades[8].classList.add("skill-b4");
    habilidades[9].classList.add("skill-b5");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades_columnA();
  efectoHabilidades_columnB();
};
