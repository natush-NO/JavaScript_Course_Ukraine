"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const randomMonth = Math.floor(Math.random() * 12) + 1;
const randomDay = Math.floor(Math.random() * 7);
const sum = randomMonth + randomDay;

const table = document.createElement("table");
table.classList.add("table");

table.innerHTML = `
    <tr>
        <th>Випадковий номер місяця:</th>
        <td>${randomMonth}</td>
    </tr>
    <tr>
        <th>Випадковий номер дня:</th>
        <td>${randomDay}</td>
    </tr>
    <tr class="total">
        <td>Сума:</td>
        <td>${sum}</td>
    </tr>
`;

main.appendChild(link);
main.appendChild(table);
