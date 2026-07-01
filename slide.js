const images = [
    "khungxe.jpg",
    "khungxe2.jpg",
    "khungxe3.jpg",
    "khungxe4.jpg",
    "khungxe5.jpg",
    "khungxe6.jpg",
    "khungxe7.jpg",
    "khungxe8.jpg",
    "khungxe9.jpg",
    "matxe10.jpg",
    "matxe11.jpg"
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


const images2 = [
    "hino5001.jpg",
    "hino5002.jpg",
    "hino5003.jpg",
    "hino5004.jpg",
    "hino5005.jpg"
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