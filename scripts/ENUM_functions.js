function getCategoryString(categories) {
  var categoryString = "";
  categories.forEach(function (category) {
    categoryString += getCategoryName(category.id) + " / ";
  });
  return categoryString.slice(0, -3);
}
function getGameDuration(gameDurationId) {
  switch (gameDurationId) {
    case "UpToThirty":
      return "до 30 минут";
    case "ThirtyOneToSixty":
      return "от 31 до 60 минут";
    case "MoreThanOneHundredTwenty":
      return "от 120 минут";
    case "SixtyOneToOneHundredTwenty":
      return "60-120 минут";
    default:
      return "";
  }
}

function getPlayersQuantity(playersQuantityId) {
  switch (playersQuantityId) {
    case "ONE":
      return "1 игрок";
    case "THREE":
      return "3 игрока";
    case "TWO":
      return "2 игрока";
    case "FOUR":
      return "4 игрока";
    case "MORE_THAN_FOUR":
      return "от 4 до 8 игроков";
    default:
      return "";
  }
}
function getCategoryName(categoryId) {
  switch (categoryId) {
    case 1:
      return "Настольные";
    case 2:
      return "Традиционные";
    case 3:
      return "Карточные";
    case 4:
      return "Варгеймы";
    default:
      return "";
  }
}
function getCreatorName(creatorId) {
  switch (creatorId) {
    case 1:
      return "HobbyGames";
    case 2:
      return "Мосигра";
    case 3:
      return "Настолки.ru";
    default:
      return "";
  }
}

function getCategoryIds2() {
  const categoryCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]'
  );
  const selectedCategoryIds = [];
  categoryCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      switch (checkbox.id) {
        case "tabletop-game":
          selectedCategoryIds.push(1);
          break;
        case "card-game":
          selectedCategoryIds.push(3);
          break;
        case "traditional-game":
          selectedCategoryIds.push(2);
          break;
        case "wargame":
          selectedCategoryIds.push(4);
          break;
      }
    }
  });
  return selectedCategoryIds;
}

function getCreatorId2() {
  const selectedManufacturer = document.querySelector(
    'input[name="manufacturer"]:checked'
  ).value;
  switch (selectedManufacturer) {
    case "hobby-games":
      return 1;
    case "mosigra":
      return 2;
    case "nastolkiru":
      return 3;
    default:
      return "";
  }
}

function getPlayersQuantity2() {
  const selectedPlayer = document.querySelector(
    'input[name="players"]:checked'
  ).value;
  switch (selectedPlayer) {
    case "players-one":
      return "ONE";
    case "players-two":
      return "TWO";
    case "players-three":
      return "THREE";
    case "players-four":
      return "FOUR";
    case "players-four-plus":
      return "MORE_THAN_FOUR";
    default:
      return "";
  }
}

function getGameDuration2() {
  const selectedTime = document.querySelector(
    'input[name="time"]:checked'
  ).value;
  switch (selectedTime) {
    case "to-30":
      return "UpToThirty";
    case "to-60":
      return "ThirtyOneToSixty";
    case "to-120":
      return "SixtyOneToOneHundredTwenty";
    case "up-120":
      return "MoreThanOneHundredTwenty";
    default:
      return "";
  }
}
