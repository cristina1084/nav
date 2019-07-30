$(document).ready(function(){
    $("#nav1").click(function(){
        $("#h51,p").show();
        $("#hide,#show,#h61,#h62").hide();
        $("#h51").click(function(){
            $("p").css("color","blue");
        });
    });

    $("#nav2").click(function(){
        $("#h61,#h62").show();
        $("#hide,#show,#h51,p").hide();
        $("#h61").mouseup(function(){
           alert("Mouse up");
          });
        $("#h62").mousedown(function(){
            alert("Mouse up");
            });
        $("#h63").hover(function(){
            alert("Hover");
        }, function(){
            alert("Bye");
        });
    });

    $("#nav3").click(function(){
        $("#h51,#h61,#h62").hide();
        $("#hide,#show,p").show();
        $("#hide").click(function(){
            $("p").hide();
          });
          
          $("#show").click(function(){
            $("p").show();
          });
    });
});