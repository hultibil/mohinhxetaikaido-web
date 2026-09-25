const images = [    /*Hieu ung slide 1*/
    "image/khungxe.jpg",
    "image/khungxe2.jpg",
    "image/khungxe3.jpg",
    "image/khungxe4.jpg",
    "image/khungxe5.jpg",
    "image/khungxe6.jpg",
    "image/khungxe7.jpg",
    "image/khungxe8.jpg",
    "image/khungxe9.jpg",
    "image/matxe10.jpg",
    "image/matxe11.jpg"
];
let index = 0;
const slide = document.getElementById("slide");
function showImage() {
    slide.style.opacity = 0;
    setTimeout(function () {
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 300);
}
/* nút phải */
function nextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    showImage();
}
/* nút trái */
function prevImage() {
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    showImage();
}
/* tự chạy */
setInterval(function () {
    nextImage();
}, 3000);

/*hieu ung slide 2*/

const images2 = [
    "image/hino5001.jpg",
    "image/hino5002.jpg",
    "image/hino5003.jpg",
    "image/hino5004.jpg",
    "image/hino5005.jpg"
];
let index2 = 0;
const slide2 = document.getElementById("slide2");
function showImage2() {
    slide2.style.opacity = 0;
    setTimeout(function () {
        slide2.src = images2[index2];
        slide2.style.opacity = 1;
    }, 300);
}
/* nút phải */
function nextImage2() {
    index2++;
    if (index2 >= images2.length) {
        index2 = 0;
    }
    showImage2();
}
/* nút trái */
function prevImage2() {

    index2--;
    if (index2 < 0) {
        index2 = images2.length - 1;
    }
    showImage2();
}
/* tự chạy */
setInterval(function () {
    nextImage2();
}, 3000);

/*hieu ung slide 3*/

const images3 = [
    "image/DauxeV5Moi.jpg",
    "image/DauxeV5Moi2.jpg",
    "image/DauxeV5Moi3.jpg",
    "image/DauxeV5Moi4.jpg"
];
let index3 = 0;
const slide3 = document.getElementById("slide3");
function showImage3() {
    slide3.style.opacity = 0;
    setTimeout(function () {
        slide3.src = images3[index3];
        slide3.style.opacity = 1;
    }, 300);
}
/* nút phải */
function nextImage3() {
    index3++;
    if (index3 >= images3.length) {
        index3 = 0;
    }
    showImage3();
}
/* nút trái */
function prevImage3() {

    index3--;
    if (index3 < 0) {
        index3 = images3.length - 1;
    }
    showImage3();
}
/* tự chạy */
setInterval(function () {
    nextImage3();
}, 3000);

/*Hiệu ứng click vào nút để chuyển đến trang khác*/
function clickSound() {
    const sound = new Audio("sound/ClickNext.mp3");
    sound.play();
}