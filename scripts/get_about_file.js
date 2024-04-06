document.addEventListener("DOMContentLoaded", function () {
  var downloadButton = document.getElementById("download-button");
  downloadButton.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://51.250.114.234:8888/rest/api/PriceReport");
    xhr.responseType = "blob";
    xhr.setRequestHeader("accept", "*/*");

    xhr.onload = function () {
      if (xhr.status === 200) {
        var blob = new Blob([xhr.response], {
          type: "application/vnd.ms-excel",
        });
        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "PriceReport.xlsx";
        link.click();
      } else {
        console.error("Ошибка при загрузке файла: " + xhr.status);
      }
    };
    xhr.send();
  });
});
