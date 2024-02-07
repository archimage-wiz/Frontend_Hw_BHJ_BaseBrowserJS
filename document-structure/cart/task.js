const productsList = document.querySelectorAll(".product");
const cartOfProducts = document.querySelector(".cart__products");

for (let productElement of productsList) {
    const decBtn = productElement.querySelector(
        ".product__quantity-control_dec"
    );
    const incBtn = productElement.querySelector(
        ".product__quantity-control_inc"
    );
    const quantityValue = productElement.querySelector(
        ".product__quantity-value"
    );
    const productAdd = productElement.querySelector(".product__add");
    const productImage = productElement.querySelector(".product__image");

    decBtn.addEventListener("click", () => {
        if (+quantityValue.textContent <= 1) return;
        quantityValue.textContent = +quantityValue.textContent - 1;
    });
    incBtn.addEventListener("click", () => {
        quantityValue.textContent = +quantityValue.textContent + 1;
    });
    productAdd.addEventListener("click", () => {
        const foundProduct = [...cartOfProducts.children].find(
            (prod) => productElement.dataset.id === prod.dataset.id
        );
        if (foundProduct) {
            const productCount = foundProduct.querySelector(
                ".cart__product-count"
            );
            productCount.textContent =
                +productCount.textContent + +quantityValue.textContent;
        } else {
            const newProduct = createProductElement(
                productElement.dataset.id,
                +quantityValue.textContent,
                productImage.src
            );
            cartOfProducts.appendChild(newProduct);
        }
    });
}

function createProductElement(id, count, imageLink) {
    let templateHTML = `
    <div class="cart__product" data-id="${id}">
        <img class="cart__product-image" src="${imageLink}">
        <div class="cart__product-count">${count}</div>
    </div>`;
    templateHTML = templateHTML.trim();
    const template = document.createElement("template");
    template.innerHTML = templateHTML;
    return template.content.firstChild;
}
