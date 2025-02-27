function calculatePerimeter(coords) {
    let perimeter = 0;
    const n = coords.length / 2; 

    for (let i = 0; i < n; i++) {

        const x1 = coords[2 * i];
        const y1 = coords[2 * i + 1];

        const x2 = coords[2 * ((i + 1) % n)];
        const y2 = coords[2 * ((i + 1) % n) + 1];
        
        const dx = x2 - x1;
        const dy = y2 - y1;
        const sideLength = Math.sqrt(dx * dx + dy * dy);
        
        perimeter += sideLength;
    }

    return perimeter;
}


const coords = [0, 0, 4, 0, 4, 3]; 
const perimeter = calculatePerimeter(coords);
document.write(`Периметр: ${perimeter}`); 