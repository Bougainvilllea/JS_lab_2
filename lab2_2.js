// #2

function age() {
    let value = parseInt(document.getElementById('input_id').value);
    if (value < 18) {
        alert('Привет, малыш!')
    }
    else {
        alert("Здравствуйте, юноша!")
    }
}
