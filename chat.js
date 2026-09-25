function sendMessage() {

    const input = document.getElementById("question");

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    askQuestion(question);

    input.value = "";
}


function askQuestion(question) {

    const chat = document.getElementById("chat");

    // Hiện câu hỏi của người dùng
    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.textContent = question;

    chat.appendChild(userMessage);


    // Chuyển câu hỏi thành chữ thường
    const q = question.toLowerCase();


    let answer = "";



    // =========================
    // THÔNG TIN CHUNG VỀ KAIDO
    // =========================

    if (
        q.includes("kaido là gì") ||
        q.includes("kaido la gi") ||
        q.includes("kaido")
    ) {

        answer =
            "KAIDO là thương hiệu mini được đặt tên bởi Quốc Cường, Nhật Tiến nghĩ ra và thành lập vào tháng 6 năm 2025. Chuyên chế tạo các mẫu xe RC và các dự án điện tử với chi phí hợp lý. " +
            "Website hiện tại giới thiệu lịch sử của các phiên bản mẫu xe và dự án của CLB từ trước đến nay nhưng hiện tại chưa có dự án nào khác ở mục Sản phẩm thủ công.";

    }

    // =========================
    // XE CÔNG NÔNG
    // =========================

    else if (
        q.includes("công nông") ||
        q.includes("cong nong")
    ) {

        answer =
            "Xe công nông là dự án xe đầu tiên của KAIDO. " +
            "Xe có kết cấu đơn giản, dễ sửa chữa và có khả năng chở hàng. " +
            "Theo thông tin ở mục Trang chủ, xe có trọng tải kéo lên tới 5 kg " +
            "và sử dụng pin sạc dung lượng 5000 mAh."+
            "Nhưng tại giai đoạn đó chỉ có công tắc và mạch sạc đơn giãn, không có điều khiển từ xa.";

    }


    // =========================
    // XE CAMERA
    // =========================

    else if (
        q.includes("camera")
    ) {

        answer =
            "Xe camera là một loại xe khá đặc biệt của KAIDO. " +
            "Xe có camera ở phía trước (được tận dụng camera an ninh của Ezviz chạy nguồn 5v) để quan sát khu vực xung quanh và camera này có mắt hồng ngoại nên có thể xem trong môi trường tối. " +
            "Tuy nhiên, Xe này lại có 2 kết nối gồm: Wi-fi và Sóng 2.4Ghz và 2 chức năng riêng biệt. Nên khi dùng nó, bạn phải cầm 1 cái điều khiển riêng và một cái điện thoại để xem màn hình do camera ghi lại. " +
            "Với lại chỉ điều khiển được lên xuống nên về khoảng cơ động không được tốt.";

    }


    // =========================
    // V5
    // Đặt trước V1 để tránh nhầm
    // =========================

    else if (
        q.includes("v5") ||
        q.includes("v 5")
    ) {

        answer =
            "Xe tải V5 là phiên bản xe tải mới nhất của thương hiệu Kaido, đã được giới thiệu trước trên nền tảng Tik Tok của chính chủ vào ngày 17/08/2026 sau đó vào tháng 9/2026 mới được đăng trên website Kaido." +
            "Có ngoại hình dựa theo Chenglong H7. " +
            "Xe được sử dụng ắc quy 12V và động cơ giảm tốc 12V loại 775 được cấp điện bởi ESC480A cho hiệu suất cực tốt. Loại động cơ quốc dân vừa mạnh vừa bền cho những xe RC. Xe có thể kéo trọng tải lên tới 7 kg và được trang bị hệ thống điều khiển 2.4 GHz nhiều chức năng như bẻ lái dễ dàng nhờ hệ thống servo nhiều bước, có thể điều tốc động cơ như xe ga và lùi. Khoảng cách lên tới 50m. " +
            "Đây là phiên bản xe tải mạnh mẽ nhất của KAIDO.";

    }


    // =========================
    // V4
    // =========================

    else if (
        q.includes("v4") ||
        q.includes("v 4") ||
        q.includes("hino") ||
        q.includes("xe v4")
    ) {

        answer =
            "Xe tải V4 có ngoại hình Hino 500 và được giới thiệu là phiên bản " +
            "thành công nhất của Kaido. Xe sử dụng pin 2S thay vì 1s, có thể kéo trọng tải " +
            "lên tới 6 kg với động cơ 180. Có hệ thống nhíp được căn chỉnh và nhờ sự lắp đặt dễ dàng nên khoảng độ nhún đạt mức khá. Phần bẻ lái cực chắc chắn với động cơ trang bị bánh răng rất chắc chắn nên có thể bẻ với trọng lượng lớn rất ổn. Xe có sử dụng loa Bluetooth lắp ở bên trong mục đích giả dạng còi và hệ thống điều khiển 2.4 GHz rất cơ bản gồm 2 kênh, một kênh tiến lùi và một kênh bẻ lái."+
            "Nhược điểm tiếp theo là vỏ bằng carton do hướng về tiết kiệm chi phí và tái chế môi trường nên khi nước và lửa tiếp xúc có thể sẽ hư hại phần vỏ ngoài nghiêm trọng. Bạn có thể thiết kế phần vỏ này cho cứng cáp hơn.";

    }


    // =========================
    // V3
    // =========================

    else if (
        q.includes("v3") ||
        q.includes("v 3")
    ) {

        answer =
            "Xe tải V3 là một loại xe thay vì chỉ chạy thì có thể chở hàng rất ổn tầm 5 kg chỉ với động cơ 130 giảm tốc trang bị bánh răng kim loại." +
            "Pin 1s, dung lượng 4000mah cho ra thời gian chơi cực lâu với một chiếc xe dùng mô tơ ăn ít điện nhưng nhược điểm là sạc vào chậm và dùng cổng micro USB" +
            "Xe được thiết kế đơn giản để dễ sửa chữa. Ngoại hình vừa phải có thể đem đi một phần."+
            "Nhưng nhược điểm là vỏ bằng carton do hướng về tiết kiệm chi phí và tái chế môi trường nên khi nước và lửa tiếp xúc có thể sẽ hư hại phần vỏ ngoài nghiêm trọng. Bạn có thể thiết kế phần vỏ này cho cứng cáp hơn.";

    }


    // =========================
    // V2
    // =========================

    else if (
        q.includes("v2") ||
        q.includes("v 2") ||
        q.includes("đầu kéo") ||
        q.includes("dau keo")
    ) {

        answer =
            "Xe tải V2 là xe có cấu hình cơ bản đầy đủ nhất với xe RC nhờ bánh xe chắc chắn hơn và ngoại hình được nâng cấp so với bản đầu." +
            "Xe có rơ-moóc gắn phía sau với khớp nối được làm thủ công rất chắc chắn. " +
            "Phiên bản xe này có khả năng chở hàng đạt mức trung bình tới cao dù chỉ sử dụng động cơ 130 bình thường không thông qua giảm tốc. Nhờ rơ móc được thiết kế chắc chắn nên cực kỳ bền lâu."+
            "Nhược điểm là pin chỉ có 800Mah cho ra thời lượng sử dụng thấp và sạc rất chậm đạt mức thấp.";

    }


    // =========================
    // V1
    // =========================

    else if (
        q.includes("v1") ||
        q.includes("v 1")
    ) {

        answer =
            "Xe tải V1 là mẫu xe tải đầu tiên có điều khiển từ xa với sóng 2.4Ghz đầu tiên của KAIDO. " +
            "Xe có thể điều khiển tiến, lùi, trái và phải. " +
            "Đây là nền móng để phát triển các mẫu xe sau này. " +
            "Ngoại hình được làm thành xe tải và nâng cấp thêm thùng đỏ nhưng bánh xe phải tự chế. " +
            "Pin chỉ 500mah, sạc chậm vì số lượng pin không có nhiều vào thời điểm đó nên chỉ sử dụng pin chất lượng kém để có thể thử vận hành.";

    }


    // =========================
    // XE ĐỊA HÌNH
    // =========================

    else if (
        q.includes("địa hình") ||
        q.includes("dia hinh")
    ) {

        answer =
            "Xe địa hình được thiết kế để hoạt động trên nhiều địa hình khó khăn, " +
            "với gầm cao và bánh xe lớn. Ngoại hình được làm bằng gỗ phủ ẩm và mạch điện được phủ ẩm đầy đủ nên hoạt động trên nhiều điều kiện rất tốt. Xe sử dụng motor 180 giảm tốc quay cực nhanh mô men rất lớn, " +
            "Mạch điều khiển 4 kênh và driver L298N chạy ở điện áp 2s từ pin. Và pin có thể dễ dàng thay thế với 2 viên. Đồng thời có đèn trắng đằng trước dùng phát sáng như trên xe thật.";

    }


    // =========================
    // DANH SÁCH XE
    // =========================

    else if (
        q.includes("những xe nào") ||
        q.includes("co nhung xe nao") ||
        q.includes("có những xe nào") ||
        q.includes("danh sách xe") ||
        q.includes("danh sach xe") ||
        q.includes("có những phiên bản xe nào") ||
        q.includes("có những phiên bản xe nào") ||
        q.includes("co nhung phien ban xe nao")
    ) {

        answer =
            "Website KAIDO hiện đã giới thiệu trên mục Trang chủ gồm: xe công nông, xe camera, " +
            "xe tải V1, xe tải đầu kéo V2, xe tải V3, xe tải V4 Hino 500, " +
            "xe địa hình và xe tải V5. Nếu bạn có câu hỏi về sản phẩm khác thì hiện tại là chưa có sản phẩm nào được giới thiệu từ Kaido.";

    }


    /*Chào hỏi cơ bản*/
    else if (
        q.includes("xin chào") ||
        q.includes("xin chao") ||
        q.includes("chào bạn") ||
        q.includes("chao ban") ||
        q.includes("hi") ||
        q.includes("hello") ||
        q.includes("chào") ||
        q.includes("chao") ||
        q.includes("chào buổi sáng") ||
        q.includes("chao buoi sang") ||
        q.includes("chào buổi trưa") ||
        q.includes("chao buoi trua") ||
        q.includes("chào buổi chiều") ||
        q.includes("chao buoi chieu") ||
        q.includes("chào buổi tối") ||
        q.includes("chao buoi toi")
    ) {
        answer =
        "Xin chào bạn, mình có thể giúp gì cho bạn"+
        ". Mình có thể giúp bạn điều gì"
    }

    else if (
        q.includes("bai") ||
        q.includes("bye") ||
        q.includes("tạm biệt") ||
        q.includes("bai nha") ||
        q.includes("cáo từ") ||
        q.includes("tam biet") ||
        q.includes("tạm biệt bạn") ||
        q.includes("tam biet ban")
    ) {
        answer =
        "Tạm biệt bạn! Chúc bạn một ngày tốt lành"
    }

    else if (
        q.includes("bạn giúp mình những gì?") ||
        q.includes("ban co the giup duoc gi") ||
        q.includes("ban giup duoc gi?") ||
        q.includes("bạn giúp được gì") ||
        q.includes("giúp được gì") ||
        q.includes("giup duoc gi") ||
        q.includes("giup cai gì") ||
        q.includes("giúp cái gì") ||
        q.includes("giúp được cái gì") ||
        q.includes("giup duoc cai gi")
    ) {
        answer =
        "Mình có thể giúp bạn biết thông tin về thương hiệu Kaido và sản phẩm khác của Kaido."
    }

    else if (
        q.includes("gay") ||
        q.includes("mày gay") ||
        q.includes("m gay")
    ) {
        answer =
        "Bạn đừng nói mình thế, mình thằng tấp như cây thước 30cm."
    }

    // KHÔNG BIẾT
    // =========================

    else {

        answer =
            "Mình xin lỗi vì mình không hiểu lời bạn nhắn mà bạn đã nhập và mình không tìm thấy thông tin này trong dữ liệu KAIDO." +
            "Bạn có thể thử hỏi về xe V1, V2, V3, V4, V5, xe camera, " +
            "xe công nông hoặc xe địa hình nhé! Mình có thể mình sẽ giúp ích được cho bạn.";
    }


    // =========================
    // HIỆN CÂU TRẢ LỜI
    // =========================

    const aiMessage = document.createElement("div");

    aiMessage.className = "ai-message";

    aiMessage.innerHTML =
        "<b>KAIDO AI</b><p>" + answer + "</p>";

    chat.appendChild(aiMessage);


    // Tự cuộn xuống cuối
    chat.scrollTop = chat.scrollHeight;
}


function showQuestions() {

    const questions = document.getElementById("questions");

    if (questions.style.display === "flex") {

        questions.style.display = "none";

    } else {

        questions.style.display = "flex";

    }
}


function clearChat() {

    const chat = document.getElementById("chat");

    chat.innerHTML =
        `
        <div class="ai-message">
            <b>KAIDO AI</b>
            <p>Đã xóa lịch sử chat! Bạn có thể tiếp tục trò chuyện bằng cách nhấn vào thanh chat hoặc nhấn vào nút câu hỏi đề xuất.</p>
        </div>
        `;

}