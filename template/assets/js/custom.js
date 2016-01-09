$( document ).ready(function() {
    console.log("ready!");


    // Intro Page Color Change
    var introColor = "black"

    function introToWhite(introColor){
      $("#header-custom").css("background-color", "#FFFFFF");
      $("#title-custom").css("color", "#050505");
      $("#title-custom").text('Bergini');
      var introColor = "white"
      alternateColor(introColor) 
    }

    function introToBlack(introColor){
      $("#header-custom").css("background-color", "#050505");
      $("#title-custom").css("color", "#FFFFFF");
      $("#title-custom").text('Studio');
      var introColor = "black"
      alternateColor(introColor)
    }

    function alternateColor(introColor){
      if(introColor == "black") {
        setTimeout(introToWhite, 2000);
      } else if(introColor == "white") {
        setTimeout(introToBlack, 2000);
      }
    }

    alternateColor(introColor)

});