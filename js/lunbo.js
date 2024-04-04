var mySwiper = new Swiper('.lun_swiper', {

    loop: true, // 循环模式选项
    autoplay: {
        delay: 2500,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    allowTouchMove: false,

    // 如果需要分页器
    pagination: {
        el: '.pop-pagination',
    },

})