let country = prompt("В какую страну оформить доставку?");
let price;
let message;
if (country === null) {
  message = "Отменено пользователем!";
} else {
  country = country.toLowerCase();
  switch (country) {
    case "Китай".toLowerCase():
      price = 100;
      country = "Китай";
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Чили".toLowerCase():
      price = 250;
      country = "Чили";
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Австралия".toLowerCase():
      price = 170;
      country = "Австралию";
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Индия".toLowerCase():
      price = 80;
      country = "Индию";
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Ямайка".toLowerCase():
      price = 120;
      country = "Ямайку";
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    default:
      message = "В вашей стране доставка не доступна";
  }
}
alert(message);
