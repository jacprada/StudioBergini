$( document ).ready(function() {
    console.log("ready!");



    // Intro Page Color Change
    var introColor = "black"

    function introToWhite(){
      $(".navbar-dark .nav li a").removeClass("black");
      $("#header-custom").css("background-color", "#FFFFFF");
      $("#title-custom").css("color", "#050505");
      $("#title-custom").text('Bergini');
      $(".navbar-dark .nav li a").addClass("white");
      introColor = "white"
      alternateColor() 
    }

    function introToBlack(){
      $(".navbar-dark .nav li a").removeClass("white");
      $("#header-custom").css("background-color", "#050505");
      $("#title-custom").css("color", "#FFFFFF");
      $("#title-custom").text('Studio');
      $(".navbar-dark .nav li a").addClass("black");
      introColor = "black"
      alternateColor()
    }

    function alternateColor(){
      console.log("running")
      if(introColor == "black" && !($("#nav-custom").hasClass("top-nav-collapse"))) {
        console.log("it's black")
        setTimeout(introToWhite, 2000);
      } else if(introColor == "white") {
        console.log("it's white")
        setTimeout(introToBlack, 2000);
      }
    }

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

    setInterval(alternateColor, 100);

    


    
    // $(window).scroll(checkColor) 


});