/**
 * Created by Q on 2017/2/26.
 */
/* 头部功能 */

$(window).scroll(function() {
    var top = $(document).scrollTop(),
        bannerHeight=$('#banner').height(),
        headerHeight=$('.header').height();
    if(top+headerHeight>bannerHeight){
        $('.header').css('background','white');
        $('#logo').find('img').attr('src','images/logo2.png');
        $('nav').find('a').css('color','black');
        $('nav').on('mouseover','a',function(){
            $(this).css('color','#00dfb9')
        });
        $('nav').on('mouseout','a',function(){
            $(this).css('color','black')
        });
    }else{
        $('.header').css('background','none');
        $('#logo').find('img').attr('src','images/logo.png');
        $('nav').find('a').css('color','white');
        $('nav').on('mouseover','a',function(){
            $(this).css('color','#00dfb9')
        });
        $('nav').on('mouseout','a',function(){
            $(this).css('color','white')
        });
    }

});
