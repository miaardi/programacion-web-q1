// Obtener los elementos necesarios
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const buyButtons = document.getElementsByClassName('buy-button');
const finalizeButton = document.getElementById('checkout-button');

// Variables de seguimiento del carrito
const cartItems = [];
let cartTotal = 0;

// Función para actualizar la visualización del carrito
function updateCartView() {
    cartItemsElement.innerHTML = '';
    for (const item of cartItems) {
        const li = document.createElement('li');
        li.classList.add('product-item');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = 'Imagen ' + item.name;
        img.width = 50;
        img.height = 50;
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = item.name;
        const p = document.createElement('p');
        p.innerText = 'Precio: $' + item.price;
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(p);
        li.appendChild(div);
        cartItemsElement.appendChild(li);
    }
    cartTotalElement.innerText = 'Total: $' + cartTotal;
}

// Función para agregar un producto al carrito
function addToCart(name, price, image) {
    cartItems.push({ name, price, image });
    cartTotal += price;
    updateCartView();
}

// Función para generar y descargar el PDF
function generatePDF() {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Carrito de Compra', 10, 10);

    let y = 30;
    for (const item of cartItems) {
        doc.text(item.name + ' - ' + item.price, 10, y);
        y += 10;
    }

    doc.text('Total: $' + cartTotal, 10, y + 10);

    doc.save('carrito_compra.pdf');
}

// Agregar eventos a los botones de compra
for (let i = 0; i < buyButtons.length; i++) {
    const buyButton = buyButtons[i];
    buyButton.addEventListener('click', function () {
        const productElement = this.parentNode;
        const productName = productElement.querySelector('h3').innerText;
        const productPrice = parseInt(productElement.querySelector('p').innerText.substring(8));
        const productImage = productElement.querySelector('img').src;
        addToCart(productName, productPrice, productImage);
    });
}

// Agregar evento al botón de finalizar compra
finalizeButton.addEventListener('click', generatePDF);