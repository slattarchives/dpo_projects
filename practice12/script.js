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
    newItem.textContent = `Привет, ${nameValue}!`;

    greeting.appendChild(newItem);

    userNameInput.value = '';
  });


  //№3: Переключатель темы
  const toggle = document.getElementById('themeToggle');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent =
      document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
  
});