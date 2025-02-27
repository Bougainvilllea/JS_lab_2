function checkArray(arr) {
    let flag = true;
    let breakIndex = -1;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            flag = false;
            breakIndex = i + 1;
            break;
        }
    }

    if (flag) {
        document.write(arr.reverse(), '<br>');
    } else {

        document.write(breakIndex, '<br>');
    }
}


const arr1 = [5, 4, 3, 2, 1];
const arr2 = [5, 4, 6, 2, 1];

checkArray(arr1);
checkArray(arr2);