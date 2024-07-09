// input: arr, num
// output: new arr.length

// Algo
// 1. iteration arr
// 2. find index n
// 3. create new arr
// 4. push index
// 5. if new arr length !== 2
// 6. secondIndex - firstIndex + 1

// V1
// const lengthOfSequence = (arr, n) => {
//   const newArr = arr.reduce((acc, num, index) => {
//     if (num === n) {
//       acc.push(index);
//     }
//     return acc;
//   }, []);
//   if (newArr.length !== 2) return 0;
//   const [firstNumber, lastNumber] = newArr;
//   const arrLength = lastNumber - firstNumber + 1;
//   return arrLength;
// };
//
// V2
// const lengthOfSequence = (arr, n) =>
//   arr.filter(v => v === n).length === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;

// console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7));

// ///////////////////////////////////////////

// function cubeVolume(height, radius) {
//   const edgeLength = Math.min(height, radius * Math.sqrt(2));
//   return +(edgeLength ** 3).toFixed(2);
// }
// console.log(cubeVolume(11, 5));

// ///////////////////////////////////////////

// function equableTriangle(a, b, c) {
//   const p = (a + b + c) / 2;
//   const sqrt = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   return sqrt === a + b + c;
// }
// console.log(equableTriangle(5, 12, 13)); // true
// console.log(equableTriangle(2, 3, 4)); // false
// console.log(equableTriangle(7, 15, 20)); // true
// console.log(equableTriangle(25, 25, 45)); // false

// ///////////////////////////////////////////

// function gHappy(str) {
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === 'g') {
//       if ((i > 0 && str[i - 1] !== 'g') || (i < str.length - 1 && str[i + 1] !== 'g')) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// ///////////////////////////////////////////

// input: arr
// input: arr sort

// Algo
// 1.iteration
// 2. get lastName
// 3. sort
// 4. return

// const arr = [
//   'Dasher Tonoyan',
//   'Dancer Moore',
//   'Prancer Chua',
//   'Vixen Hall',
//   'Comet Karavani',
//   'Cupid Foroutan',
//   'Donder Jonker',
//   'Blitzen Claus'
// ];

// function sortReindeer(reindeerNames) {
//   return reindeerNames.sort((a, b) => {
//     const lastNameA = a.split(' ')[1];
//     const lastNameB = b.split(' ')[1];
//     console.log(lastNameA);
//     if (lastNameA > lastNameB) return 1;
//     if (lastNameA < lastNameB) return -1;
//     return 0;
//   });
// }

// // // [
// // //   "Prancer Chua",
// // //   "Blitzen Claus",
// // //   "Cupid Foroutan",
// // //   "Vixen Hall",
// // //   "Donder Jonker",
// // //   "Comet Karavani",
// // //   "Dancer Moore",
// // //   "Dasher Tonoyan",
// // // ]

// console.log(sortReindeer(arr));

// ///////////////////////////////////////////

// function tailSwap(arr) {
//   const [key1, value1] = arr[0].split(':');
//   const [key2, value2] = arr[1].split(':');

//   const result = [`${key1}:${value2}`, `${key2}:${value1}`];

//   return result
// }

// console.log(tailSwap(['abc:123', 'cde:456']));
// console.log(tailSwap(['a:12345', '777:xyz']));

// ///////////////////////////////////////////

// input: str, arr
// output: arr

// Algo
// 1. iteration arr
// 2. filter
// 3. toLowerCase()
// 4. return
// function wordSearch(query, seq) {
//   const result = seq.filter(elemStr => elemStr.toLowerCase().includes(query.toLowerCase()));
//   if (result.length < 1) {
//     return ['Empty'];
//   }
//   return result;
// }

// console.log(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc'])); //["ab", "abc", "zab"])
// console.log(wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc'])); //["ab", "abc", "zab"])
// console.log(wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc'])); // ["aB", "Abc", "zAB"])
// console.log(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc'])); // ["Empty"])

// ///////////////////////////////////////////

// input: str, str
// output: arr

// Algo
// create empty arr
// iteration
// if
// push
// v1
// function spot(s1, s2) {
//   const result = [];
//   for (let i = 0; i < s1.length; i += 1) {
//     if (s1[i] !== s2[i]) {
//       result.push(i);
//     }
//   }
//   return result;
// }
//
// v2
// function spot(s1, s2) {
//   return [...s1].reduce((acc, elem, index) => (elem !== s2[index] ? [...acc, index] : acc), []);
// }
//
// console.log(spot('abcdefg', 'abcqetg'));
// console.log(spot('Hello World!', 'hello world.'));
// console.log(spot('FixedGrey', 'FixedGrey'));

// ///////////////////////////////////////////

// function GeometricSequenceSum(a, r, n) {
//   if (r === 1) {
//     return a * n;
//   }
//   return (a * (1 - Math.pow(r, n))) / (1 - r);
// }

// console.log(GeometricSequenceSum(2, 3, 5)); // 242
// console.log(GeometricSequenceSum(1, 1, 2)); // 2
// console.log(GeometricSequenceSum(2, 2, 10)); // 2046
// console.log(GeometricSequenceSum(1, -2, 10)); // -341
// console.log(GeometricSequenceSum(1, 0.5, 10)); // 1.998046875

// ///////////////////////////////////////////

// // input: arr, num
// // output: arr
// //
// // Algo
// // 1. Array.isArray
// // 2. iteration arr
// // 3. if elem % 2 === 0

// const increaseEvent = (arr, delta) => {
//   if (!Array.isArray(arr)) return null;
//   return arr.map(elem => (elem % 2 === 0 ? elem + delta : elem));
// };

// console.log(increaseEvent([2, 5, 6, 8, 11, 9, 4], 20));

// ///////////////////////////////////////////

// // input: arr
// // output: arr
// //
// // Algo
// // 1. Array.isArray(arr)
// // 2. create copy arr
// // 3. return copyArr

// const cloneArr = arr => {
//   if (!Array.isArray(arr)) return null;
//   const copyArr = [...arr];
//   return copyArr;
// };

// ///////////////////////////////////////////

// // input: arr, arr, str, num
// // output: num

// // Algo
// // find index
// // use if
// // balances[index] -= amount

// const withdraw = (clients, balances, client, amount) => {
//   const index = clients.indexOf(client);
//   if (balances[index] <= amount) {
//     return -1;
//   }
//   return balances[index] - amount;
// };

// // examples
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])

// ///////////////////////////////////////////

// input: str
// output: boolean

// Algo
// 1. split('')
// 2. iteration
// 3. if ' ' return false

// function showMe(yourID) {
//   return yourID.split('').every(elem => elem !== ' ');
// }

// console.log(showMe('Francis'));
// console.log(showMe('Jean-Eluard'));
// console.log(showMe('Le Mec'));
// console.log(showMe('Mémé Gertrude'));

// ///////////////////////////////////////////

// // Input: arr, str ->> filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya')
// // Output: arr ->> ['Olivya', 'Nastya']
// //
// // Algo
// // 1. iteration
// // 2. check length
// // 3. find text in elem

// const filterNames = (arr, text) => arr.filter(name => (name.length > 5 ? name.includes(text) : ''));

// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));

// ///////////////////////////////////////////

// // input: arr
// // output: num

// // Algo
// // 1.iteration
// // 2. sum elem
// // 3. result / arr length

// const arrAverage = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length;

// console.log(arrAverage([2, 5, 6, 3]));

// ///////////////////////////////////////////

// // input: arr
// // output: arr
// //
// // Algo
// // 1. iteration
// // 2. elem * elem
// function squareArray(arr) {
//   if (!Array.isArray(arr)) return null;
//   return arr.map(num => num * num);
// }

// // examples
// console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
// console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
// console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]

// /////////////////////////////////////////////

// // input: arr
// // output: arr

// // Algo
// // 1. iteration
// // 2. concat arr elem
// // 3. sort arr
// //
// //V1
// // const flatArray = arr => arr.reduce((acc, elem) => acc.concat(elem), []).sort();

// //V2
// const flatArray = arr => arr.flat().sort();

// console.log(flatArray([6, [3, 4, 2], 7, 1, [5]]));

// /////////////////////////////////////////////

// // input: obj, arr
// // output: obj
// //
// // Algo
// // 1. create empty obj
// // 2. iteration obj
// // 3. iteration arr
// // 4. use if()

// const pickProps = (obj, props) => {
//   const newObj = {};
//   for (let i of props) {
//     for (let key in obj) {
//       if (i === key) {
//         newObj[key] = obj[key];
//       }
//     }
//   }
//   return newObj;
// };

// // examples
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }

// /////////////////////////////////////////////

// // input: obj
// // output: obj
// //
// // Algo
// // 1. create new obj
// // 2. iteration
// // 3. use if

// const getAdults = obj => {
//   const result = {};
//   for (let key in obj) {
//     if (obj[key] >= 18) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };

// // examples
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
// console.log(getAdults({})); // ==> {}:

// ///////////////////////////////////////////////

// // input: obj
// // output: arr
// //
// // Algo
// // get values
// // iteration
// // concat
// // get name

// const getPeople = obj =>
//   Object.values(obj)
//     .reduce((acc, elem) => acc.concat(elem), [])
//     .map(({ name }) => name);

// ///////////////////////////////////////////////

// // input: arr
// // output: num

// const getTotalRevenue = transactions => transactions.reduce((acc, elem) => acc + elem.amount, 0);

// // examples
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' }
// ];

// const result = getTotalRevenue(dayTransactions); // ==> 310

// ///////////////////////////////////////////////

/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// // function buildObject(keysList, valuesList) {
// //   const newObj = {};
// //   for (let i = 0; i < keysList.length; i += 1) {
// //     newObj[keysList[i]] = valuesList[i];
// //   }
// //   return newObj;
// // }

// function buildObject(keysList, valuesList) {
//   return keysList.reduce((obj, elem, index) => ({ ...obj, [elem]: valuesList[index] }), {});
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Vasyl', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }

// console.log(result);

// ///////////////////////////////////////////////
// input: obj, obj
// output: boolean
//
// Algo
// 1. get key and value
// 2. compare length
// 3. compare key and value

// function compareObjects(firstObj, secondObj) {
//   const keys1 = Object.keys(firstObj);
//   const keys2 = Object.keys(secondObj);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   return !keys1.some(key => {
//     console.log(secondObj[key]);
//     return firstObj[key] !== secondObj[key];
//   });
// }

// // examples
// const obj1 = {
//   name: 'Tom',
//   age: 17
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17
// };

// const obj5 = {
//   age: 17,
//   name: 'Tom'
// };

// console.log(compareObjects(obj1, obj2)); // ==> false
// console.log(compareObjects(obj2, obj3)); // ==> false
// console.log(compareObjects(obj1, obj4)); // ==> true
// console.log(compareObjects(obj4, obj5)); // ==> true

// ///////////////////////////////////////////////

// // input: obj
// // output: arr
// //
// // Algo:
// // 1. use Object.entries
// // 1. iteration
// // 2. add id
// // 3. sort

// const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(([id, costumer]) => ({ id, ...costumer }))
//     .sort((a, b) => a.age - b.age);
// };

// const costumer = {
//   'customer-id-1': {
//     name: 'William',
//     age: 22
//   },
//   'customer-id-2': {
//     name: 'Tom',
//     age: 17
//   },
//   'customer-id-3': {
//     name: 'Bob',
//     age: 19
//   }
// };

// console.log(getCustomersList(costumer));

// ///////////////////////////////////////////////

// function calcExpenses(transactions) {
//   return Math.abs(transactions.reduce((acc, elem) => (elem < 0 ? acc + elem : acc), 0));
// }

// // examples
// console.log(calcExpenses([25, 40, -74, 58, -100, -5])); // returns ==> 179
// console.log(calcExpenses([5000, 450])); // returns ==> 0

// ///////////////////////////////////////////////

// function getStatuses(results) {
//   if (results.some(elem => elem < 0 || elem > 100)) {
//     return null;
//   }
//   return results.map(elem => (elem >= 90 ? 'Passed' : 'Failed'));
// }

// // examples
// console.log(getStatuses([25, 40, 74, 58, 100, 5])); // returns ==> ['Failed', 'Failed', 'Failed', 'Failed', 'Passed', 'Failed']
// console.log(getStatuses([66, 100, -2])); // returns ==> null
// console.log(getStatuses([1000, 450])); // returns ==> null

// ////////////////////////////////////////////////

// // input: arr, callback
// // output: arr
// //
// // Algo
// // 1. create empty arr
// // 2. iteration arr
// // 3. add callback with if
// // 4.

// const filterArrayElements = (arr, callback) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const elem = arr[i];
//     if (callback(elem, i, arr)) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// };

// // ////////////////////////////////////////////////

// // input: arr, callback
// // output: arr
// //
// // Algo
// // 1. create empty arr
// // 2. iteration arr
// // 3. add callback with if
// // 4.

// const mapArrayElements = (arr, callback) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const elem = arr[i];
//     newArr.push(callback(elem, i, arr));
//   }

//   return newArr;
// };

// // ////////////////////////////////////////////////

// // input: arr, arr
// // output: obj
// //
// // Algo
// // 1. create new arr
// // 2. iteration
// // 3. add
// // ////////////////////////////////////////////////
// // v1
// // function buildObject(keysList, valuesList) {
// //   const result = [];
// //   for (let i = 0; i < keysList.length; i += 1) {
// //     result[keysList[i]] = valuesList[i];
// //   }
// //   return result;
// // }

// // v2
// // function buildObject(keysList, valuesList) {
// //   return keysList.reduce((acc, elem, index) => ({ ...acc, [elem]: valuesList[index] }), {});
// // }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Vasyl', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }
// console.log(result);

// // ////////////////////////////////////////////////

// // input: obj, obj
// // output: obj
// //
// // Algo
// // 1. Object.entries(first)
// // 2. iteration filter
// // 3. add elem (reduce)

// function objIntersection(firstObj, secondObj) {
//   const firstObject = Object.entries(firstObj);
//   return firstObject
//     .filter(([key, value]) => Object.keys(secondObj).includes(key) && secondObj[key] === value)
//     .reduce((acc, el, index) => ({ ...acc, [el[0]]: el[1] }), {});
// }

// // examples
// // #1
// const obj1 = { id: 1, points: 2, signature: 'saas' };
// const obj2 = { id: 1, points: 5, signature: 'teewe' };
// console.log(objIntersection(obj1, obj2)); // returns ==> { id: 1 }

// // #2
// const obj3 = { id: 1, points: 2, signature: 'eeew' };
// const obj4 = { signature: 'eeew' };
// console.log(objIntersection(obj3, obj4)); // returns ==> { sihnature: 'eeew' }

// // #3
// const obj5 = { id: 1, points: 2, signature: 'eeew' };
// const obj6 = { width: 100, height: 200 };
// console.log(objIntersection(obj5, obj6)); // returns ==> {}

// // ////////////////////////////////////////////////

// /*
//  * @param {object[]} products
//  * @param {object} filterObj
//  * @return {object}
//  */

// // Algo
// // object.entries(filterObj)
// // iteration arr
// // if

// function filterProducts(products, filterObj) {
//   return products.filter(product =>
//     Object.keys(filterObj).every(key => {
//       if (typeof product[key] === 'number') {
//         return product[key] <= filterObj[key];
//       }
//       return product[key] === filterObj[key];
//     })
//   );
// }

// const products = [
//   {
//     id: 1,
//     name: 'Laptop',
//     price: 999.99,
//     city: 'New York',
//     category: 'Electronics'
//   },
//   {
//     id: 2,
//     name: 'Smartphone',
//     price: 599.99,
//     city: 'Los Angeles',
//     category: 'Electronics'
//   },
//   {
//     id: 3,
//     name: 'Desk Chair',
//     price: 89.99,
//     city: 'Chicago',
//     category: 'Furniture'
//   },
//   {
//     id: 4,
//     name: 'Coffee Maker',
//     price: 49.99,
//     city: 'Houston',
//     category: 'Home Appliances'
//   },
//   {
//     id: 5,
//     name: 'Book',
//     price: 19.99,
//     city: 'New York',
//     category: 'Books'
//   },
//   {
//     id: 6,
//     name: 'T-shirt',
//     price: 14.99,
//     city: 'Phoenix',
//     category: 'Clothing'
//   },
//   {
//     id: 7,
//     name: 'Bicycle',
//     price: 299.99,
//     city: 'San Antonio',
//     category: 'Sports'
//   }
// ];

// // examples
// // #1
// console.log(filterProducts(products, { city: 'New York' }));
// // returns ==>
// // [
// //   { id: 1, name: 'Laptop', price: 999.99, city: 'New York', category: 'Electronics' },
// //   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
// // ];

// // #2
// console.log(filterProducts(products, { price: 50 }));
// // returns ==>
// // [
// //   { id: 4, name: 'Coffee Maker', price: 49.99, city: 'Houston', category: 'Home Appliances' },
// //   { id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' },
// //   { id: 6, name: 'T-shirt', price: 14.99, city: 'Phoenix', category: 'Clothing' },
// // ];

// // #3
// console.log(filterProducts(products, { city: 'New York', price: 50 }));
// // returns ==>
// // [{ id: 5, name: 'Book', price: 19.99, city: 'New York', category: 'Books' }];

// // input arr, arr
// // output: arr
// //
// // Algo
// // 1. iteration
// // 2. if
// // 3. add

// // ////////////////////////////////////////////////

// function markAdmins(usersList, adminIds) {
//   return usersList.map(elem => {
//     if (elem.id === adminIds[0] || elem.id === adminIds[1]) {
//       elem.isAdmin = true;
//     } else {
//       elem.isAdmin = false;
//     }
//     return elem;
//   });
// }

// // examples
// const adminIds = ['1', '3'];
// const users = [
//   { id: '1', name: 'Bob' },
//   { id: '2', name: 'Tom' },
//   { id: '3', name: 'Sam' },
//   { id: '4', name: 'Tad' }
// ];
// console.log(markAdmins(users, adminIds));

// // result:
// // [
// //    { id: '1', isAdmin: true, name: 'Bob' },
// //    { id: '2', isAdmin: false, name: 'Tom' },
// //    { id: '3', isAdmin: true, name: 'Sam' },
// //    { id: '4', isAdmin: false, name: 'Tad' }
// // ];

// // ////////////////////////////////////////////////

// const filterArrayElements = (arr, callback) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };
