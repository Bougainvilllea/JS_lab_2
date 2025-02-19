let variable = "Глобальная переменная";
function f() {
    let variable = "Локальная переменная";
    document.write(variable, "<br>");
}
f();
document.write(variable);

// локальная переменная, объявленная внутри функции, 
// не влияет на глобальную переменную с тем же именем