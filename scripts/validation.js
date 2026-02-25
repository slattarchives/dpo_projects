document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Очистка предыдущих ошибок
    document.querySelectorAll('.input.is-danger, .textarea.is-danger, .select.is-danger').forEach(el => {
      el.classList.remove('is-danger');
    });
    document.querySelectorAll('.help.is-danger').forEach(el => el.remove());

    let isValid = true;

    // === Валидация имени ===
    const nameInput = document.getElementById('name');
    const nameValue = nameInput.value.trim();
    if (!nameValue) {
      showError(nameInput, 'Пожалуйста, укажите имя');
      isValid = false;
    }

    // === Валидация email ===
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      showError(emailInput, 'Email обязателен');
      isValid = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, 'Неверный формат email');
      isValid = false;
    }

    // === Валидация темы ===
    const subjectSelect = document.getElementById('subject');
    if (!subjectSelect.value) {
      showError(subjectSelect.closest('.select'), 'Выберите тему');
      isValid = false;
    }

    // === Валидация чекбокса ===
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
      const error = document.createElement('p');
      error.className = 'help is-danger';
      error.textContent = 'Необходимо согласие на обработку данных';
      agreement.closest('.field').appendChild(error);
      isValid = false;
    }

    // === Если всё в порядке ===
    if (isValid) {
      const formData = {
        name: nameValue,
        email: emailValue,
        subject: subjectSelect.options[subjectSelect.selectedIndex].text,
        message: document.getElementById('message').value.trim() || '(не заполнено)'
      };

      // Генерируем кастомное событие
      const customEvent = new CustomEvent('formValid', { detail: formData });
      document.dispatchEvent(customEvent);

      // Опционально: показать алерт
      alert('Форма отправлена! Данные в консоли.');
    }
  });

  // Функция отображения ошибки
  function showError(element, message) {
    element.classList.add('is-danger');
    const help = document.createElement('p');
    help.className = 'help is-danger';
    help.textContent = message;
    element.parentNode.appendChild(help);
  }

  // Очистка ошибок при вводе
  document.querySelectorAll('.input, .textarea, .select select').forEach(input => {
    input.addEventListener('input', function () {
      this.classList.remove('is-danger');
      const parent = this.parentNode;
      const errors = parent.querySelectorAll('.help.is-danger');
      errors.forEach(el => el.remove());
    });
  });

  // Для чекбокса
  document.getElementById('agreement')?.addEventListener('change', function () {
    const field = this.closest('.field');
    const errors = field.querySelectorAll('.help.is-danger');
    errors.forEach(el => el.remove());
  });
});