// получаем кнопку начать расчет через id
let startButton = document.getElementById('start'),
// получаем все блоки в правой части заканчивающиеся на - value
    rightClass = document.getElementsByClassName('result-table')[0],
    selectNeed = rightClass.querySelectorAll("[class$='value']"),
// получаем поля - input с обязательными расходами
    inputItems = document.getElementsByClassName('expenses-item'),
// получаем кнопки утвердить и рассчитать
    approve = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
// получаем поля для ввода необязательных расходов
    unnecessaryExpenses = document.querySelectorAll('input.optionalexpenses-item'),
// получаем оставшиеся поля
    income = document.querySelector('.data #income'),
    savings = document.querySelector('.data #savings'),
    sum = document.querySelector('.data #sum'),
    percent= document.querySelector('.data #percent'),
    yearValue = document.querySelector('.time-data .year-value'),
    monthValue = document.querySelector('.time-data .month-value'),
    dayValue = document.querySelector('.time-data .day-value');

    