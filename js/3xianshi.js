var xrzx = document.querySelector(".xrzx");
var hui = document.querySelector(".hui");
var djdj = document.querySelector(".djdj");
window.onload = function() {
    var displayAdevert = setTimeout(function() {
        xrzx.style.display = 'flex';
        hui.style.display = 'flex';
    }, 3000)
    djdj.onclick = function() {
        xrzx.style.display = 'none';
        hui.style.display = 'none';
    }
}