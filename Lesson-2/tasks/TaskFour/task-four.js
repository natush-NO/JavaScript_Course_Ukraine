"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const lengthCentimeters = parseInt(
  prompt("Введіть довжину в сантиметрах:", "0")
);

const lengthMeters = lengthCentimeters / 100;
const lengthKilometers = lengthCentimeters / 100000;

const table = document.createElement("table");
table.classList.add("table");

table.innerHTML = `
    <tr>
        <th>Довжина в сантиметрах:</th>
        <td>${lengthCentimeters} см.</td>
    </tr>
    <tr>
        <th>Довжина в метрах:</th>
        <td>${lengthMeters} м.</td>
    </tr>
    <tr>
        <th>Довжина в кілометрах:</th>
        <td>${lengthKilometers} км.</td>
    </tr>
`;

main.appendChild(link);
main.appendChild(table);
