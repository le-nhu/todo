$(document).ready(function(){
    $("span").hide();

    $("#add").click(function(){
        $("#new").toggle();
    });

    $("#new").keypress(function(event){
        if(event.which === 13){
            $("ul").append("<li>" + '<span><i class="fa fa-trash"></i></span>' + $("#new").val() + "</li>");
            $("span").hide();
        }
    });

    $("ul").on("click", "li", function(){
        $(this).toggleClass("done");
    });

    $("ul").on("mouseenter", "li", function(){
        $(this).find("span").show();    
    }) 

    $("ul").on("mouseleave", "li", function(){
        $(this).find("span").hide();    
    }) 

    $("ul").on("click", "span", function(){
        $(this).closest('li').remove();
    });

 }); 