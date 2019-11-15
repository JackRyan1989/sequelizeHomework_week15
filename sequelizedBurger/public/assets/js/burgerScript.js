$(function () {
    $(".eatBurger").on('click', function () {
        let id = $(this).data('id');
        let eaten = {
            dev: true
        };

        $.ajax("/api/burgs/" + id, {
            type: "PUT",
            data: eaten
        }).then(function () {
            location.reload();
        });
    });

    $("#addBurg").on('click', function (event) {
        event.preventDefault();
        let newBurger = {
            bName: $("#bn").val().trim(),
            dev: 0
        };
        $.ajax("/api", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });

});

