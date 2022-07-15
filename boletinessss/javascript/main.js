//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//recorrerlos
links.forEach(function(link){
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev){
    ev.preventDefault();
    let content = document.querySelector(".content");
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

  setTimeout(function(){
    location.href = "../index.html"
  },600);


    return false;
  });
});
