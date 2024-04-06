document.addEventListener("DOMContentLoaded", function () {
  var regionButton = document.getElementById("region-button");
  var cityList = document.getElementById("city-list");
  var citySelect = document.getElementById("city-select");
  var saveCityButton = document.getElementById("save-city-button");
  var selectedCityElement = document.getElementById("selected-city");

  var selectedCity = localStorage.getItem("selectedCity");
  if (selectedCity) {
    var existingSelectedCityElement = document.getElementById("selected-city");
    if (existingSelectedCityElement) {
      existingSelectedCityElement.remove();
    }
    regionButton.insertAdjacentHTML(
      "afterend",
      '<p id="selected-city">Выбранный город: <strong>' +
        selectedCity +
        "</strong></p>"
    );
  }

  regionButton.addEventListener("click", function () {
    fetch("http://51.250.114.234:8888/rest/api/Region")
      .then((response) => response.json())
      .then((data) => {
        citySelect.innerHTML = '<option value="">Выберите город</option>';
        data.forEach((city) => {
          citySelect.innerHTML +=
            '<option value="' + city.name + '">' + city.name + "</option>";
        });
        cityList.style.display = "block";
      })
      .catch((error) => console.error("Ошибка:", error));
  });

  saveCityButton.addEventListener("click", function () {
    var selectedCity = citySelect.value;
    if (selectedCity) {
      localStorage.setItem("selectedCity", selectedCity);
      var existingSelectedCityElement =
        document.getElementById("selected-city");
      if (existingSelectedCityElement) {
        existingSelectedCityElement.remove();
      }
      regionButton.insertAdjacentHTML(
        "afterend",
        '<p id="selected-city">Выбранный город: <strong>' +
          selectedCity +
          "</strong></p>"
      );
      cityList.style.display = "none";
    } else {
      alert("Пожалуйста, выберите город");
    }
  });
});
var regionButton = document.getElementById("region-button");
var cityList = document.getElementById("city-list");
var citySelect = document.getElementById("city-select");
var saveCityButton = document.getElementById("save-city-button");
var closeBtn = document.querySelector(".close");

regionButton.addEventListener("click", function () {
  cityList.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  cityList.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == cityList) {
    cityList.style.display = "none";
  }
});
