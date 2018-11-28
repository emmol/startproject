// восстанавливаю порядок в меню, добавляю пятый пункт
let my = document.querySelector('.menu');
let allItems = my.querySelectorAll('.menu-item');


allItems[2].textContent = 'Третий пункт';
allItems[1].textContent = 'Второй пункт';

let liElement = document.createElement('li');

my.appendChild(liElement);
liElement.classList.add('menu-item');
liElement.textContent = 'Пятый пункт';

// меняю картинку заднего фона

let picture = document.querySelector('body');
picture.style.background = 'url(img/apple_true.jpg)';

// изменяем заголовок

let newTitle = document.getElementById('title');
newTitle.textContent = 'Мы продаем только подлинную технику Apple';

// удаляем рекламу на странице

let add = document.getElementsByClassName('column')[1];
let adv = add.getElementsByClassName('adv');
add.removeChild(adv[0]);

// вопросы пользователя

let pro = document.getElementById('prompt');
let question = prompt('Как вы относитесь к технике Apple? ', '');
pro.innerHTML = question;



