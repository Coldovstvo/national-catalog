import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">НАЦИОНАЛЬНЫЙ КАТАЛОГ</div>
        <nav>
          <a href="#">Поиск</a>
          <a href="#">Поддержка</a>
          <a href="#">Выйти</a>
        </nav>
      </header>

      <div className="controls">
        <button>ДОБАВИТЬ</button>
        <select><option>ИМПОРТ</option></select>
        <select><option>ЭКСПОРТ</option></select>
        <select><option>ДЕЙСТВИЕ</option></select>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>КОД ТОВАРА</th>
              <th>НАИМЕНОВАНИЕ</th>
              <th>КАТЕГОРИЯ</th>
              <th>ТОВАРНЫЙ ЗНАК</th>
              <th>СОСТОЯНИЕ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="№">1</td>
              <td data-label="Код товара">02101071220</td>
              <td data-label="Наименование">Шины зимние</td>
              <td data-label="Категория">Головные уборы</td>
              <td data-label="Товарный знак">COSMOS</td>
              <td data-label="Состояние" className="status-orange">Готов к вводу КМ</td>
            </tr>
            <tr>
              <td data-label="№">2</td>
              <td data-label="Код товара">02101071218</td>
              <td data-label="Наименование">Цетс с полюшонным...</td>
              <td data-label="Категория">Головные уборы</td>
              <td data-label="Товарный знак">COSMOS</td>
              <td data-label="Состояние" className="status-green">Не имеет товарного знака</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;