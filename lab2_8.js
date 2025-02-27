let arr = ["Яблоко", "Апельсин", "Слива"];
document.write(arr[1], '<br>');
document.write(arr.length, '<br>');
arr.pop(1);
arr.forEach((elem) => {
    document.write(elem, '<br>')
})