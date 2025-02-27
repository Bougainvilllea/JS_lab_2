function findMedian(arr1, arr2) {
    const combined = arr1.concat(arr2);
    
    combined.sort();
    const n = combined.length;
    
    if (n % 2 === 1) {
        return combined[Math.floor(n / 2)];
    }

    else {
        const mid1 = combined[n / 2 - 1];
        const mid2 = combined[n / 2];
        return (mid1 + mid2) / 2;
    }
}

const arr1 = [1, 2, 5, 4, 6];
const arr2 = [8, 2, 5, 9, 5];
const median = findMedian(arr1, arr2);
document.write(median);
