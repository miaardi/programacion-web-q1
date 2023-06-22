function agregarAlCarrito(precio) {
    cartItems.push({ precio: precio });
    total += precio;
    document.getElementById("cart-total").textContent = "Total: $" + total;
  }

  function mostrarCarrito() {
    const cartSection = document.getElementById("cart");
    cartSection.innerHTML = ""; // Clear previous cart items
  
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const menuNumber = i + 1;
  
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
  
      const itemName = document.createElement("p");
      itemName.textContent = "Menú " + menuNumber;
  
      const itemPrice = document.createElement("p");
      itemPrice.textContent = "Precio: $" + item.precio;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Borrar";
      removeButton.addEventListener("click", () => {
        cartItems.splice(i, 1); // Remove item from cartItems array
        total -= item.precio;
        document.getElementById("cart-total").textContent = "Total: $" + total;
        mostrarCarrito(); // Update the displayed cart items
      });
  
      cartItem.appendChild(itemName);
      cartItem.appendChild(itemPrice);
      cartItem.appendChild(removeButton);
  
      cartSection.appendChild(cartItem);
    }
  
    const finalizarCompraButton = document.createElement("button");
    finalizarCompraButton.textContent = "Finalizar compra";
    finalizarCompraButton.addEventListener("click", finalizarCompra);
  
    cartSection.appendChild(finalizarCompraButton);
  }

  function finalizarCompra() {
    const email = prompt("Por favor, ingrese su dirección de correo electrónico:");
    const emailBody = generate}