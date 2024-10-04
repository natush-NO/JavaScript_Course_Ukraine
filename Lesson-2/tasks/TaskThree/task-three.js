"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const goodsPrice = parseFloat(
  prompt("Введіть вартість одиниці товару: грн.", "0")
);
const goodsQuantity = parseInt(prompt("Введіть кількість товару:", "1"));

const totalPrice = goodsPrice * goodsQuantity;
const tax = (totalPrice / 100) * 5;

const table = document.createElement("table");
table.classList.add("table");

table.innerHTML = `
    <tr>
        <th>Вартість одиниці:</th>
        <td>${goodsPrice.toFixed(2)} грн.</td>
    </tr>   <tr>
        <th>Кількість товару:</th>
        <td>${goodsQuantity} грн.</td>
    </tr>
    <tr>
        <th>Загальна вартість:</th>
        <td>${totalPrice.toFixed(2)} грн.</td>
    </tr>
    <tr class="total">
        <td>ПДВ(5% від загальної вартості):</td>
        <td>${tax.toFixed(2)} грн.</td>
    </tr>
    `;

main.appendChild(link);
main.appendChild(table);
