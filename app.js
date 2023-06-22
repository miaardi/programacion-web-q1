// Variables para la funcionalidad del carrito
const cartButton = document.getElementById('cart-button');
const cartContent = document.getElementById('cart-content');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

// Función para manejar el clic en el botón del carrito
function handleCartButtonClick() {
   // Alternar la visibilidad del contenido del carrito
   if (cartContent.style.display === 'block') {
      cartContent.style.display = 'none';
   } else {
      cartContent.style.display = 'block';
      renderCart();
   }
}

// Función para renderizar el contenido del carrito
function renderCart() {
   // Limpiar los elementos del carrito previos
   cartItems.innerHTML = '';

   if (cart.length === 0) {
      // Mostrar el mensaje "carrito vacío"
      const emptyCartMessage = document.createElement('li');
      emptyCartMessage.textContent = 'Carrito vacío';
      cartItems.appendChild(emptyCartMessage);

      // Limpiar el total del carrito
      cartTotal.textContent = '';
   } else {
      // Renderizar cada elemento del carrito
      cart.forEach(item => {
         const cartItem = document.createElement('li');
         cartItem.textContent = `${item.name} - Precio: $${item.price}`;
         cartItems.appendChild(cartItem);
      });

      // Calcular y mostrar el total del carrito
      const total = cart.reduce((acc, item) => acc + item.price, 0);
      cartTotal.textContent = `Total: $${total}`;
   }
}

// Función para manejar el clic en el botón "Comprar"
function handleBuyButtonClick(name, price) {
   // Agregar el producto al carrito
   cart.push({ name, price });

   // Renderizar el carrito actualizado
   renderCart();
}

// Listeners de eventos
cartButton.addEventListener('click', handleCartButtonClick);

// Ejemplo de botones "Comprar" para los productos
const buyButtons = document.getElementsByClassName('buy-button');
for (let i = 0; i < buyButtons.length; i++) {
   const button = buyButtons[i];
   button.addEventListener('click', function() {
      const itemName = this.dataset.name;
      const itemPrice = parseFloat(this.dataset.price);
      handleBuyButtonClick(itemName, itemPrice);
   });
}