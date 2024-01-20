var MainImg = document.getElementById('MainImg');
var small_Img = document.getElementsByClassName('small-img');

for (var i = 0; i < small_Img.length; i++) {
    small_Img[i].onclick = function () {
        MainImg.src = this.src;
    }
}