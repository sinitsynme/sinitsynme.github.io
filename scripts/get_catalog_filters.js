localStorage.removeItem("filterQueryString");
function createProductCards() {
  const filterQueryString = localStorage.getItem("filterQueryString");
  let url = "https://51.250.114.234:8888/rest/api/BoardGame/filter";

  if (filterQueryString) {
    url += "?" + filterQueryString;
  }
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const container = document.querySelector(
        ".flex-container.item-container"
      );
      container.innerHTML = "";
      data.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("catalog-item-card");
        card.dataset.productId = product.id;

        const link = document.createElement("a");
        link.href = "product.html";

        const image = document.createElement("img");
        image.src = product.imageUrl;
        image.alt = "Товар";
        image.classList.add("catalog-item-card-image");

        const textContainer = document.createElement("div");
        textContainer.classList.add(
          "flex-container-columned",
          "catalog-item-card-text"
        );

        const name = document.createElement("span");
        name.classList.add("card-name");
        name.textContent = product.name;

        const price = document.createElement("b");
        price.classList.add("card-price");
        price.textContent = product.price + " ₽";

        const cartButton = document.createElement("button");
        cartButton.classList.add("catalog-item-card-cart-button");
        cartButton.textContent = "В корзину";

        const likeButton = document.createElement("button");
        likeButton.classList.add("catalog-item-card-like-button");
        likeButton.textContent = "Добавить в избранное";

        textContainer.appendChild(name);
        textContainer.appendChild(price);
        textContainer.appendChild(cartButton);
        textContainer.appendChild(likeButton);

        link.appendChild(image);
        card.appendChild(link);
        card.appendChild(textContainer);

        container.appendChild(card);

        card.addEventListener("click", function () {
          localStorage.setItem("selectedItemId", product.id);
        });
        localStorage.removeItem("filterQueryString");
      });
    })
    .catch((error) =>
      console.error("Ошибка при получении данных о товарах:", error)
    );
}

window.addEventListener("load", createProductCards);
