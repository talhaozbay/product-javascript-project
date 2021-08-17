$.ajax({
    type: "GET",
    url: "http://localhost:8080/product",
    dataType: "json",
    success: function (response) {
        console.log("success!!!")
    }
});
