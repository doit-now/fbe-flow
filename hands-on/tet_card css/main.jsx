import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './FruitCards.css'
import "./Layout.css"
//import App from './App.jsx'

const fruits = [
  { name: "Mãng cầu", desc: "Cầu mong mọi sự tốt lành", icon: "🍈" },
  { name: "Sung", desc: "Sung túc, sung mãn", icon: "🌿" },
  { name: "Dừa", desc: "Thanh mát, dịu dàng", icon: "🥥" },
  { name: "Đu đủ", desc: "Đủ đầy, may mắn", icon: "🍈" },
  { name: "Xoài", desc: "Ngọt ngào, tươi mới", icon: "🥭" }
];

const cards = fruits.map((f, index) => (
  <div className="card" key={index}>
    <h2>
      <span style={{ fontSize: "40px" }}>{f.icon}</span> {f.name}
    </h2>
    <p>{f.desc}</p>
  </div>
));

const header = (
  <div className="header">
    <h1>🌸 Chào mừng đến với vũ trụ trái cây xứ F</h1>
    <h2>Nhà văn hoá sinh viên | Làng đại học Thủ Đức</h2>
  </div>
);

const main = (
  <div className="main">
    <div className="container">
      {cards}
    </div>
  </div>
);

const footer = (
  <div className="footer">
    <h3>&#169; 2026 giáo.làng | Fruit Universe</h3>
  </div>
);

const app = (
  <>
    {header}
    {main}
    {footer}
  </>
);

createRoot(document.getElementById("root")).render(app);

