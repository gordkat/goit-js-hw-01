const credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let balance;
const numberOfDroid = prompt("Сколько дроидов Вы желаете купить?");
if (numberOfDroid === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else {
  totalPrice = pricePerDroid * Number(numberOfDroid);
  if (totalPrice > credits) {
    message = "Недостаточно средств на счету!";
  } else {
    balance = credits - totalPrice;
    message = `Вы купили ${numberOfDroid} дроидов, на счету осталось ${balance} кредитов.`;
  }
  console.log(message);
}
