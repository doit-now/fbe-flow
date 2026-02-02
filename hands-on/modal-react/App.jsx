import { useState } from "react";
import "./App.css";

export default function App() {

  // State dùng để quyết định:
  // modal có được render hay không
  const [open, setOpen] = useState(false);

  return (
    <div className="page">

      {/* ===== NỘI DUNG TRANG ===== */}

      <h1>Trang demo Modal (React)</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* 
        Nút mở modal
        Khi click -> setOpen(true)
        => React render modal
      */}
      <button
        className="openBtn"
        onClick={() => setOpen(true)}
      >
        View detail
      </button>

      {/* 
        Render có điều kiện:
        - open === true  -> modal xuất hiện
        - open === false -> modal biến mất khỏi DOM
      */}
      {open && (

        <div className="modalOverlay">

          <div className="modalContent">

            {/* 
              Nút X đóng modal
              Chỉ cần setOpen(false)
              Không đụng CSS, không đụng DOM
            */}
            <button
              className="closeX"
              onClick={() => setOpen(false)}
            >
              X
            </button>

            <h2>🎉 Chúc Mừng Năm Mới | Bính Ngọ 2026</h2>

            <p>🍎 Cầu</p>
            <p>🍊 Sung</p>
            <p>🥥 Dừa</p>
            <p>🥭 Đủ</p>
            <p>🍍 Xoài</p>

          </div>
        </div>
      )}

    </div>
  );
}
