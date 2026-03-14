document.addEventListener('DOMContentLoaded', function () {
  
  // ===== ЗАДАНИЕ 1: Счётчик кликов =====
  const counterElement = document.getElementById('counter');
  const addUserBtn = document.getElementById('addUserBtn');
  let counter = 0;
  counterElement.textContent = counter;

  addUserBtn.addEventListener('click', function () {
    counter++;
    counterElement.textContent = counter;
  });


  // ===== ЗАДАНИЕ 2: Приветствие =====
  const hiUserBtn = document.getElementById('hiUserBtn');
  const userNameInput = document.getElementById('nameInput');
  const greetingList = document.getElementById('greetingList');

  hiUserBtn.addEventListener('click', function () {
    const nameValue = userNameInput.value.trim();
    if (nameValue === '') {
      alert('Пожалуйста, введите имя! 🌸');
      return;
    }
    const newItem = document.createElement('li');
    newItem.textContent = `Привет, ${nameValue}! 💕`;
    greetingList.appendChild(newItem);
    userNameInput.value = '';
  });


  // ===== ЗАДАНИЕ 3: Переключатель темы =====
  const themeBtn = document.getElementById('themeUserBtn');
  const themeToggle = document.getElementById('themeToggle');

  function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('pinkPuffTheme', isDark ? 'dark' : 'light');
  }

  themeBtn.addEventListener('click', toggleTheme);
  themeToggle.addEventListener('click', toggleTheme);

  // Восстановление темы при загрузке
  const savedTheme = localStorage.getItem('pinkPuffTheme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeToggle.textContent = '☀️';
  }


  // ===== ЗАДАНИЕ 4: Список дел =====
  const todoInput = document.getElementById('todoInput');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  addTodoBtn.addEventListener('click', function () {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
      alert('Напишите задачу! 📝');
      return;
    }
    const todoItem = document.createElement('li');
    todoItem.textContent = '✨ ' + todoText;

    todoItem.style.cursor = 'pointer';
    todoItem.addEventListener('click', function () {
      todoItem.style.opacity = '0.5';
      setTimeout(() => todoItem.remove(), 200);
    });
    
    todoList.appendChild(todoItem);
    todoInput.value = '';
  });

  todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') addTodoBtn.click();
  });


  // ===== ЗАДАНИЕ 5: Управление размером =====
  const increaseBtn = document.getElementById('increaseBtn');
  const decreaseBtn = document.getElementById('decreaseBtn');
  const sizeBox = document.getElementById('sizeBox');
  let size = 100;

  function updateBox() {
    sizeBox.style.width = size + 'px';
    sizeBox.style.height = size + 'px';
    sizeBox.textContent = size + 'px';
  }

  increaseBtn.addEventListener('click', function () {
    size += 10;
    updateBox();
  });

  decreaseBtn.addEventListener('click', function () {
    if (size > 20) { // мин размер
      size -= 10;
      updateBox();
    }
  });

});