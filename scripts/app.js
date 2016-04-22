/**
 * Created by darshit on 4/22/2016.
 */
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $(".right-header").toggle(900);
});
