const products = [
  {
    id: 1,
    name: "Nike Running Shoes",
    price: 2999,
    image: "https://via.placeholder.com/250x200?text=Nike+Shoes"
  },
  {
    id: 2,
    name: "Adidas T-Shirt",
    price: 1199,
    image: "https://via.placeholder.com/250x200?text=Adidas+T-Shirt"
  },
  {
    id: 3,
    name: "Apple Watch",
    price: 19999,
    image: "https://via.placeholder.com/250x200?text=Apple+Watch"
  },
  {
    id: 4,
    name: "Sony Headphones",
    price: 4999,
    image: "https://via.placeholder.com/250x200?text=Sony+Headphones"
  }
];

let cartCount = 0;

function displayProducts() {
  const productGrid = document.getElementById("products");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productGrid.appendChild(div);
  });
}

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

window.onload = displayProducts;
