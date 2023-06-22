// Variables for cart functionality
const cartButton = document.getElementById('cart-button');
const cartContent = document.getElementById('cart-content');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let cart = [];

// Function to handle cart button click
function handleCartButtonClick() {
   // Toggle cart content visibility
   if (cartContent.style.display === 'block') {
      cartContent.style.display = 'none';
   } else {
      cartContent.style.display = 'block';
      renderCart();
   }
}

// Function to render the cart content
function renderCart() {
   // Clear previous cart items
   cartItems.innerHTML = '';

   if (cart.length === 0) {
      // Display "carrito vacío" message
      const emptyCartMessage = document.createElement('li');
      emptyCartMessage.textContent = 'Carrito vacío';
      cartItems.appendChild(emptyCartMessage);

      // Clear cart total
      cartTotal.textContent = '';
   } else {
      // Render each item in the cart
      cart.forEach(item => {
         const cartItem = document.createElement('li');
         cartItem.textContent = item.name;
         cartItems.appendChild(cartItem);
      });

      // Calculate and display cart total
      const total = cart.reduce((acc, item) => acc + itemPrice, 0);
      cartTotal.textContent = `Total: $${total}`;
   }
}

// Function to handle "Comprar" button click
function handleBuyButtonClick(name, price) {
   // Add item to the cart
   cart.push({ name, price });

   // Render the updated cart
   renderCart();
}

// Event listeners
cartButton.addEventListener('click', handleCartButtonClick);

// Example "Comprar" buttons for products
const buyButtons = document.getElementsByClassName('buy-button');
for (let i = 0; i < buyButtons.length; i++) {
   const button = buyButtons[i];
   button.addEventListener('click', function() {
      const itemName = this.dataset.name;
      const itemPrice = parseFloat(this.dataset.price);
      handleBuyButtonClick(itemName, itemPrice);
   });
}