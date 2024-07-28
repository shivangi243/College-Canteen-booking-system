document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        elements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load
});

// scripts.js

// Sample data for demonstration
const menuData = {
    canteen1: [
        { name: 'Burger', description: 'Juicy beef burger with cheese', image: 'images/burger.jpg', price: 5.99 },
        { name: 'Pizza', description: 'Cheese pizza with a crispy crust', image: 'images/pizza.jpg', price: 8.99 }
    ],
    canteen2: [
        { name: 'Salad', description: 'Fresh greens with vinaigrette', image: 'images/salad.jpg', price: 4.99 },
        { name: 'Smoothie', description: 'Fruit smoothie with yogurt', image: 'images/smoothie.jpg', price: 3.99 }
    ]
    // Add more canteens and their items
};

function updateMenu() {
    const canteen = document.getElementById('canteen').value;
    const menuItems = document.getElementById('menu-items');
    menuItems.innerHTML = ''; // Clear existing menu items

    if (canteen && menuData[canteen]) {
        menuData[canteen].forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="addToCart('${item.name}', '${item.image}', ${item.price})">Add to Cart</button>
                </div>
            `;
            menuItems.appendChild(menuItem);
        });
    }
}

function addToCart(name, image, price) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <img src="${image}" alt="${name}">
        <div class="cart-item-details">
            <h4>${name}</h4>
            <p>Price: $${price.toFixed(2)}</p>
        </div>
    `;
    cartItems.appendChild(cartItem);
}
