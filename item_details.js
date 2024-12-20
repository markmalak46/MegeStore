function fetchAndDisplayProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (isNaN(productId)) {
        console.error('Invalid product ID in URL.');
        return;
    }

    fakeFetch('./items.json')
        .then(response => response.json())
        .then(data => {
            const product = data.find(item => item.id === productId);
            if (!product) {
                console.error('Product not found.');
                return;
            }

            const itemDetailsDiv = document.querySelector('.item_details');
            if (itemDetailsDiv) {
                itemDetailsDiv.innerHTML = `
                <div class="img_details">
                    <div class="item_img">
                        <img src="${product.img}" alt="${product.name}">
                    </div>

                    <div class="details_item">
                        <h1 class="name">${product.name}</h1>
                        <p class="price"><span>$${product.price.toFixed(2)}</span></p>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <h5>Availability:  <span>In stock</span></h5>
                    <h5>SKU: <span>Samsung : plus</span></h5>

                    <p class="txt">
                      ${product.description}
                    </p>
                    <h4>Hurry up only 9 products in stock</h4>

                    <div class="add_btn">
                         <button onclick = "addToCart(${product.id}, this)">Add to cart</button>
                    </div>
                </div>
            `;
            }
        })
        .catch(error => console.error('Error loading the data:', error));
}
document.addEventListener('DOMContentLoaded', function () {
      fetchAndDisplayProduct();
});