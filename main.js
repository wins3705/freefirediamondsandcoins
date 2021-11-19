var PLAT;

function STARTUP() {

    var TD = new Date();

    $("#LU").text(("0" + TD.getDate()).slice(-2) + "/" + ("0" + (TD.getMonth() + 1)).slice(-2) + "/" + TD.getFullYear());

    $("#UO").text((TD.getHours() * 40) + Math.floor(Math.random() * 400));

    $(".LOGO").fadeIn(2000).css("display", "flex");

    $(".S1").fadeIn(2000).css("display", "flex");

}

$(function() {
    STARTUP();
});

function PLATFORM(xD) {
    PLAT = xD;
    $(".PL").not($("." + xD)).css("opacity", 0.4);
    $("." + xD).css("opacity", 1);
    $(".S2B").css("opacity", 1);
    $(".S2B").attr("disabled", false);
}

function S1() {
    $(".S1").fadeOut(1000, function() {
        $(".S2").fadeIn(1000).css("display", "flex");
    });
}

function S2() {
    if ($("#USER").val() == "") {
        alert("Type in your Free Fire username.")
    } else {
        $(".S2").fadeOut(1000, function() {
            $(".S3").fadeIn(1000).css("display", "flex")
        });
    }
}

var STRINGS_FINISH = [];

var FCHECK = 7;

function S3() {

    STRINGS_FINISH = []; //Making sure it's empty

    STRINGS_FINISH.push("connecting to <strong>Free Fire." + PLAT.toLowerCase() + "</strong> database...^1000 <br>");

    STRINGS_FINISH.push("looking for <strong>" + $("#USER").val() + "</strong> player...^1000 <br>");

    STRINGS_FINISH.push("editing <strong>Coins</strong>.VAL[]-> to <strong>" + $("#Coins option:selected").text() + "</strong>...^1000 <br>");

    STRINGS_FINISH.push("editing <strong>Diamonds</strong>.VAL[]-> to <strong>" + $("#Diamonds option:selected").text() + "</strong>...^1000 <br>");

    STRINGS_FINISH.push("applying changes...^1000 <br>");

    STRINGS_FINISH.push("disconnecting with database...^1000 <br>");
    
    STRINGS_FINISH.push("<strong class='text-red-500'>ERROR! human verification required to continue...</strong><br>");

    var F = 0;
    var FF = 0;

    var ADD = Math.round(100/STRINGS_FINISH.length);

    $(".S3").fadeOut(1000, function() {
        $(".S4").fadeIn(1000).css("display", "flex");

        if (FCHECK == 7) {
            
            FCHECK = 777;

            var TYPEDF = new Typed(".TYPED-F", {
                strings: [STRINGS_FINISH.join(" ")],
                startDelay: 0,
                typeSpeed: 30,
                backSpeed: 30,
                showCursor: false,
                onTypingResumed: function() {

                    $(".XD").scrollTop($(".XD")[0].scrollHeight);
                    
                    F+= 1;
                    FF+= ADD;
                    //console.log(F);
                    //console.log("progress: " + FF);
                    $("#PBAR-F").css("width", FF + "%");
                    $("#PC-F").text(FF + "%");
                },
                onComplete: function() {

                    $(".XD").scrollTop($(".XD")[0].scrollHeight);

                    $("#PBAR-F").css("width", "100%");

                    $("#PBAR-F").removeClass("bg-yellow-400").addClass("bg-red-500");
                    $("#PC-F").text("100%");
        
                    setTimeout(function() {
                        $(".S5").fadeOut(1000, function() {
                            $(".S6").fadeIn(1000);
                        })
                    }, 2000)

                }
              });

        } else {
            console.log("???")
        }

    });
}