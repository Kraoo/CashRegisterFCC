let cart = [];
let total = 0;

// Func to add item
function addItem() {
    const itemInput = document.getElementById('item');
    const priceInput = document.getElementById('price');
    
    const item = itemInput.value;
    const price = parseFloat(priceInput.value);
    
    if (item && price) {
        cart.push({ item, price });
        displayCart();
        updateTotal();
        
        itemInput.value = '';
        priceInput.value = '';
    } else {
        alert('Please enter valid item and price.');
    }
}

// Funch to display items
function displayCart() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';
    
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.item} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
    });
}

// Func update price total
function updateTotal() {
    total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('total').textContent = total.toFixed(2);
}

// Func process pay button
function processPayment() {
    if (cart.length > 0) {
        alert(`Payment processed successfully! Total amount: $${total.toFixed(2)}`);
        cart = [];
        total = 0;
        displayCart();
        updateTotal();
    } else {
        alert('Please add items to the cart before processing payment.');
    }
}

// Enter button work 
document.addEventListener('DOMContentLoaded', function() {
    const priceInput = document.getElementById('price');
    priceInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });
});
