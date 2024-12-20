const username = localStorage.getItem('username');
const profileElement = document.getElementById('profile');
if (profileElement) {
    profileElement.textContent = username;
}

// Initialize the cart in local storage if it doesn't exist
if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
}

const cart = document.querySelector(".cart");

// Function to open the cart
function open_cart() {
    cart.classList.add("active");
    cart.style.overflowY = "auto";
}

// Function to close the cart
function close_cart() {
    cart.classList.remove("active");
}


// Function to handle logout
function logout() {
    let result = confirm("Do you want to logout?");
    if (result) {
        window.location.href = 'index.html';
    }
}


// Slider Functionality
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const nextButton = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');
let currentIndex = 0;

// Clone the first and last slides for infinite loop effect
if (slidesContainer && slides.length > 0) {
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slides[0]);
}

const allSlides = document.querySelectorAll('.slide');
const totalSlides = allSlides.length;

// Create indicators based on the number of slides
if (indicatorsContainer) {
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        if (index === 0) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    });
}


const indicators = document.querySelectorAll('.indicators div');

// Function to update the slider position
function updateSlider() {
    if (slidesContainer) {
        slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        slidesContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
    }


    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Function to reset the slider position when transition ends
function resetSlider() {
    if (slidesContainer) {
        slidesContainer.style.transition = 'none';
        if (currentIndex === slides.length) {
            currentIndex = 0;
            slidesContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        } else if (currentIndex === -1) {
            currentIndex = slides.length - 1;
            slidesContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
        }
    }

}

// Event listener for the next button
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentIndex++;
        updateSlider();
    });
}

// Automatic slider transition
setInterval(() => {
    currentIndex++;
    updateSlider();
}, 2500);


if (slidesContainer) {
    slidesContainer.addEventListener('transitionend', resetSlider);
}


// Checkout function
function checkout() {
    window.location.href = 'checkout.html';
}



const items_in_cart = document.querySelector(".items_in_cart");

// Function to add an item to the cart
function addToCart(id, btn) {
    let product_cart = JSON.parse(localStorage.getItem("cart")) || [];
        fakeFetch('./items.json')
            .then(response => response.json())
            .then(data => {
                 // Check if the product is already in the cart
                const existingProductIndex = product_cart.findIndex(product => product.id === id);

                if (existingProductIndex > -1) {
                    // If it exists, increment the quantity and update total price
                    product_cart[existingProductIndex].quantity += 1;
                    product_cart[existingProductIndex].totalPrice += product_cart[existingProductIndex].price;
                } else {
                    // If it doesn't exist, find the product in products_json and add it to cart
                    const product = data.find(product => product.id === id);
                    if (product) {
                        product_cart.push({
                            ...product,
                            quantity: 1,
                            totalPrice: product.price
                        });
                    }

                }
                localStorage.setItem("cart", JSON.stringify(product_cart));


                // Mark the button as active
                btn.classList.add("active");
                console.log("Added product ID:", id);

                // Update the cart
                getCardItems();
             })
            .catch(error => console.error('Error loading the data:', error));


}


// Get the elements for the cart display
const count_item = document.querySelector(".count_item");
const price_cart_head = document.querySelector(".price_cart_head");
const count_item_cart = document.querySelector(".count_item_cart");
const price_cart_total = document.querySelector(".price_cart_total");


// Function to update the cart display
function getCardItems() {
    let total_price = 0;
    let items = "";
    let product_cart = JSON.parse(localStorage.getItem("cart")) || [];

    let flag=0;

    // Loop through the cart items and build the HTML
    for (let i = 0; i < product_cart.length; i++) {
        const product = product_cart[i];
        items += `
        <div class="item_cart">
            <img src="${product.img}" alt="${product.name}">
            <div class="content">
                <h4>${product.name}</h4>
                <p class="price_cart">Price: $${product.price ? product.price.toFixed(2) : '0.00'}</p>
                <p>Quantity: ${product.quantity}</p>
                <p>Total: $${product.totalPrice ? product.totalPrice.toFixed(2) : '0.00'}</p>
            </div>
            <button onclick="remove_item(${i})" class="delet_item"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `;
        if (product.totalPrice) {
            total_price += product.totalPrice;
        }
        flag +=product.quantity;

    }

    // Update the HTML content for the cart
    if (items_in_cart) {
        items_in_cart.innerHTML = items;
    }

    if (price_cart_head) {
        price_cart_head.innerHTML = "$" + total_price.toFixed(2);
    }
    if (price_cart_total) {
        price_cart_total.innerHTML = "$" + total_price.toFixed(2);
    }
    if (count_item) {
        count_item.innerHTML = flag;
    }
    if (count_item_cart) {
        count_item_cart.innerHTML = product_cart.length + " ";
    }

}


// Function to remove an item from the cart
function remove_item(index) {
    let product_cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < product_cart.length) {
        const product = product_cart[index];
        if (product.quantity > 1) {
            // Decrease the quantity and update the total price
            product.quantity -= 1;
            product.totalPrice -= product.price;
        } else {
            // Remove the product from the cart if quantity is 1
            product_cart.splice(index, 1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(product_cart));

    // Update the cart display
    getCardItems();
}


// Call getCardItems() on page load
getCardItems();