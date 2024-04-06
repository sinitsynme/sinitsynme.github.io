const priceFromInput = document.querySelector('input[name="price_from"]');
const priceToInput = document.querySelector('input[name="price_to"]');
const priceFromError = document.getElementById("price_from_error");
const priceToError = document.getElementById("price_to_error");

priceFromInput.addEventListener("input", validatePrice);
priceToInput.addEventListener("input", validatePrice);

function validatePrice(event) {
  const inputElement = event.target;
  const inputValue = inputElement.value;
  inputElement.value = inputValue.replace(/[^0-9]/g, "");

  const priceFromValue = parseFloat(priceFromInput.value);
  const priceToValue = parseFloat(priceToInput.value);

  switch (true) {
    case priceFromValue === 0 ||
      priceFromInput.value !== priceFromValue.toString():
      priceFromError.textContent = "Введите начальную цену";
      priceToError.textContent = "";
      break;
    case priceToValue === 0 || priceToInput.value !== priceToValue.toString():
      priceToError.textContent = "Введите конечную цену";
      priceFromError.textContent = "";
      break;
    case priceFromValue >= priceToValue:
      priceFromError.textContent = "Начальная цена должна быть меньше конечной";
      priceToError.textContent = "Конечная цена должна быть больше начальной";
      break;
    default:
      priceFromError.textContent = "";
      priceToError.textContent = "";
  }
}

const filterForm = document.querySelector(".filter-form");
const catalogItems = document.querySelectorAll(".catalog-item-card");

filterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (priceFromError.textContent == "" && priceToError.textContent == "") {
    const priceFromInput = document.querySelector('input[name="price_from"]');
    const priceToInput = document.querySelector('input[name="price_to"]');
    const filterParams = new URLSearchParams();

    const categoryCheckboxes = document.querySelectorAll(
      'input[name="tabletop"]:checked'
    );
    categoryCheckboxes.forEach((checkbox) => {
      filterParams.append(
        "categoryIds",
        checkbox.getAttribute("data-filter-value")
      );
    });

    const manufacturerFieldset = document.querySelector(
      'fieldset[data-filter="manufacturer"]'
    );
    const selectedManufacturerInput = manufacturerFieldset.querySelector(
      'input[type="radio"]:checked'
    );

    const playersFieldset = document.querySelector(
      'fieldset[data-filter="players"]'
    );
    const selectedPlayersInput = playersFieldset.querySelector(
      'input[type="radio"]:checked'
    );

    const durationFieldset = document.querySelector(
      'fieldset[data-filter="duration"]'
    );
    const selectedDurationInput = durationFieldset.querySelector(
      'input[type="radio"]:checked'
    );

    if (selectedManufacturerInput) {
      const selectedManufacturerValue =
        selectedManufacturerInput.getAttribute("data-filter-value");
      filterParams.append("creatorId", selectedManufacturerValue);
    }

    if (priceFromInput.value) {
      filterParams.append("priceFrom", priceFromInput.value);
    }
    if (priceToInput.value) {
      filterParams.append("priceTo", priceToInput.value);
    }

    if (selectedPlayersInput) {
      const selectedPlayersValue =
        selectedPlayersInput.getAttribute("data-filter-value");
      filterParams.append("playersQuantity", selectedPlayersValue);
    }
    if (selectedDurationInput) {
      const selectedDurationValue =
        selectedDurationInput.getAttribute("data-filter-value");
      filterParams.append("duration", selectedDurationValue);
    }

    const filterQueryString = filterParams.toString();

    localStorage.setItem("filterQueryString", filterQueryString);
    createProductCards();
  }
});
