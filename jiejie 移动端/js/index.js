/**
 * Created by Administrator on 2017/3/10.
 */
if(window.attachEvent) {
    window.attachEvent("onload",  downPing()); //ie的方法
} else {
    window.addEventListener("load",  downPing());//w3c的方法
}
//点击向下加载一屏
function downPing(){
    var timer = null;
    var bannerBox = document.querySelector(".swiper-container");
    var height = bannerBox.offsetHeight;
    var upBox = document.querySelector(".down");
    upBox.onclick=function(){
        clearInterval(timer);
        timer=setInterval(function(){
            var leader = window.pageYOffset;
            var step = (height - leader)/10;
            step = step > 0 ? Math.ceil(step): Math.floor(step);
            leader = leader + step;
            window.scrollTo(0, leader);
            if(leader === height){
                clearInterval(timer);
            }
        },20);
    }
}

//点击加载更多
(function(){
    var showMoreNChildren = function ($children, n){
        var $hiddenChildren = $children.filter(":hidden");
        var cnt = $hiddenChildren.length;
        for (var i = 0 ; i < n/2 && i < cnt; i++){
            $hiddenChildren.eq(i).show();
        }
        return cnt - n;
    };
    $.showMore = function(selector){
        if(selector == undefined){selector = ".showMoreNChildren"}
        $(selector).each(function(){
            var pagesize = $(this).attr("pagesize")||4;
            var $children = $(this).children();
            if($children.length>pagesize){
                for(var i = pagesize; i < $children.length; i++){
                    $children.eq(i).hide();
                }
                $("<div class='showMorehandle'>更多案例</div>").insertAfter($(this)).click(function(){
                    if(showMoreNChildren($children, pagesize)<=-2){
                        $(this).hide();
                    }
                });
            }
        });
    }
})();
