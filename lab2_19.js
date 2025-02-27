function processArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0 && arr[i] > 0) {  
            arr[i] *= 3;
        } 
        else if (i % 2 === 0 && arr[i] < 0) {
           
            arr[i] /= 5;
        }
    }
    return arr;
}


const arr = [2, 3, -4, -5, 6, 7, 8, 9];
document.write(arr, '<br>');

const processedArray = processArray(arr);
document.write(processedArray);