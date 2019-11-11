$(function(){
    $(".eatBurger").on('click', function(){
        console.log("Clicked " + $(this).data('id'));
        let id = $(this).data('id');
        let eaten =  {
            dev: true
        };

        $.ajax("/api/burgs/" + id, {
            type: "PUT",
            data: eaten
        }).then(function(){
            console.log("Devoured?");
            location.reload();
        });
    });

});

