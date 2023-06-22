const menu1 = {
    name: "Menu 1",
    description: "This is the description for Menu 1.",
    price: 1000
 };

 const menu2 = {
    name: "Menu 2",
    description: "This is the description for Menu 2.",
    price: 1500
 };

 // Shopping cart array
 let cart = [];

 // Function to add menu to the cart
 function addToCart(menu) {
    cart.push(menu);
    console.log(`Added ${menu.name} to the cart.`);
 }

 // Function to display cart items
 function showCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
       const item = cart[i];

       const itemDiv = document.createElement("div");
       itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>Price: $${item.price}</p>
          <button onclick="removeFromCart(${i})">Remove</button>
       `;

       cartItemsDiv.appendChild(itemDiv);
    }

    cartItemsDiv.style.display = "block";
 }

 // Function to remove item from cart
 function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    console.log(`Removed ${removedItem.name} from the cart.`);

    showCart();
 }

 // Event listener for cart button
 const cartButton = document.getElementById("cart-button");
 cartButton.addEventListener("click", showCart);

 // Test adding menus to the cart
 addToCart(menu1);
 addToCart(menu2);