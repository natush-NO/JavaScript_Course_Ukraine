"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const price1 = parseFloat(prompt("Введіть вартість товару 1 (грн)", "0"));
const quantity1 = parseInt(prompt("Введіть кількість товару 1", "1"), 10);
const total1 = price1 * quantity1;

const price2 = parseFloat(prompt("Введіть вартість товару 2 (грн)", "0"));
const quantity2 = parseInt(prompt("Введіть кількість товару 2", "1"), 10);
const total2 = price2 * quantity2;

const price3 = parseFloat(prompt("Введіть вартість товару 3 (грн)", "0"));
const quantity3 = parseInt(prompt("Введіть кількість товару 3", "1"), 10);
const total3 = price3 * quantity3;

const totalPrice = total1 + total2 + total3;
const tax = totalPrice / 100 * 5;

const table = document.createElement("table");
table.classList.add("table");

table.innerHTML = `
    <tr>
        <th>Товар</th>
        <th>Кількість</th>
        <th>Ціна за одиницю</th>
        <th>Загальна вартість</th>
    </tr>
    <tr>
        <td>Товар 1</td>
        <td>${quantity1}</td>
        <td>${price1.toFixed(2)} грн</td>
        <td>${total1.toFixed(2)} грн</td>
    </tr>
    <tr>
        <td>Товар 2</td>
        <td>${quantity2}</td>
        <td>${price2.toFixed(2)} грн</td>
        <td>${total2.toFixed(2)} грн</td>
    </tr>
    <tr>
        <td>Товар 3</td>
        <td>${quantity3}</td>
        <td>${price3.toFixed(2)} грн</td>
        <td>${total3.toFixed(2)} грн</td>
    </tr>
    <tr class="total">
        <td colspan="3">Загальна вартість:</td>
        <td>${totalPrice.toFixed(2)} грн</td>
    </tr>
    <tr class="total">
        <td colspan="3">ПДВ (5% від загальної вартості):</td>
        <td>${tax.toFixed(2)} грн</td>
    </tr>
`;

main.appendChild(link);
main.appendChild(table);
