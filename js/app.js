// Retrieve cart-info btn and toggle show-cart to display and hide cart info
document.getElementById("cart-info").addEventListener("click", function() {
    const cart = document.getElementById("cart");
    cart.classList.toggle("show-cart");
    console.log(cart);
});
