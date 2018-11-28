// восстанавливаю порядок в меню, добавляю пятый пункт
let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item');

menu.insertBefore(menuItem[2], menuItem[1]);

let liElement = document.createElement('li');
liElement.classList.add('menu-item');
liElement.textContent = 'Пятый пункт';
menu.appendChild(liElement);

// меняю картинку заднего фона

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

// изменяем заголовок

let newTitle = document.getElementById('title');
newTitle.textContent = 'Мы продаем только подлинную технику Apple';

// удаляем рекламу на странице

let adv = document.getElementsByClassName('adv')[0];
adv.remove();

// вопросы пользователя

let promptFromApple = document.querySelector('#prompt');
let question = prompt('Как вы относитесь к технике Apple? ', '');
promptFromApple.textContent = question;



