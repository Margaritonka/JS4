// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random(0, 10) * 10));
}
console.log(arr);



let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);



let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(min);



let find = 3;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
        console.log(`В массиве есть число ${find}. Его индекс ${i}`);
    }
}