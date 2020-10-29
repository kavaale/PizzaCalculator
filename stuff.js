$(document).ready(function () {

    $("#clickme").click(calcPizza);

    function calcPizza() {
        var toppings = $("#topping").val();
        var coworkers = $("#coworkers").val();
        var pizza = (15 + 1.25 * toppings) / coworkers;
        $("#pizza").text(pizza);
    };

});