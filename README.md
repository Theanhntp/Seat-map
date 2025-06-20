# 🎫 seat-map

Template giao diện chọn ghế tương tác cho ứng dụng đặt vé, xây dựng bằng **React** và **HTML/CSS**.

---

## 🧩 Mục Tiêu

Cung cấp các mẫu sơ đồ ghế (seatmap) dễ tích hợp cho:
- Rạp chiếu phim, sân khấu sự kiện, nhà hát, v.v.
- Hiển thị trạng thái ghế: **Trống**, **VIP**, **Đã đặt**, **Đang chọn**.
- Tùy chỉnh màu sắc, bố cục, và đánh số ghế (hàng A–Z, cột 1–n).
- Trải nghiệm người dùng trực quan, dễ tùy biến cho lập trình viên.

---

## 🎨 Một Số Mẫu Giao Diện

| **Kiểu Sơ Đồ**            | **Mô Tả Ngắn**                                      | **Hình Ảnh**                                                                 |
|---------------------------|-----------------------------------------------------|------------------------------------------------------------------------------|
| **Rạp chiếu phim cơ bản** | Ghế tập trung, màn hình phía trên                  | <img src="/IMG/Seat1.png" alt="Cinema Basic" width="300" />           |
| **Sân khấu hai bên**      | Ghế chia hai khối trái/phải, lối đi giữa           | <img src="/IMG/Seat2.png" alt="Stage Two Sides" width="300" />     |
| **Rạp nhiều hàng**        | Nhà hát lớn, hàng A–L, nhiều trạng thái ghế        | <img src="/IMG/Seat3.png" alt="Large Theater" width="300" />         |
| **Sân khấu sự kiện**      | Ghế đánh số cụ thể, hai bên sân khấu               | <img src="/IMG/Seat4.png" alt="Event Stage" width="300" />             |
| **Seat Type 1**          | Sơ đồ chia 4 cụm ghế: trái, phải, giữa trái/phải   | <img src="/IMG/SeatType1.png" alt="Seat Type 1" width="300" />        |
| **Seat Type 2**          | Sân khấu cong, 2 dãy trái/phải lệch hàng linh hoạt | <img src="/IMG/SeatType2.png" alt="Seat Type 2" width="300" />        |
| **Seat Type 3**          | Ghế phân bố đối xứng 2 bên, sân khấu trung tâm     | <img src="/IMG/SeatType3.png" alt="Seat Type 3" width="300" />        |

---

## 🚀 Cài Đặt Nhanh

1. Clone repository:
   ```bash
   git clone https://github.com/Theanhntp/seat-map
   ```

2. Cài đặt phụ thuộc:
   ```bash
   cd seat-map
   npm install
   ```

3. Chạy ứng dụng:
   ```bash
   npm start
   ```

4. Mở trình duyệt tại: `http://localhost:3000`

---

## 📦 Công Nghệ Sử Dụng

- **React** (Vite hoặc Create React App)
- **HTML + CSS** thuần
- Không phụ thuộc backend
- Dễ mở rộng và tái sử dụng

---

## 📁 Cấu Trúc Thư Mục

```
seat-map/
├── public/             # File tĩnh (index.html, favicon, ...)
├── src/                # Mã nguồn React
│   ├── components/     # Component (SeatMap, Seat, Legend, ...)
│   ├── assets/         # CSS, hình ảnh, dữ liệu mock
│   ├── App.js          # Cấu trúc chính
│   └── index.js        # Khởi tạo React DOM
├── package.json        # Thông tin dự án và phụ thuộc
└── README.md           # Tài liệu hướng dẫn
```

---

<p align="center">
  <strong>seat-map</strong> – Giao diện chọn ghế đơn giản, linh hoạt cho mọi sự kiện!
</p>
<p align="center">
  theanhntp@gmail.com
</p>