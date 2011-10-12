$(document).ready(function() {
    $(".bingoSquare").click(function(e) {
        $(e.currentTarget).toggleClass("selected");
    }
    )
})