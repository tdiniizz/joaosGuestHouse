$(document).ready(function() {

    $(".burger-icon").on("click", function() {

        if ($(".list").hasClass("mobile-hide")) {

            $(".list").removeClass("mobile-hide");
            $(".list").addClass("mobile-show");
        } else {

            $(".list").addClass("mobile-hide");
            $(".list").removeClass("mobile-show");
        }
    });
});

$(document).ready(function() {
    $(".list-item").on("click", function() {
        alert("You´ve clicked home");
        console.log("yeah yeah");
    });
});