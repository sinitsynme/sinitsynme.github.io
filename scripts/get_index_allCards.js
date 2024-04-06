document.addEventListener("DOMContentLoaded", function () {
  var itemContainer = document.getElementById("item-container");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://51.250.114.234:8888/rest/api/BoardGame");
  xhr.setRequestHeader("accept", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      buildCards(response);
    } else {
      console.error("Ошибка при выполнении запроса: " + xhr.status);
    }
  };
  xhr.send();

  function buildCards(jsonData) {
    var itemContainer = document.getElementById("item-container");
    if (!itemContainer) {
      itemContainer = document.createElement("div");
      itemContainer.id = "item-container";
      document.body.appendChild(itemContainer);
    }

    jsonData.forEach(function (item) {
      var link = document.createElement("a");
      link.href = "product.html";
      link.setAttribute("data-id", item.id);

      var card = document.createElement("div");
      card.classList.add("card");

      var img = document.createElement("img");
      img.src = item.imageUrl;
      img.alt = item.name;

      var name = document.createElement("span");
      name.classList.add("card-name");
      name.textContent = item.name;

      var price = document.createElement("b");
      price.classList.add("card-price");
      price.textContent = item.price + " ₽";

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(price);

      link.appendChild(card);

      itemContainer.appendChild(link);

      link.addEventListener("click", function (event) {
        var itemId = item.id;
        localStorage.setItem("selectedItemId", itemId);
      });
    });
  }
});
