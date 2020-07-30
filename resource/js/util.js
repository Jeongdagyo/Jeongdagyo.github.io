
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
        },
        slide:function(){
            var total = $('.pagination-wrap .total-count').text('0'+$('.swiper-slide').length),
                current = $('.pagination-wrap .current-count'),
                _self = this;
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 80,
                centeredSlides: true,
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'progressbar',
                },
                on:{
                    slideChangeTransitionEnd : function(index){
                        currentTit = $('.pagination-wrap .current-tit').text($('.swiper-slide-active .tit').text());
                        current.text('0'+(index.activeIndex + 1));
                    }
                }
              });
              var currentTit = $('.pagination-wrap .current-tit').text($('.swiper-slide-active .tit').text());
        },
    }
}
var scroll = scrollControl();
scroll.init();



 