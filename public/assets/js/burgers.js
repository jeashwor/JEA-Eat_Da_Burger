$(() => {
    $("#addBurger").on("click", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log(newBurger.burger_name + " has been added.");
            location.reload();
        });
    });

    $(".eatBurger").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                devoured: true
            }
        }).then(function() {
            console.log("devoured burger #" + id);
            location.reload();
        });
    });

    $(".deleteBurger").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        console.log(id);

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            console.log("deleted burger #" + id);
            location.reload();
        });
    });
})