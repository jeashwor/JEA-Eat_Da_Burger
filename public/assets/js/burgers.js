$(() => {
    $(".createBurger").on("submit", (event) => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log(newBurger.burger_name + " has been added.");
            location.reload();
        });
    });

    
})