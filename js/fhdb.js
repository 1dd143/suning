var fhdb = document.querySelector(".fhdb");
var sn_head = document.querySelector(".sn_head");
//添加页面滚动事件
window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 1000) {
        fhdb.style.display = "flex";
    } else {
        fhdb.style.display = "none";
    }
});
//图标添加点击事件
fhdb.addEventListener("click", function() {
    window.scroll(0, 0);
});