const booksAuthors = {
    "Пушкин": ["Евгений Онегин", "Капитанская дочка", "Руслан и Людмила"],
    "Есенин": ["Анна Снегина", "Черный человек"],
    "Данцова": ["Крутые наследнички", "Любовь на острие ножа"],
    "Толстой": ["Война и мир", "Анна Каренина"]
};

// Просматриваем массив в цикле и выводим авторов и их книги
for (const author in booksAuthors) {
    if (booksAuthors.hasOwnProperty(author)) {
        document.write(`Автор: ${author}`, '<br>');
        document.write("Книги:", booksAuthors[author].join(", "), '<br>');
        document.write("-------------------", '<br>');
    }
}