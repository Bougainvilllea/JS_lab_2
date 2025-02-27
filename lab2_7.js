function sequenceMember(n) {

    if (n === 1) {
        return 1;
    }

    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += sequenceMember(i);
    }

    return Math.sin(sum);
}

const n = 5;
const result = sequenceMember(n);
document.write(result);