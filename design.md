# Thiết kế & Nâng cấp Website Ziness Production (SPA Architecture)

## 1. Mục tiêu (Goals)
- Chuyển đổi từ mô hình Single-Page Scroll hiện tại sang mô hình **Single-Page Application (SPA) với các Tabs/Views riêng biệt**.
- Nâng cấp trải nghiệm người dùng với các hiệu ứng Animation mượt mà khi chuyển trang và khi cuộn (Scroll Reveal).
- Thiết kế hiện đại, bắt trend, tối ưu cho Media và SEO.
- Tích hợp CTA, Zalo/Messenger, và Form báo giá rõ ràng.

## 2. Cấu trúc các trang (Views)
Dựa trên thanh điều hướng (Header) và yêu cầu từ khách hàng, nội dung hiện tại sẽ được chia thành 5 Views chính. Khi người dùng click vào Menu, JS sẽ xử lý việc nạp View mới (Fade in) và ẩn View cũ (Fade out) mà không cần reload trang.

### 2.1. Home View (Trang chủ)
- **Banner Video 360 nổi bật**: Giữ Hero Section hiện tại với background video / hiệu ứng vòng sáng cực kỳ Cinematic.
- **Demo Video Carousel**: Trình diễn các video nổi bật ngay trên trang chủ.
- **Thông điệp ngắn gọn & Call to Action (CTA)**: Nút "Nhận báo giá ngay" và "Xem Demo Video".

### 2.2. Services View (Trang Dịch vụ)
- **Gói dịch vụ**: Cho thuê Video Booth 360 (Basic, Pro, Premium packages).
- **Hình ảnh thực tế**: Đưa phần "Video Demo 360 / Portfolio" vào đây hoặc trang Dự án.

### 2.3. Products View (Trang Sản phẩm)
- **Bán bục xoay 360 độ**: Tách phần mua bục xoay thành không gian riêng.
- **Thông số kỹ thuật & Lợi ích**: "Cực kỳ ổn định", "Điều khiển tốc độ", "Nhỏ gọn dễ lắp", "Bảo hành 12 tháng".
- **Video test máy & Ảnh chi tiết thiết bị**.

### 2.4. Projects View (Trang Dự án)
- **Khoảnh khắc (Gallery)**: YEP, Gala, Bar, Wedding, Activation...
- **Khách hàng thân thiết**: Hiển thị logo của Vietcombank, Samsung, Tiktok, v.v.

### 2.5. Blog View (Trang Blog)
- **Tin tức & Kinh nghiệm**: Các bài viết chia sẻ về ứng dụng 360 Booth trong sự kiện, tối ưu SEO.

## 3. Hệ thống Animation (Nâng cấp)
- **Page Transitions**: 
  - Khung bao ngoài của nội dung (View container) sẽ sử dụng hiệu ứng `opacity` và `transform: translateY` để tạo cảm giác trang mới trượt nhẹ lên và rõ dần lên khi bấm vào Menu (Thời gian: 300ms-500ms).
- **Scroll Reveal (Intersection Observer)**:
  - Khi cuộn chuột trong một View bất kỳ, các khối nội dung (Ví dụ: Card gói dịch vụ, Từng dòng thông số kỹ thuật, Logo khách hàng) sẽ tuần tự xuất hiện (Staggered Animations).
- **Interactive Hover Effects**:
  - Các card gói dịch vụ sáng viền (Glow effect), video tự play khi hover, và nút bấm có hiệu ứng vệt sáng (Shimmer) thu hút sự chú ý.
- **Header Dynamics**:
  - Menu mục đang được xem (Active State) sẽ hiển thị viền/cách điệu gradient dưới chân để nổi bật. Khi scroll xuống, Header có hiệu ứng thay đổi độ trong suốt.

## 4. Tích hợp & Tối ưu hóa (SEO & Conversions)
- **Floating Contact (Sticky)**:
  - Các nút Zalo, Hotline được ghim nổi bật ở góc phải màn hình, thiết kế có xung nhịp (Pulse effect) thu hút lượt click.
- **Form Báo Giá (Quote Form)**:
  - Hiển thị theo dạng Modal Popup hoặc ở trang Liên hệ riêng biệt, sử dụng Glassmorphism.
- **SEO Keywords Base**: 
  - `<title>`, `<meta description>`, thẻ `<h1>`, `<h2>` chứa từ khóa: *Video Booth 360, Thuê 360 Booth, Bục xoay 360 độ, Photobooth 360*.

## 5. Kế hoạch triển khai mã nguồn
1. Bọc các `<section>` hiện tại vào trong các `<div>` có class là `page-view hidden`.
2. Chỉnh sửa Navigation Links để chúng chứa thuộc tính `data-target` thay vì href hash (ví dụ: `data-target="services"`).
3. Viết một script Javascript nhỏ dùng để lắng nghe sự kiện click trên Header, `classList.add('hidden')` cho các trang ko liên quan và xoá chuỗi đó cho trang được ấn, kèm các class tạo animations trượt/hiện ảnh (Fade-in).
4. Thêm Intersection Observer cho các elements có class `.reveal-on-scroll`.
