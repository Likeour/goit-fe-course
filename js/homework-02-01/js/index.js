'use strict'

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const loginMessage = prompt('Введите логин:');
if (loginMessage === null) {
    alert('Отменено пользователем!');
} else if (loginMessage !== adminLogin) {
    alert('Доступ запрещен!')
} else if (loginMessage === adminLogin) {
    const passwordMessage = prompt('Введите пароль:');
    if (passwordMessage === null) {
        alert('Отменено пользователем!');
    } else if (passwordMessage !== adminPassword) {
        alert('Доступ запрещен!');
    } else if (passwordMessage === adminPassword) {
        alert('Добро пожаловать!')
    }

}