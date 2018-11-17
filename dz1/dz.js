var money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses : {},
  income : [],
  savings : false
};

var itemOfExpensesOne = prompt("Введите обязательную статью расходов в этом месяце", ""), 
  costsOne = +prompt("Во сколько обойдется?", ""),
  itemOfExpensesTwo = prompt("Введите обязательную статью расходов в этом месяце", ""),
  costsTwo = +prompt("Во сколько обойдется?", "");

appData.expenses.itemOfExpensesOne = costsOne;
appData.expenses.itemOfExpensesTwo = costsTwo;

alert("Ваш бюджет на один день равен: " + (appData.budget / 30).toFixed(2));