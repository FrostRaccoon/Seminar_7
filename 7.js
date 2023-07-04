/* Задание 1:
 
```html
<div class="block"></div>
```
 
1. Внутри данного в html блока необходимо создать элемент `div` с классом 
`item`, внутри которого разместить текст “Элемент внутри” и задать следующие 
стили:
a. Цвет текста синий.
b. Рамка сплошная черная.
c. Цвет фона `#f8f8f8`.
d. Внутренний отступ `16px`.
2. Добавить данному в html блоку класс `item_1`, использовать `setAttribute`.
3. Добавить данному в html блоку класс `item_2`, использовать `classList`.


//1:

const divEl = document.querySelector(`.block`);
divEl.innerHTML = `<div class="item">Элемент внутри</div>`;

divEl.style.color = `blue`;
divEl.style.border = `solid black`;
divEl.style.backgroundColor = `#f8f8f8`;
divEl.style.padding = `16px`;

const divElClasses = divEl.getAttribute(`class`);

divEl.setAttribute(`class`, `item_1 ${divElClasses}`);
divEl.classList.add(`item_2`);

// console.log(divElClasses);
// console.log(divEl);

Задание 2: 
 
```html
<div class="elem">
  <img src="photo.png" alt="photo">
  <div class="content">
    <h2 class="heading">Lorem, ipsum dolor.</h2>
    <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
  </div>
</div>
```
 
2. Необходимо с помощью querySelector найти параграф с классом text.
3. Используя полученный элемент (во 2 пункте), вывести в консоль следующие 
элементы: 
- Соседний элемент `h2`.
- Родительский элемент content.
- Картинку.
- Первый попавшийся элемент среди родителей элемента из пункта 2, с классом 
`elem`.


//2:

const pEl = document.querySelector(`.text`);

console.log(pEl);

//3:
console.log(pEl.previousElementSibling);

console.log(pEl.parentElement);
console.log(pEl.parentElement.previousElementSibling);

console.log(pEl.parentElement.parentElement);

Задание 3: 
 
```html
<div class="item">
  <div class="elem">
    <div class="info">
      <h2 class="subtitle">Lorem, ipsum dolor.</h2>
    </div>
  </div>
</div>
```
 
С помощью querySelector найти элемент h2 и вывести в консоль все родительские теги 
(количество родителей мы заранее не знаем).


const h2El = document.querySelector(`h2`);

for (
  let elem = h2El.parentElement;
  elem.parentElement;
  elem = elem.parentElement
) {
  console.log(elem);
}
// console.log(h2El);

Задание 4: 
 
```html
<form action="#">
  <input type="text">
  <button class="btn">Отправить</button>
</form>
```
 
1. Дано поле ввода и кнопка отправить, необходимо реализовать функционал, при
котором, если пользователь нажимает на кнопку отправить, а поле ввода пустое, 
то под полем для ввода должен появиться заголовок h2 с текстом: "вы не заполнили поле ввода.".
2. При выводе заголовка h2 из первого пункта, также должна появляться красная 
рамка вокруг поля для ввода.
*/

//1:

const btnEl = document.querySelector(`.btn`);
const inputEl = document.querySelector(`input`);
const formEl = document.querySelector(`form`);
const h2El = document.createElement(`h2`);
h2El.textContent = `вы не заполнили поле ввода.`;

btnEl.addEventListener(`click`, () => {
  if (inputEl.value === ``) {
    formEl.after(h2El);
    inputEl.style.border = `2px solid red`;
  } else {
    h2El.remove();
    inputEl.style.removeProperty(`border`);
  }
});
