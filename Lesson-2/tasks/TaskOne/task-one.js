"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const number1 = parseInt(prompt("перша цифра:"));
const number2 = parseInt(prompt("друга цифра:"));

const sum = number1 + number2;
const mult = number1 * number2;
const fraction = number1 / number2;

const table = document.createElement("table");
table.classList.add("table");

table.innerHTML = `
    <tr>
        <th>сума:</th>
        <td>${sum}</td>
    </tr>
    <tr>
        <th>добуток:</th>
        <td>${mult}</td>
    </tr>
    <tr>
        <th>частка:</th>
        <td>${fraction}</td>
    </tr>
`;

main.appendChild(link);
main.appendChild(table);
