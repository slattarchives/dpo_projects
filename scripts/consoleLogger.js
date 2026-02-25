document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('formValid', function (event) {
    const data = event.detail;

    console.clear();
    console.log('%c✨ Форма успешно отправлена!', 'color: #FF8AAE; font-weight: bold;');
    console.log('Имя:', data.name);
    console.log('Email:', data.email);
    console.log('Тема:', data.subject);
    console.log('Сообщение:', data.message);
    console.log('Время:', new Date().toLocaleString('ru-RU'));
  });
});