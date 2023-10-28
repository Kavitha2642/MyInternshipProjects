// Select all "Add to Cart" buttons and the "View Cart" button
const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const viewCartButton = document.getElementById("view-cart");

// Initialize an empty cart array
let cart = [];

// Define product prices for each product
const productPrices = [3999.99, 2279.99, 649.99, 519.99]; // Add more prices as needed

addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Add the product to the cart with the respective price
		window.alert("product is added to card!")
        const product = {
            name: `Product ${index + 1}`,
            price: productPrices[index],
        };
        cart.push(product);
        updateCartCount();
        alert(`"${product.name}" added to cart!`);
    });
});

// Add a click event listener to the "View Cart" button
viewCartButton.addEventListener("click", () => {
    displayCart();
});

// Update the cart count display
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length;
}

// Display the contents of the cart
function displayCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        const cartItems = cart.map((item) => `${item.name}: $${item.price.toFixed(2)}`);
        const cartSummary = `Cart Items:\n${cartItems.join("\n")}\nTotal: $${calculateCartTotal().toFixed(2)}`;
        alert(cartSummary);
    }
}

// Calculate the total price of the items in the cart
function calculateCartTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

// Initialize the cart count
updateCartCount();
