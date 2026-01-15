//import React from 'react';
import './FruitTable.css';

const FruitTable = () => {
  const fruits = [
    { id: 1, name: 'Mãng Cầu', slug: 'cau', price: '120.000đ', meaning: 'Cầu mong mọi sự tốt lành' },
    { id: 2, name: 'Quả Sung', slug: 'sung', price: '50.000đ', meaning: 'Sung túc, viên mãn' },
    { id: 3, name: 'Dừa Xiêm', slug: 'dua', price: '35.000đ', meaning: 'Vừa đủ, không thiếu thốn' },
    { id: 4, name: 'Đu Đủ', slug: 'dudu', price: '45.000đ', meaning: 'Đầy đủ, thịnh vượng' },
    { id: 5, name: 'Xoài Cát', slug: 'xoai', price: '80.000đ', meaning: 'Tiêu xài không lo nghĩ' },
  ];

  return (
    <div className="fruit-table-container">
      <h2 className="fruit-table-title">Mâm Ngũ Quả Ngày Tết</h2>
      <table className="fruit-table">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên Trái Cây</th>
            <th>Ý Nghĩa</th>
            <th>Giá Bán</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => (
            <tr key={fruit.id}>
              <td>
                {/* Bạn sẽ lưu ảnh vào folder public/images/ */}
                <img 
                  src={`/images/${fruit.slug}.jpg`} 
                  alt={fruit.name} 
                  className="fruit-img" 
                />
              </td>
              <td><strong>{fruit.name}</strong></td>
              <td><em>{fruit.meaning}</em></td>
              <td className="price-tag">{fruit.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitTable;