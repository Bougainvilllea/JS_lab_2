let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

const max = Math.max(...arr);
const min = Math.min(...arr);

const maxIndex = arr.indexOf(max);
const minIndex = arr.indexOf(min);

[arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];

document.write("Максимальное значение:", max);
document.write("Минимальное значение:", min);
document.write("Массив после замены:", arr);