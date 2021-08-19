let productList=[];

function getProduct() {
$.getJSON("http://localhost:8080/product", function (data) {
    
    productList = data;
    console.log(typeof(productList));
    var items = "";
    console.log(data)
    $.each(data, function (key, val) {
        items += "<tr>";
        items += "<td>" + val.name + "</td>";
        items += "<td>" + val.unitprice + "</td>";
        items += "<td>" + val.code + "</td>";
        items += "<td>" + val.active + "</td>";
        items += "</tr>";

    });
    $("#productTable").html(items);
})}


getProduct();

// . class // # id
