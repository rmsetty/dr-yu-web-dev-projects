$(document).ready(function () {
    $("button").click(function () {
        // $("h1").css("color", "red");
        $("h1").addClass("big-title margin-50");
        $("button").text("You clicked me");
        $("h1").css("font-size", "24px");
        $("h1").html("This is <em>important</em>!");
        console.log($("h1").hasClass("big-title"));

        setTimeout(function () {
            $("h1").removeClass("big-title margin-50");
            $("button").text("Click Me!");
            $("h1").css("font-size", "");
            $("h1").css("color", "");
            $("h1").html("Hello");
        }, 1000);
        console.log($("h1").hasClass("big-title"));
    });

    $(document).keydown(function (event) {
        var selectedKey = event.key.toLowerCase();

        switch (selectedKey) {
            case 'a':
                $("h1").text("First button was pressed");
                break;
            case 's':
                $("h1").css("color", "blue");
                break;
            case 'd':
                $("h1").css("color", "green");
                break;
            case 'f':
                $("h1").css("font-size", "100px");
                break;
            case ' ':
                $("h1").css("font-size", "5px");
                break;
            case 'm':
                $("h1").remove();
                setTimeout(function () {
                    $("h1").css("font-size", "").html("Hello").css("color", "black");
                    $("button").eq(0).before("<h1>Hello</h1>");
                }, 1000);
                break;
            default:
                $("h1").text("Key does not exist here");
        }

        setTimeout(function () {
            $("h1").css("font-size", "").html("Hello").css("color", "black");
        }, 1000);
    });

});

