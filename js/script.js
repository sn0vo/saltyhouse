document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Здесь может быть ваш код для отправки данных на сервер
    // Например, можно использовать Fetch API или AJAX для отправки данных
  
    alert('Сообщение отправлено!'); // Уведомление об успешной отправке
    this.reset(); // Очистка формы после отправки