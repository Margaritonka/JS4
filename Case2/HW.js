// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]


let int = [1, 2, 3, 4, 5, 6, 7];
console.log(int);
let newInt = int.slice(0, 3);
let newInt2 = int.slice(5, 7);
newInt.push(...newInt2);
console.log(newInt);





