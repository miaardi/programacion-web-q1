const cart = document.querySelector("#cart");
const contenedor = document.querySelector("#menu-conteiner");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        cart.classList.add("scroll")
    }
    else{
        cart.classList.remove("scroll")
    }
})