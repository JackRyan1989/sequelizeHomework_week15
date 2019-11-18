$(function(){
    $("#addBurg").on('click', function (event) {
        event.preventDefault();
        let newCustomer = {
            cName: $("#cn").val().trim()
            };  
        $.ajax("/api/cust", {
            type: "POST",
            data: newCustomer
        }).then(function () {
            console.log("created new customer");
            location.reload();
        });
    });    
});