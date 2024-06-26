document.addEventListener('DOMContentLoaded', fetchProducts);

async function fetchProducts() {
    try {
        const response = await fetch('/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToShoppingList('${product.name}', ${product.price})">Add to List</button>
        `;
        productList.appendChild(productDiv);
    });
}

let shoppingList = [];

function addToShoppingList(name, price) {
    shoppingList.push({ name, price });
    displayShoppingList();
}

function displayShoppingList() {
    const shoppingListDiv = document.getElementById('shopping-list');
    shoppingListDiv.innerHTML = '';
    shoppingList.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'shopping-item';
        itemDiv.innerHTML = `
            <h2>${item.name}</h2>
            <p>Price: ${item.price}</p>
        `;
        shoppingListDiv.appendChild(itemDiv);
    });
}

function calculateTotal() {
    const totalPrice = shoppingList.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').innerText = `Total Price: $${totalPrice}`;
}

