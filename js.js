/**
 * Created by едаё on 2017/5/25.
 */
$(function(){
    $(".menu>li>a").tap(
        function(){
            $(this).siblings("ul").toggle();
            return false
        }
    )
});
$(function() {
    $(".mu>li").tap(
        function () {
            var i = $(this).index();
            var a = -i * 6.4;
            q = i;
            $(".nu").css("transform", "translateX(" + a + "rem)");
            $(this).addClass("dian").siblings().removeClass()
        }
    );
});
$(function(){
    var swiper = new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
    });
});












