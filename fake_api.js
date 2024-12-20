// fake_api.js
const fakeItems = [
    {
      "id": 0,
      "img": "./img/product/product1.jpg",
      "img_hover": "./img/product/product-1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 185,
      "old_price": 225,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 1,
      "img": "./img/product/product2.jpg",
      "img_hover": "./img/product/product-2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 100,
      "old_price": 120,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 2,
      "img": "./img/product/product3.jpg",
      "img_hover": "./img/product/product-3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 140,
      "old_price": 200,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 3,
      "img": "./img/product/product2.jpg",
      "img_hover": "./img/product/product-4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90,
      "old_price": 110,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 4,
      "img": "./img/product/product1.jpg",
      "img_hover": "./img/product/product-5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 350,
      "old_price": 420,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 5,
      "img": "./img/product/product6.jpg",
      "img_hover": "./img/product/product-6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 115,
      "old_price": 235,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 6,
      "img": "./img/product/product3.jpg",
      "img_hover": "./img/product/product-7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 225,
      "old_price": 280,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 7,
      "img": "./img/product/product8.jpg",
      "img_hover": "./img/product/product-8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 150,
      "old_price": 200,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 8,
      "img": "./img/product/product-1.jpg",
      "img_hover": "./img/product/product1.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 9,
      "img": "./img/product/product3.jpg",
      "img_hover": "./img/product/product2.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 300,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 10,
      "img": "./img/product/product6.jpg",
      "img_hover": "./img/product/product3.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 250,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 11,
      "img": "./img/product/product2.jpg",
      "img_hover": "./img/product/product4.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 120,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 12,
      "img": "./img/product/product1.jpg",
      "img_hover": "img/product/product5.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 90,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 13,
      "img": "./img/product/product-6.jpg",
      "img_hover": "./img/product/product6.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 129,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 14,
      "img": "./img/product/product-7.jpg",
      "img_hover": "./img/product/product7.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 180,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    },
    {
      "id": 15,
      "img": "./img/product/product-8.jpg",
      "img_hover": "./img/product/product8.jpg",
      "name": "Original Mobile Android Dual SIM Smart Phone G3",
      "price": 60,
      "description": "This is a high-quality original mobile phone with dual SIM capability. It runs on the latest Android OS and offers a smooth user experience."
    }
  ];
  
  function fakeFetch(url) {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (url === './items.json') {
                  resolve({
                      ok: true,
                      json: () => Promise.resolve(fakeItems),
                  });
              } else {
                  reject('Fake API: Not Found');
              }
          }, 500);
      });
  }