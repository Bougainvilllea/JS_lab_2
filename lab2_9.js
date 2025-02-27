const countries = ["Russia", "USA", "China", "India", "Brazil"];
const population = [125653235, 45655556568, 1453265463213, 55412588745, 34565454654];

function printFor(countries, population) {
    for (let i = 0; i < countries.length; i++) {
        document.write(`${countries[i]}: ${population[i]}`, '<br>');
    }
}
function printForIn(countries, population) {
    for (let i in countries) {
        document.write(`${countries[i]}: ${population[i]}`, '<br>');
    }
}

printFor(countries, population);

printForIn(countries, population);