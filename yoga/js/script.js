// функция начинает работу только после полной загрузки ДОМ дерева
window.addEventListener('DOMContentLoaded', function() {
  
  // используем "строгий режим"
  'use strict';
  // получаем все элементы заголовков для табов
  let tab = document.querySelectorAll('.info-header-tab'),
  // получаем контейнер для всех элемнетов
      info = document.querySelector('.info-header'),
  // получаем все элементы табов
      tabContent = document.querySelectorAll('.info-tabcontent');

  // функция которая скрывает элементы табов
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) { // перебор элементов 
      tabContent[i].classList.remove('show'); // удаление класса 'show'
      tabContent[i].classList.add('hide'); // добавление класса 'hide'
    }
  }
  hideTabContent(1); // нулевой таб показывается всегда при загрузке

  // функция которая показывает элемнеты табов
  function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) { // если элемент содержит класс 'hide'
      tabContent[b].classList.remove('hide'); // удаление класса 'hide'
      tabContent[b].classList.add('show'); // добавление класса 'show'
    }
  }

  // функция, которая при нажатии на заголовок таба, скрывает нулевой или любой
  // другой таб и показывает таб, на который нажата кнопка мыши
  info.addEventListener('click', function(event) {
    let target = event.target;   // получает цель элемента
    if (target && target.classList.contains('info-header-tab')) { // если цель элемента и класс 'info-header-tab'
      for(let i = 0; i < tab.length; i++) { // совпадают, то цикл запускает смену табов
        if (target == tab[i]) {
          hideTabContent(0); // скрывает первый таб
          showTabContent(i); // показывает таб на который нажата кнопка
          break; // прерывает цикл
        }
      }
    }
  });
});