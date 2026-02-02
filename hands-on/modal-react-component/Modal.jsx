import "./Modal.css";

export default function Modal({ open, onClose }) {

  // Nếu chưa mở thì không render gì cả
  // Đây là cách React “ẩn modal” sạch nhất: modal không tồn tại trong DOM
  if (!open) return null;

  return (
    <div className="modalOverlay">

      <div className="modalContent">

        {/* 
          Chỉ đóng bằng nút X theo yêu cầu
          Không overlay click, không ESC, không document
        */}
        <button className="closeX" onClick={onClose}>
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
  );
}
