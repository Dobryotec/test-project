const orderDateEl = document.body.querySelector(".form__order-date");

const now = new Date();
const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = String(now.getFullYear());

orderDateEl.textContent = `Order date: ${day}.${month}.${year}`;
