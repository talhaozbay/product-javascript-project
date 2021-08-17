$.ajax({
    type: "GET",
    url: "http://localhost:8080/product",
    dataType: "json",
    success: function (response) {
        console.log("success!!!!!")
    }
});
$.getJSON("http://localhost:8080/product", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push("<td>" + val + "</td>");
    });

    $("<tr/>", {
        html: items.join("")
    }).appendTo("tbody");
});