// #1

// difference1(x, y)
function difference1() {
    let value1 = parseInt(document.getElementById('input_id1').value);
    let value2 = parseInt(document.getElementById('input_id2').value);
    let result = value1 - value2;
    alert(result);
    // alert(difference2(x, y))
}

function difference2(x, y) {
    return x- y;
}

let a = prompt();
let b = prompt();
alert(difference2(a, b));

