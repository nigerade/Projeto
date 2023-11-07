var MainImg = document.getElementById('MainImg');
var small_Img = document.getElementsByClassName('small-img');

small_Img[0].onclick = function() {
    MainImg.src = small_Img[0].scr;
}

small_Img[1].onclick = function() {
    MainImg.src = small_Img[1].scr;
}

small_Img[2].onclick = function() {
    MainImg.src = small_Img[2].scr;
}

small_Img[3].onclick = function() {
    MainImg.src = small_Img[3].scr;
}
