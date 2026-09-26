/* ============================================================
   SLIDE.JS
   Trước đây file này viết lặp lại y hệt logic cho 3 cái slider
   (slide, slide2, slide3) - sửa 1 lỗi phải sửa 3 chỗ giống nhau.
   Giờ gộp lại thành 1 hàm createSlider() dùng chung, mỗi slider
   chỉ cần gọi hàm này với đúng id + danh sách ảnh của nó.
   Muốn thêm slider thứ 4 trong tương lai: chỉ cần thêm 1 dòng
   gọi createSlider() mới ở cuối file, không phải copy cả khối.
   ============================================================ */
 
function createSlider(imgId, imageList) {
    const slideEl = document.getElementById(imgId);
    if (!slideEl) return null; // Trang không có slider này thì bỏ qua, không lỗi
 
    let index = 0;
 
    function showImage() {
        slideEl.style.opacity = 0;
        setTimeout(function () {
            slideEl.src = imageList[index];
            slideEl.style.opacity = 1;
        }, 300);
    }
 
    function nextImage() {
        index++;
        if (index >= imageList.length) {
            index = 0;
        }
        showImage();
    }
 
    function prevImage() {
        index--;
        if (index < 0) {
            index = imageList.length - 1;
        }
        showImage();
    }
 
    /* Thông báo nhỏ khi ảnh không tải được (thường do mất mạng) */
    function showSlideError() {
        let notice = slideEl.parentElement.querySelector(".slide-offline-notice");
        if (!notice) {
            notice = document.createElement("p");
            notice.className = "slide-offline-notice";
            notice.textContent = "Không có mạng - ảnh chưa tải được";
            slideEl.parentElement.appendChild(notice);
        }
        notice.style.display = "block";
    }
    function hideSlideError() {
        const notice = slideEl.parentElement.querySelector(".slide-offline-notice");
        if (notice) notice.style.display = "none";
    }
    slideEl.addEventListener("error", showSlideError);
    slideEl.addEventListener("load", hideSlideError);
 
    /* Tự động chuyển ảnh mỗi 3 giây */
    setInterval(nextImage, 3000);
 
    // Trả về các hàm điều khiển để gán vào nút bấm bên ngoài (onclick trong HTML)
    return { next: nextImage, prev: prevImage, reload: showImage };
}
 
/* ==================== KHỞI TẠO TỪNG SLIDER ==================== */
 
const slider1 = createSlider("slide", [
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
]);
 
const slider2 = createSlider("slide2", [
    "image/hino5001.jpg",
    "image/hino5002.jpg",
    "image/hino5003.jpg",
    "image/hino5004.jpg",
    "image/hino5005.jpg"
]);
 
const slider3 = createSlider("slide3", [
    "image/DauxeV5Moi.jpg",
    "image/DauxeV5Moi2.jpg",
    "image/DauxeV5Moi3.jpg",
    "image/DauxeV5Moi4.jpg"
]);
 
/* Các nút bấm trong HTML đang gọi tên hàm nextImage()/prevImage(),
   nextImage2()/prevImage2(), nextImage3()/prevImage3() - giữ nguyên
   tên này để không phải sửa lại HTML, chỉ nối chúng sang slider tương ứng. */
function nextImage() { if (slider1) slider1.next(); }
function prevImage() { if (slider1) slider1.prev(); }
function nextImage2() { if (slider2) slider2.next(); }
function prevImage2() { if (slider2) slider2.prev(); }
function nextImage3() { if (slider3) slider3.next(); }
function prevImage3() { if (slider3) slider3.prev(); }
 
/* Có mạng trở lại: thử tải lại ảnh hiện tại của cả 3 slider nếu trước đó bị lỗi do mất mạng */
window.addEventListener("online", function () {
    if (slider1) slider1.reload();
    if (slider2) slider2.reload();
    if (slider3) slider3.reload();
});
 
/* ==================== ÂM THANH KHI BẤM CHUYỂN TRANG ==================== */
function clickSound() {
    const sound = new Audio("sound/ClickNext.mp3");
    sound.play();
}