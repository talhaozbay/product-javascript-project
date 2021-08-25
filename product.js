var items = [];
var itemIndex = 1;

function getProduct() {
    $.getJSON("http://localhost:8080/product", function (data) {
        $.each(data, function (key, val) {
            console.log(val.productId);
            items += "<tr id ='" + val.productId + "'" + "class = 'myTableTr'>";
            items += "<td id = 'productName'>" + val.name + "</td>";
            items += "<td id = 'productUnitPrice'>" + val.unitprice + "</td>";
            items += "<td id = 'productCode'>" + val.code + "</td>";
            items += "<td id = 'productActive'>" + val.active + "</td>";
            items += "<td>" + '<button class="button" onclick = "toDelete(' + val.productId + ')" style="background-color: rgb(204, 0, 0);"><span><i class="fas fa-trash-alt"></i> </span></button>' + '&nbsp;' + '&nbsp;' + '&nbsp;' + '<button class="button" onclick = "update(' + val.productId + ')" style="background-color: #54585D; "><span><i class="fas fa-pen"></i> </span></button>' + "</td>";
            itemIndex++;
            items += "</tr>";
        });
        $("#productTable").html(items);
        items = [];
        itemIndex = 1;
        console.log(data);
    })
}

function addProduct() {
    var postItems = {
        name: $('#name').val(),
        unitprice: $('#unitPrice').val(),
        code: $('#code').val(),
        active: $('#active').val()
    }
    console.log(postItems);
    $.ajax({
            url: "http://localhost:8080/product/",
            type: "POST",
            data: JSON.stringify(postItems),
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                deleteall();
                getProduct();
            }
        })
        .fail(function () {
            alert('error');
        })
    empty();
}

function toDelete(id) {
    $('#' + id).remove();
    $.ajax({
        url: "http://localhost:8080/product/" + id,
        type: "DELETE",
        data: id,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
        }
    })
    console.log("deleted : " + id);
}

function deleteall() {
    $(".myTableTr").remove();
}

function update(id) {
    writeUpdate(id);
}

function empty() {
    $('#name').val("");
    $('#unitPrice').val("");
    $('#code').val("");
    $('#active').val("");
}

function writeUpdate(id) {
    let productName = document.getElementById("myTable").rows.namedItem(id).cells.namedItem("productName").innerHTML;
    console.log("Name : " + productName);
    $('#name').val(productName);
    let productUnitPrice = document.getElementById("myTable").rows.namedItem(id).cells.namedItem("productUnitPrice").innerHTML;
    console.log("Unit Price : " + productUnitPrice);
    $('#unitPrice').val(productUnitPrice);
    let productCode = document.getElementById("myTable").rows.namedItem(id).cells.namedItem("productCode").innerHTML;
    console.log("Code : " + productCode);
    $('#code').val(productCode);
    let productActive = document.getElementById("myTable").rows.namedItem(id).cells.namedItem("productActive").innerHTML;
    console.log("Active : " + productActive);
    $('#active').val(productActive);
}

var name = $('#name').val();

getProduct();

// . class // # id
