"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const birthYear = parseInt(
  prompt("Введіть свій рік народження (наприклад, 1990)"),
  10
);

if (isNaN(birthYear)) {
  alert("Будь ласка, введіть коректний рік.");
} else {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  const year = birthYear;

  const table = document.createElement("table");
  table.classList.add("table");

  table.innerHTML = `
    <tr>
        <th>Поточний рік:</th>
        <td>${currentYear}</td>
    </tr>
    <tr>
        <th>Рік народження:</th>
        <td>${year}</td>
    </tr>
     <tr class="total">
        <td>Рік народження:</td>
        <td>${age}</td>
    </tr>
  `;

  main.appendChild(link);
  main.appendChild(table);
}
