document.addEventListener("DOMContentLoaded", function () {
  var itemId = localStorage.getItem("selectedItemId");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://51.250.114.234:8888/rest/api/BoardGame/" + itemId);
  xhr.setRequestHeader("accept", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      var productData = JSON.parse(xhr.responseText);
      displayProduct(productData);
    } else {
      console.error("Ошибка при выполнении запроса: " + xhr.status);
    }
  };
  xhr.send();

  function displayProduct(productData) {
    var mainElement = document.querySelector("main");
    mainElement.innerHTML = "";

    var sectionElement = document.createElement("section");
    sectionElement.classList.add("flex-container-columned");

    var flexContainerElement = document.createElement("div");
    flexContainerElement.classList.add("flex-container");

    var leftColumnElement = document.createElement("div");
    leftColumnElement.classList.add("flex-container-columned");
    leftColumnElement.style.flexGrow = "2";

    var h1Element = document.createElement("h1");
    h1Element.textContent = productData.name;

    var categoriesElement = document.createElement("b");
    categoriesElement.textContent = getCategoryString(productData.categories);

    var imageContainerElement = document.createElement("div");
    imageContainerElement.classList.add("image-container");

    var productImageElement = document.createElement("img");
    productImageElement.classList.add("bordered", "big-card");
    productImageElement.src = productData.imageUrl;
    productImageElement.alt = productData.name;

    var imageZoomElement = document.createElement("div");
    imageZoomElement.classList.add("image-zoom");

    imageContainerElement.appendChild(productImageElement);
    imageContainerElement.appendChild(imageZoomElement);

    leftColumnElement.appendChild(h1Element);
    leftColumnElement.appendChild(categoriesElement);
    leftColumnElement.appendChild(imageContainerElement);

    var rightColumnElement = document.createElement("div");
    rightColumnElement.classList.add(
      "flex-container-columned",
      "big-card-characteristics"
    );
    rightColumnElement.style.flexGrow = "1";

    var idElement = document.createElement("div");
    idElement.classList.add("big-card-id");
    idElement.textContent = "Артикул товара: " + productData.shopNumber;

    var priceElement = document.createElement("div");
    priceElement.classList.add("big-card-price");
    priceElement.textContent = productData.price + " ₽";

    var cartButtonElement = document.createElement("button");
    cartButtonElement.classList.add("big-card-cart-button");
    cartButtonElement.textContent = "В корзину";

    var likeButtonElement = document.createElement("button");
    likeButtonElement.classList.add("big-card-like-button");
    likeButtonElement.textContent = "Добавить в избранное";

    var availableElement1 = document.createElement("p");
    availableElement1.classList.add("big-card-available");
    availableElement1.innerHTML = "В наличии в 33 магазинах, <u>сегодня</u>";

    var availableElement2 = document.createElement("p");
    availableElement2.classList.add("big-card-available");
    availableElement2.innerHTML = "Доставка - <u>завтра</u>";

    var similarProductHeadingElement = document.createElement("h3");
    similarProductHeadingElement.classList.add("text-centered");
    similarProductHeadingElement.textContent = "Похожий товар";

    var similarProductLinkElement = document.createElement("a");
    similarProductLinkElement.href = "product.html";
    similarProductLinkElement.dataset.id = productData.id;

    var similarProductCardElement = document.createElement("div");
    similarProductCardElement.classList.add("card");

    var similarProductImageElement = document.createElement("img");
    similarProductImageElement.src = productData.imageUrl;
    similarProductImageElement.alt = productData.name;

    var similarProductNameElement = document.createElement("span");
    similarProductNameElement.classList.add("card-name");
    similarProductNameElement.textContent = productData.name;

    var similarProductPriceElement = document.createElement("b");
    similarProductPriceElement.classList.add("card-price");
    similarProductPriceElement.textContent = productData.price + " ₽";

    similarProductCardElement.appendChild(similarProductImageElement);
    similarProductCardElement.appendChild(similarProductNameElement);
    similarProductCardElement.appendChild(similarProductPriceElement);

    similarProductLinkElement.appendChild(similarProductCardElement);

    rightColumnElement.appendChild(idElement);
    rightColumnElement.appendChild(priceElement);
    rightColumnElement.appendChild(cartButtonElement);
    rightColumnElement.appendChild(likeButtonElement);
    rightColumnElement.appendChild(availableElement1);
    rightColumnElement.appendChild(availableElement2);
    rightColumnElement.appendChild(similarProductHeadingElement);
    rightColumnElement.appendChild(similarProductLinkElement);

    flexContainerElement.appendChild(leftColumnElement);
    flexContainerElement.appendChild(rightColumnElement);

    sectionElement.appendChild(flexContainerElement);

    var characteristicsElement = document.createElement("div");
    characteristicsElement.classList.add("flex-container-columned");

    var characteristicsTitleElement = document.createElement("b");
    characteristicsTitleElement.classList.add("text-centered");
    characteristicsTitleElement.textContent = "Характеристики";

    var tableElement = document.createElement("table");

    var tableHeaderRowElement = document.createElement("tr");

    var th1Element = document.createElement("th");
    th1Element.textContent = "Характеристистика";

    var th2Element = document.createElement("th");
    th2Element.textContent = "Значение";

    tableHeaderRowElement.appendChild(th1Element);
    tableHeaderRowElement.appendChild(th2Element);

    var characteristicsRows = [
      {
        characteristic: "Количество игроков",
        value: getPlayersQuantity(productData.playersQuantity),
      },
      { characteristic: "Возраст игроков", value: "От 12 лет" },
      {
        characteristic: "Время игры",
        value: getGameDuration(productData.gameDurationInMinutes),
      },
      { characteristic: "Вес", value: "0.3 кг" },
      {
        characteristic: "Производитель",
        value: getCreatorName(productData.creator.id),
      },
    ];

    characteristicsRows.forEach(function (row) {
      var trElement = document.createElement("tr");

      var td1Element = document.createElement("td");
      td1Element.textContent = row.characteristic;

      var td2Element = document.createElement("td");
      td2Element.textContent = row.value;

      trElement.appendChild(td1Element);
      trElement.appendChild(td2Element);

      tableElement.appendChild(trElement);
    });

    characteristicsElement.appendChild(characteristicsTitleElement);
    characteristicsElement.appendChild(tableElement);

    sectionElement.appendChild(characteristicsElement);

    mainElement.appendChild(sectionElement);
  }

  
});
