$(window).on('unload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function() {
    // console.log("ready!");

    setTimeout(function(){
        $("#title-custom").css("display", "block");
        $("#title-custom").animate({fontSize: "100px" }, 1000 );
    }, 250);
    

    // Intro Page Color Change
    var introColor = "black"

    // function introToWhite(){
    //   $(".navbar-dark .nav li a").removeClass("black");
    //   $("#header-custom").css("background-color", "#FFFFFF");
    //   $("#title-custom").css("color", "#050505");
    //   $("#title-custom").text('Bergini');
    //   $(".navbar-dark .nav li a").addClass("white");
    //   introColor = "white"
    //   alternateColor() 
    // }

    // function introToBlack(){
    //   $(".navbar-dark .nav li a").removeClass("white");
    //   $("#header-custom").css("background-color", "#050505");
    //   $("#title-custom").css("color", "#FFFFFF");
    //   $("#title-custom").text('Studio');
    //   $(".navbar-dark .nav li a").addClass("black");
    //   introColor = "black"
    //   alternateColor()
    // }

    function logoDisplay() {
      if($(".navbar-dark .nav li.page-scroll").hasClass("active")) {
        $("#menu-logo").addClass("display");
      } else {
        $("#menu-logo").removeClass("display");
      }
    }

    // function alternateColor(){
    //   console.log("running")
    //   if(introColor == "black" && !($("#nav-custom").hasClass("top-nav-collapse"))) {
    //     console.log("it's black")
    //     setTimeout(introToWhite, 2000);
    //   } else if(introColor == "white") {
    //     console.log("it's white")
    //     setTimeout(introToBlack, 2000);
    //   }
    // }

    // function checkHeader(){
    //   if($("#nav-custom").hasClass("top-nav-collapse")){
    //     console.log('hello');

    //     $("#nav-custom").css("background-color", "red");
    //   }
    // }


    // var test = $("#nav-custom")

    // function checkColor(){
    //   if($("#nav-custom").hasClass("top-nav-collapse")) {
    //     console.log("yes")
    //     // alternateColor(introColor)
    //     // $("#nav-custom").css("background-color", "red")
    //   } else {
    //     // $("#nav-custom").css("background-color", "yellow")
    //     console.log("no")
        
    //   }
    // }

    // setInterval(alternateColor, 100);
    // setInterval(checkHeader, 100);
    // $(window).scroll(checkHeader) 
    
    // $(window).scroll(checkHeader) 

    $(window).scroll(logoDisplay) 


});