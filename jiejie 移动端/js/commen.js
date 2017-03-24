
$(window).scroll(function() {
    var top = $(document).scrollTop(),
        bannerHeight=$('.swiper-container').height(),
        headerHeight=$('.header').height();
    if(top+headerHeight>bannerHeight){
        $('.header').css('background','rgba(0,0,0,0.8)');

    }else{
        $('.header').css('background','rgba(0,0,0,0)');

    }
});


//拨打客服电话
$(function(){
    $('.phone').click(function(){
        if($('.phoneBox').attr("class")=="phoneBox"){
            $('.phoneBox').addClass("avtive").css({'display':'block','z-index':99}).fadeIn("slow");
            $('.phone img').attr('src','images/phoneHover.png');
        }else{
            $('.phoneBox').removeClass().addClass('phoneBox').css({'display':'none','z-index':-1}).fadeOut("fast");
            $('.phone img').attr('src','images/phone.png');
        }
        $('.directory').removeClass().addClass('directory');
        $('.dirBox').css({'display':'none','z-index':-1});
        $('.directory img').attr('src','images/directory.png');
    });
    $('.cancel').click(function(){
        $('.phoneBox').removeClass().addClass('phoneBox').css({'display':'none','z-index':-1}).fadeOut("fast");
        $('.phone img').attr('src','images/phone.png');
    });

    //汉堡菜单
    $('.directory').click(function(){
        if($(this).attr("class")=="directory"){
            $(this).addClass("avtive");
            $('.directory img').attr('src','images/directoryHover.png');
            $('.dirBox').css({'display':'block','z-index':999}).fadeIn("slow");
            $('.phoneBox').css('z-index',-1);

        }else{
            $(this).removeClass().addClass('directory');
            $('.directory img').attr('src','images/directory.png');
            $('.dirBox').css({'display':'none','z-index':-1}).fadeOut("fast");
            $('.phoneBox').css('z-index',1999);
        }

    });
    $('.dirList').on('click','li',function(){
        $('.directory').removeClass().addClass('directory');
        $('.directory img').attr('src','images/directory.png');
        $('.phoneBox').css('z-index',999);
        $('.dirBox').css({'display':'none','z-index':-1});
    });
    $('.dirList').on('mouseover','li',function(){
        $(this).find('a').css('color','#00DFB9');
        $(this).siblings('li').find('a').css('color','#fff');
    })

});

