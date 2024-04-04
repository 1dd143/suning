var yc = document.querySelector('.yc');
window.onscroll = function() {
    isGoTop();
}

function isGoTop() {
    var s_top = document.documentElement.scrollTop;
    if (s_top > 600) {
        yc.style.display = "flex";
    } else {
        yc.style.display = "none";
    }

}