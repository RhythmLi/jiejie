/**
 * Created by Q on 2017/2/26.
 */


$(function(){
   //var $wedo = $("#wedo");
    var $thing = $("#wedo .wedo-item ul li a");

    $thing.mouseover(function() {
        $(this).css("background", "#00dfb9").parent().siblings("li").find("a").css("background", "white");
        $(this).find("div").css("border","none");
        $(this).find("p").css("color","white");
        $(this).find("span").css("display","block");
        var $num = $(this).find("img").attr("alt");
        $(this).find("img").attr("src","./images/dodo"+$num+".png");
    });

    $thing.mouseout(function(){
        $(this).find("div").css("border","2px solid #d2d2d2");
        $(this).css("background", "white");
        $(this).find("p").css("color","rgba(0,0,0,1)");
        $(this).find("span").css("display","none");

        var $num = $(this).find("img").attr("alt");
        $(this).find("img").attr("src","./images/do"+$num+".png");
    });



});