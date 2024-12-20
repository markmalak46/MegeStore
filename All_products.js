function fetchAndDisplayAllProducts() {
    fakeFetch('./items.json')
        .then(response => response.json())
        .then(data => {
            const product_div = document.getElementById("product_div");
            if (product_div) {
                product_div.innerHTML = '';

                data.forEach(product => {
                    const old_price_p = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : "";
                    const productHTML = `
            <div class="products">
                <div class="product">
                    <div class="img_product">
                         <a href="item_details.html?id=${product.id}">
                            <img src="${product.img}" alt="${product.name}">
                        </a>
                    </div>
                    <h3 class="name_product">
                        <a href="item_details.html?id=${product.id}">${product.name}</a>
                    </h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${old_price_p}
                    </div>
                    <div class="add_to_cart">
                        <button onclick="addToCart(${product.id}, this)">Add to cart</button>
                    </div>
                </div>
            </div>
          `;
                    product_div.innerHTML += productHTML;
                });
            }
        })
        .catch(error => console.error('Error loading the data:', error));
}

document.addEventListener('DOMContentLoaded', function () {
    fetchAndDisplayAllProducts();
});