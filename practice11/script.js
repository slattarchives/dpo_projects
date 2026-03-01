document.addEventListener('DOMContentLoaded', function () {
  //№1: Генерация списка
  const userListContainer = document.getElementById('userListContainer');
  const addUserBtn = document.getElementById('addUserBtn');

  const title = document.createElement('h1');
  title.textContent = 'Список пользователей';
  title.style.color = '#FF8AAE';
  title.style.marginBottom = '1rem';

  const userList = document.createElement('ul');
  const initialUsers = ['Анна', 'Борис', 'Виктор'];
  
  initialUsers.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    userList.appendChild(li);
  });

  userListContainer.appendChild(title);
  userListContainer.appendChild(userList);

  addUserBtn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый пользователь';
    userList.appendChild(newItem);

    newItem.style.backgroundColor = '#FFE0E6';
    setTimeout(() => {
      newItem.style.backgroundColor = '';
    }, 300);
  });

  //№2: Работа с селекторами
  const textElements = document.querySelectorAll('.text');
  console.log('Найдено элементов с классом "text":', textElements.length);

  const specialElement = document.querySelector('.special');
  if (specialElement) {
    specialElement.classList.add('red-text');
  }

  if (textElements.length >= 3) {
    textElements[2].classList.add('bg-green'); // индекс 2 = третий элемент
  }

  const container = document.getElementById('container');
  if (container) {
    container.classList.add('border-container');
  }


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