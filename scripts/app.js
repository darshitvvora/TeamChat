/**
 * Created by darshit on 4/22/2016.
 */
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $(".right-header").toggle(900);
});


$('#myModal').on('shown.bs.modal', function () {
    // do cool stuff here...
    $(".progress-bar").animate({
        width: "70%"
    }, 1000 );
});

//Populate users in side windows
