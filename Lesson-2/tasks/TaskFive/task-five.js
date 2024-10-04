"use strict";

const main = document.querySelector('[data-js="main"]');

const link = document.createElement("a");
link.classList.add("link");
link.setAttribute("href", "../../index.html");
link.textContent = "Назад";

const userSeconds = parseInt(
  prompt("Введіть кількість секунд, що пройшла від початку доби:", "0")
);

const hours = Math.floor(userSeconds / 3600);
const minutes = Math.floor((userSeconds % 3600) / 60);

const table = document.createElement("table");
table.classList.add("table");

table.innerHTML = `
  <tr>
        <th>Кільеість секунд:</th>
        <td>${userSeconds} сек.</td>
    </tr>
    <tr>
        <th>В годинах буде:</th>
        <td>${hours} год.</td>
    </tr>
    <tr>
        <th>В хвилинах:</th>
        <td>${minutes} хв.</td>
    </tr>
`;

main.appendChild(link);
main.appendChild(table);
