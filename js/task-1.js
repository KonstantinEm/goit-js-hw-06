// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   // твой код
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// ==============================================================================================================================
import users from './users.js'; //📁

const getUserNames = function (users) {
  return users.map(element => element.name);
};
console.log(getUserNames(users));
