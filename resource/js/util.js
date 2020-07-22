
var scrollControl = function (){
    var $scollSection = $('.wrap'),
        $currentCount = 0,
        $text = $('.title-section .title'),
        $titleLength = $text.length;
    return {
        init : function(){
            this.srcoll();
            this.slide();
        },
        srcoll : function(){
            var timer;
            var _self = this;
            $scollSection.on('scroll touchmove mousewheel', function(e){
                _self.scrollEvent(e);
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        )},
        slide:function(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 80,
                centeredSlides: true,
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                  },
              });
        },
        scrollEvent : function(e){
            var wheelEvent = e.originalEvent.wheelDelta;
                wheelEvent === 120 ? $currentCount-- : $currentCount++;
                $text.eq($currentCount).addClass('active').siblings().removeClass('active');
                if($currentCount == $titleLength) $scollSection.off('scroll touchmove mousewheel');
        },
    }
}
var scroll = scrollControl();
scroll.init();


// $('.wrap').on('scroll touchmove mousewheel', function(e) {
//     var E = e.originalEvent;
//     if (E.detail) {
//         delta = E.detail
//         console.log(delta)
//     }else{
//         delta = E.wheelDelta;
//         console.log(delta)
//     };
//     e.preventDefault();
//     e.stopPropagation();
//     return false;
//  })



 