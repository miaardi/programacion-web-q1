// Function to handle cart button click
function handleCartButtonClick() {
    const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");
const body = document.querySelector("body");
window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top<10){
        header.classList.add("scroll")
    }
    else{
        header.classList.remove("scroll")
    }
})
    // Add your cart functionality here
    // For example, show a modal or navigate to the cart page
    console.log('Cart button clicked!');
 }
 
 // Event listener for cart button
 const cartButton = document.getElementById('cart-button');
 cartButton.addEventListener('click', handleCartButtonClick);