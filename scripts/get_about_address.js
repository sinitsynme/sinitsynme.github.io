document.addEventListener("DOMContentLoaded", function () {
  var table = document.getElementById("shop-table");
  var modal = document.getElementById("modal");
  var modalContent = document.getElementById("modal-content");

  table.addEventListener("click", function (event) {
    var cell = event.target.closest("td");
    if (!cell) return;

    var info = JSON.parse(cell.getAttribute("data-info"));
    if (!info) return;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://51.250.114.234:8888/rest/api/ShopData");
    xhr.setRequestHeader("accept", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        var allAddresses = JSON.parse(xhr.responseText);
        var selectedAddress = allAddresses.find(function (address) {
          return address.id === info.id;
        });
        if (selectedAddress) {
          showModal(selectedAddress);
        } else {
          console.error("Адрес с ID " + info.id + " не найден");
        }
      } else {
        console.error("Ошибка при выполнении запроса: " + xhr.status);
      }
    };
    xhr.send();
  });

  function showModal(data) {
    var content =
      "<p><strong>Город:</strong> " +
      data.city +
      "</p>" +
      "<p><strong>Адрес магазина:</strong> " +
      data.address +
      "</p>" +
      "<p><strong>Справочный телефон:</strong> " +
      data.phone +
      "</p>" +
      "<p><strong>Почта:</strong> " +
      data.email +
      "</p>";
    modalContent.innerHTML = content;
    modal.style.display = "block";
  }

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
