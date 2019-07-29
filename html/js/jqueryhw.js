$(document).ready(function(){
    $("#nav1").click(function(){
        $("#hide").hide();
        $("#show").hide();
        $("#h51").click(function(){
            $("p").css("color","blue");
        });
    });

    $("#nav2").click(function(){
        $("#h51").hide();
        $("#hide").click(function(){
            $("p").hide();
          });
          
          $("#show").click(function(){
            $("p").show();
          });
    })
});