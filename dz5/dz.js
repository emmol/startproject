let money, time;

// начальная функция, доход, дата 
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
};
start();

// основной объект приложения
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses : {},
  income : [],
  savings : true,
  // метод добавления статей расхода и стоимости
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""), 
          b = +prompt("Во сколько обойдется?", "");
    
      if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },
  // метод проверки размера дневного бюджета
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  // метод проверки уровня достатка
  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  // метод расчета дохода с депозита
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
      
      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
    }
  },
  // метод определения не обязательных расходов
  chooseOptExpenses: function() {
    for (let i = 0; i <= 3; i++) {
      let c = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = c;
      console.log(appData.optionalExpenses);
    }
  },
  // метод получения дополнительного дохода
  chooseIncome: function() {

    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');

    if (typeof(items) != "string" || items == '' || items == null) {
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt('Может что то еще?'));
      appData.income.sort();
    }

    appData.income.forEach(function(data, index) {
      console.log('Способы дополнительного заработка: ' + (index + 1) + ' - ' + data);
    });
  }
};

for(let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}