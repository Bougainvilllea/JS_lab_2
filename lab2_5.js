function math_func(x, y, z) {
    let u = (Math.max(x, y) + Math.max(x + y, z)) / Math.pow(Math.max(0.5, x + z), 2)
    return u;
}

document.write(math_func(1, 1, 1))