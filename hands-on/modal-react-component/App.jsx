import { useState } from "react";
import Modal from "./Modal";
import "./App.css";

export default function App() {

  // State nằm ở App vì App là nơi quyết định mở/đóng
  const [open, setOpen] = useState(false);

  // Hàm mở/đóng để truyền xuống Modal (chuẩn “parent controls state”)
  const openModal  = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <div className="page">

      {/* ===== NỘI DUNG TRANG ===== */}

      <h1>Trang demo Modal (React)</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Nút mở modal */}
      <button className="openBtn" onClick={openModal}>
        View detail
      </button>

      {/* 
        Modal là component riêng
        open   : nhận trạng thái mở/đóng
        onClose: nhận “hành động đóng”
      */}
      <Modal open={open} onClose={closeModal} />

    </div>
  );
}
