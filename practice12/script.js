document.addEventListener('DOMContentLoaded', function () {
  //№1: Генерация списка
  const counterElement = document.getElementById('counter');
  const addUserBtn = document.getElementById('addUserBtn');
  let counter = 0;

  counterElement.textContent = counter;

  addUserBtn.addEventListener('click', function () {
    counter = counter + 1;
    counterElement.textContent = counter;
  });

  //№2: Приветствие
  const hiUserBtn = document.getElementById('hiUserBtn');
  const userNameInput = document.getElementById('name');
  const greeting = document.getElementById('Greeting');


  hiUserBtn.addEventListener('click', function () { 
    const nameValue = userNameInput.value.trim();
    const newItem = document.createElement('li');
    newItem.textContent = 'Привет, ${nameValue}!';

    greeting.appendChild(newItem);

    userNameInput.value = '';
  });


  //№3: Data-атрибуты и вычисления
  const items = document.querySelectorAll('.item');
  console.log('Найдено товаров:', items.length);

  const activeItem = document.querySelector('.item.active');
  if (activeItem) {
    activeItem.classList.add('highlight');
  }

  let total = 0;
  let maxPrice = 0;
  let maxItem = null;

  items.forEach(item => {
    const price = Number(item.dataset.price);
    total += price;
    
    if (price > maxPrice) {
      maxPrice = price;
      maxItem = item;
    }
  });

  console.log('Суммарная стоимость:', total, '₽');
  console.log('Самый дорогой товар:', maxItem ? maxItem.textContent : 'не найден', '—', maxPrice, '₽');

  const resultDiv = document.getElementById('calcResult');
  resultDiv.innerHTML = `
    Суммарная стоимость: <strong>${total} ₽</strong><br>
    Самый дорогой товар: <strong>${maxItem ? maxItem.textContent : '—'}</strong> (${maxPrice} ₽)
  `;
});