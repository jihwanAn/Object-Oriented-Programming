class Product {
  // title = "DEFAULT";
  // imageUrl;
  // description;
  // price;

  // 생성자 함수
  constructor(title, image, desc, price) {
    (this.title = title),
      (this.imageUrl = image),
      (this.description = desc),
      (this.price = price);
  }
}

class ShoppingCart {
  item = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h2>Total: ${0}</h2>
      <buuton>Order Now!</button>
    `;
    cartEl.classList = "cart";
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding product to cart..");
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt=${this.product.title}>
        <div>
          <h2>${this.product.title}</h2>
          <h3>${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>`;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A dish",
      "https://media.worksout.co.kr/resized/live/Y1234SLFHD03455001/Y1234SLFHD03455001-0.JPG",
      "A soft dish!",
      19.99
    ),
    new Product(
      "A Carpet",
      "https://media.worksout.co.kr/resized/live/SU224SLFHD00346006/SU224SLFHD00346006-0.JPG",
      "A Carpet which you might lick - or not.",
      89.99
    ),
  ];

  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();
