
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

  // Obtener todos los botones de eliminación
  var deleteButtons = document.getElementsByClassName("delete-button");

  // Recorrer los botones y agregar el evento de clic a cada uno
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
      // Obtener el ID del producto asociado al botón de eliminación
      var productId = this.parentNode.getAttribute("data-product-id");

      // Eliminar el elemento del carrito
      var cartItem = this.parentNode;
      cartItem.parentNode.removeChild(cartItem);

      // Aquí puedes realizar cualquier otra acción que necesites, como actualizar el total del carrito, etc.

      // Llamar a una función para realizar alguna acción adicional, como enviar una solicitud al servidor para actualizar el carrito en la base de datos
      eliminarProductoDelCarrito(productId);
    });
  }

  // Función para eliminar un producto del carrito en el servidor
  function eliminarProductoDelCarrito(productId) {
    // Realizar una solicitud al servidor para eliminar el producto del carrito
    // Puedes usar AJAX, Fetch API u otras técnicas para enviar la solicitud al servidor
    // Aquí puedes implementar tu lógica para eliminar el producto del carrito en el servidor
  }

  document.getElementById("checkout-button").addEventListener("click", function() {
    // Generar el formulario
    var form = document.createElement("form");
    form.action = "https://formsubmit.co/ardissonemia@gmail.com";
    form.method = "POST";

    // Agregar campos al formulario
    var emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.placeholder = "Correo electrónico";
    emailInput.required = true;
    form.appendChild(emailInput);

    // Agregar otros campos al formulario según tus necesidades

    // Agregar el formulario a la página
    document.body.appendChild(form);

    // Enviar el formulario automáticamente
    form.submit();
  });