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

const container = <div className="container">{cards}</div>;

createRoot(document.getElementById("root")).render(container);