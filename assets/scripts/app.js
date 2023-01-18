class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    (this.title = title),
      (this.imageUrl = image),
      (this.description = desc),
      (this.price = price);
  }
}

const productList = {
  products: [
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
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt=${prod.title}>
        <div>
          <h2>${prod.title}</h2>
          <h3>${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>`;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
