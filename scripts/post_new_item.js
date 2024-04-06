document
  .querySelector(".js-item-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = document.querySelector(".js-item-form");
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => (element.textContent = ""));

    const itemName = document.querySelector(".js-item-name").value;
    const itemCode = document.querySelector(".js-item-code1").value;
    const itemPrice = document.querySelector(".js-item-price").value;
    const itemQuantity = document.querySelector(".js-item-quantity").value;
    let check = 0;

    if (itemName.trim() === "") {
      document.querySelector("#item-name-error").textContent =
        "Пожалуйста, введите название товара.";
    } else if (!/^[a-zA-Zа-яА-Я\s-]{3,30}$/.test(itemName)) {
      document.querySelector("#item-name-error").textContent =
        "Название содержит недопустимые символы или длина меньше 3 и больше 30 символов.";
    } else if (itemName.charAt(itemName.length - 1) === " ") {
      document.querySelector("#item-name-error").textContent =
        "Название не может заканчиваться пробелом.";
    } else {
      document.querySelector("#item-name-error").textContent = "";
      check += 1;
    }

    if (itemCode.trim() === "") {
      document.querySelector("#item-qr-error").textContent =
        "Пожалуйста, введите ссылку на изображение товара.";
    } else if (!/^http.*\.(jpg|png)$/.test(itemCode.trim())) {
      document.querySelector("#item-qr-error").textContent =
        "Введенный артикул не является ссылкой на изображение формата jpg или png.";
    } else {
      document.querySelector("#item-qr-error").textContent = "";
      check += 1;
    }

    if (itemPrice.trim() === "") {
      document.querySelector("#item-price-error").textContent =
        "Пожалуйста, введите цену товара.";
    } else if (
      !/^\d+$/.test(itemPrice) ||
      itemPrice < 100 ||
      itemPrice > 100000
    ) {
      document.querySelector("#item-price-error").textContent =
        "Цена должна быть от 100 до 100000 и содержать только цифры.";
    } else {
      document.querySelector("#item-price-error").textContent = "";
      check += 1;
    }

    if (itemQuantity.trim().length !== 8 || isNaN(itemQuantity.trim())) {
      document.querySelector("#item-quantity-error").textContent =
        "Количество должно содержать ровно 8 цифр.";
    } else {
      document.querySelector("#item-quantity-error").textContent = "";
      check += 1;
    }

    const categoryCheckboxes = document.querySelectorAll(
      'input[type="checkbox"]'
    );
    let categoryChecked = false;
    categoryCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        categoryChecked = true;
      }
    });
    if (!categoryChecked) {
      document.querySelector("#category-error").textContent =
        "Выберите хотя бы одну категорию.";
    } else {
      document.querySelector("#category-error").textContent = "";
      check += 1;
    }

    const manufacturerRadios = document.querySelectorAll('input[type="radio"]');
    let manufacturerChecked = false;
    manufacturerRadios.forEach((radio) => {
      if (radio.checked) {
        manufacturerChecked = true;
      }
    });
    if (!manufacturerChecked) {
      document.querySelector("#manufacturer-error").textContent =
        "Выберите производителя.";
    } else {
      document.querySelector("#manufacturer-error").textContent = "";
      check += 1;
    }

    const playerRadios = document.querySelectorAll('input[name="players"]');
    let playerChecked = false;
    playerRadios.forEach((radio) => {
      if (radio.checked) {
        playerChecked = true;
      }
    });
    if (!playerChecked) {
      document.querySelector("#players-error").textContent =
        "Выберите количество игроков.";
    } else {
      document.querySelector("#players-error").textContent = "";
      check += 1;
    }

    const timeRadios = document.querySelectorAll('input[name="time"]');
    let timeChecked = false;
    timeRadios.forEach((radio) => {
      if (radio.checked) {
        timeChecked = true;
      }
    });
    if (!timeChecked) {
      document.querySelector("#time-error").textContent =
        "Выберите длительность игры.";
    } else {
      document.querySelector("#time-error").textContent = "";
      check += 1;
    }

    if (check === 8) {
      const selectedCategories = [];
      categoryCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          selectedCategories.push(checkbox.labels[0].textContent);
        }
      });
      console.log(selectedCategories);

      const selectedManufacturer = document.querySelector(
        'input[name="manufacturer"]:checked'
      ).value;

      const selectedPlayer = document.querySelector(
        'input[name="players"]:checked'
      ).value;

      const selectedTime = document.querySelector(
        'input[name="time"]:checked'
      ).value;

      console.log(selectedManufacturer, selectedPlayer, selectedTime);

      const formData = {
        shopNumber: itemQuantity,
        price: itemPrice,
        name: itemName,
        gameDurationInMinutes: getGameDuration2(),
        playersQuantity: getPlayersQuantity2(),
        categoryIds: getCategoryIds2(),
        creatorId: getCreatorId2(),
        imageUrl: itemCode,
      };

      console.log(formData);

      fetch("http://51.250.114.234:8888/rest/api/BoardGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = "/index.html";
        })

        .catch((error) => {
          console.error("Ошибка при отправке данных:", error);
        });
    }
  });
