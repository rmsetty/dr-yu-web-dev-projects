$(document).ready(function() {
    $("button").click(function() {
        // $("h1").css("color", "red");
        $("h1").addClass("big-title margin-50");
        $("button").text("You clicked me");
        $("h1").css({"color": "red", "font-size": "24px"});
        $("h1").html("This is <em>important</em>!");
        console.log($("h1").hasClass("big-title"));

        setTimeout(function(){
            $("h1").removeClass("big-title margin-50");
            $("button").text("Click Me!");
            $("h1").css("font-size", "");
            $("h1").html("Hello");
        }, 1000);
        console.log($("h1").hasClass("big-title"));
    });
});
