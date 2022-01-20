// function checkTask(arr) {
//   let obj = {};
//   let maxCount = 0;
//   let maxNum = 0;

//   arr.forEach((item) => {
//     if (obj[item]) {
//       obj[item] = +obj[item] + 1;
//     } else {
//       obj[item] = 1;
//     }
//   });
//   for (let key in obj) {
//     if (obj[key] > maxCount) {
//       maxNum = +key;
//       maxCount = +obj[key];
//     }
//   }
//   return maxNum;
// }

//! Деструктуризация
// todo Деструктуризация массива
// const arr = [100, 200, 300, 400];
// let [a, b, c, d] = arr;
// console.log(c);

// let arr = ["Tyler", "Josh", "Travis"];
// let [person1, person2, person3] = arr;
// console.log(person2);
//todo деструктуризация объекта
// let artist1 = {
//   name: "Travis",
//   lastName: "Scott",
//   position: "rapper",
// };
// let artist2 = {
//   name: "Asap",
//   lastName: "Rocky",
//   position: "rapper",
//   wife:'kylie',
// };
//  todo перезапись ключей
// let { lastName, position, name } = artist1;
// let { lastName, position, name, wife = "Kylie" } = artist2; //wife присвоили дефолтное значение
// console.log(wife);
//todo деструктуризация строки
// let [str1, str2] = "plus ultra".split(" ");
// console.log(str1);
// console.log(str2);

// let [str1, , str2] = "plus mega ultra".split(" ");
// console.log(str1);
// console.log(str2);

//todo spread ... (поверхностное копировaние массива)
// let obj1 = {
//   name: "Kai",
//   age: "20",
// };
// let obj2 = obj1;

// let obj2 = { ...obj1 };
// obj2.name = "Li min ho";
// obj2.age = "30";
// console.log(obj1);
// console.log(obj2);
// todo spread оператор со строками
// let letter = "abcd";
// let arr = [...letter];
// console.log(arr); //создается новый массив в котором каждый элемент является символом строки
//todo spread с объектами
let obj1 = { name: "Tyler", age: "20" };
// let obj2 = { name2: "Josh", age2: "32" }; //в объекте ключи должны быть разные
// let resObj = { ...obj1, ...obj2 };
// console.log(resObj);
//todo "добавить" свойство объекту
// let obj = { ...obj1, status: true, friend: "Josh" };
// obj.age = 32;
// console.log(obj);

//todo rest параметр ... применение систаксиса spread для сбора аргументов
// function func(a, ...b) {
//   console.log(a);
//   console.log(b);
// }
// func(1, 2, 3, 4, 5, 6, 7, 8, 9);

//JSON.parse() and JSON.stringify() глубое копирование
//JSON.parse() - превращает в объект
//JSON.stringify() - превращает в строку.

const car1 = {
  color: "red",
  wheels: {
    amount: 4,
  },
};
let car2 = JSON.parse(JSON.stringify(car1));
/* Преобразует переданный элемент в строку с форматом JSON.
 Затем JSON.parse() преобразует его обратно в объект, 
 это позволяет выполнить глубокое копирование и для вложенных объектов.
*/
// let car2 = { ...car1 }; это неправильно
car2.wheels.amount = 5;
console.log(car2);
console.log(car1);
