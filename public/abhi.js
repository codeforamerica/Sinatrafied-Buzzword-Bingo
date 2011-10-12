$(document).ready(function() {
    $("td").click(function(e) {
        $(e.currentTarget).toggleClass("selected");
    }
    )
})