// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   // твой код
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// ========================================================================================================================================
import users from './users.js'; //📁

const usersCopy = [...users];

const getNamesSortedByFriendsCount = users =>
  users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(elem => elem.name);

console.log(getNamesSortedByFriendsCount(usersCopy));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
