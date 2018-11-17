var money = +prompt("Ваш бюджет на месяц?", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var itemOfExpensesOne = prompt("Введите обязательную статью расходов в этом месяце", "");
var costsOne = +prompt("Во сколько обойдется?", "");

var itemOfExpensesTwo = prompt("Введите обязательную статью расходов в этом месяце", "");
var costsTwo = +prompt("Во сколько обойдется?", "");

var appData = {
  budget: money,
  timeData: time,
  expenses: {
    [itemOfExpensesOne] : costsOne,
    [itemOfExpensesTwo] : costsTwo,
  },
  optionalExpenses : {},
  income : [],
  savings : false
};

alert("Ваш бюджет на один день равен: " + (appData.budget / 30).toFixed(2));