var sn_head = document.querySelector(".sn_head");
var bbb = document.querySelector('.bbb');
var bbbimg = bbb.querySelector('img');
var bbbspan = bbb.querySelector('span');
window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 1000) {
        bbbimg.src = "./img/栏/souye.png";
        bbbspan.innerHTML = "首页";
    } else {
        bbbimg.src = "./img/栏/cnxh.png";
        bbbspan.innerHTML = "猜你喜欢";
    }
});
// window.onscroll = function() {
//     isGoTop();
// }

// function isGoTop() {
//     var s_top = document.documentElement.scrollTop;
//     if (s_top > 1000) {
//         bbbimg.src = "./img/栏/souye.png";
//         bbbspan.innerHTML = "首页";
//     } else {
//         bbbimg.src = "./img/栏/cnxh.png";
//         bbbspan.innerHTML = "猜你喜欢";
//     }

// }