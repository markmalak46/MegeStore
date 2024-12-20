function final_checkout() {
    const email = document.getElementById('mail').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    let product_cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    if (!email || !name || !address || !phone) {
        alert('Please fill in all delivery information fields.');
        return;
    }
     if (product_cart.length === 0) {
            alert('Your cart is empty. Please add products to the cart.');
            return;
     }
    // Clear the cart
    localStorage.setItem("cart", JSON.stringify([]));

    //Reset counters
    if (count_item) {
        count_item.innerHTML = 0;
    }
    if (count_item_cart) {
        count_item_cart.innerHTML = "0 ";
    }
    if (price_cart_head) {
        price_cart_head.innerHTML = "$0";
    }
    if (price_cart_total) {
        price_cart_total.innerHTML = "$0";
    }


    window.location.href = 'payment_success.html';
}