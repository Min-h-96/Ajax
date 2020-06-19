function fetchPage(name) {
  fetch(name).then(function (response) {
    response.text().then(function (text) {
      document.querySelector("article").innerHTML = text;
    });
  });
}

fetch("list").then(function (response) {
  response.text().then(function (text) {
    var items = text.split(",");
    var tags = "";
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      item = item.trim();
      var tag =
        '<li><a href="#!' +
        item +
        '" onclick="fetchPage(\'' +
        item +
        "')\">" +
        item +
        "</a></li>";
      tags = tags + tag;
    }
    document.querySelector("#list").innerHTML = tags;
  });
});
