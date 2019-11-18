$(function () {
    //Eat an existing burger:
    $(".eatBurger").on('click', function () {
        let id = $(this).data('id');
        let eaten = {
            eaten: true
        };

        $.ajax("/api/burgs/" + id, {
            type: "PUT",
            data: eaten
        }).then(function () {
            location.reload();
        });
    });
    //Add a new burger:
    $("#addBurg").on('click', function (event) {
        event.preventDefault();
        let newBurger = {
            bName: $("#bn").val().trim(),
            dev: 0
        };  
        $.ajax("/api/burgs", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });
});

