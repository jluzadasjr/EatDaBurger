$(function () {
    console.log("hello")
    $("#burger-button").on("click", function (event) {
        event.preventDefault()
        console.log("click")

        var newBurger = {
            burger_name: $("#burger-input")
                .val()
                .trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $("#eatbutton").on("click", function (event) {
        event.preventDefault();
console.log("test");
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger Devoured")
            location.reload();
        })

    });
    $("#trashbutton").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE", 
            url: "/api/burgers/" + id
        }).then(location.reload()); 
    });
});