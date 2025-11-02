/**
 * ПРАКТИЧЕСКОЕ ЗАДАНИЕ #9: Новые темы
 * 
 * Темы для отработки:
 * 1. Удаление свойств и объектов
 * 2. Контекст выполнения
 * 3. Функции-конструкторы расширенно
 * 4. Свойство prototype функции-конструктора
 * 5. Конструктор Date и его методы
 * 6. Методы объекта Math
 */

console.log('=== НАЧАЛО ОТРАБОТКИ ===\n');

// ============================
// 1. УДАЛЕНИЕ СВОЙСТВ И ОБЪЕКТОВ
// ============================
console.log('--- 1. УДАЛЕНИЕ СВОЙСТВ И ОБЪЕКТОВ ---');

const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'black',
    engine: 'V6'
};

// ЗАДАНИЕ 1.1: Удалить свойство color из объекта car
// Используй оператор delete
delete car.color;
console.log(car);

// ЗАДАНИЕ 1.2: Создай объект и удали из него несколько свойств
// Затем проверь, существуют ли эти свойства через оператор in или hasOwnProperty
const car2 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'black',
    engine: 'V6'
};

delete car2.color;
delete car2.year;
console.log(car2);
console.log('color' in car2); // false
console.log(car2.hasOwnProperty('color')); // false
console.log('year' in car2); // false
console.log(car2.hasOwnProperty('year')); // false


// ============================
// 2. КОНТЕКСТ ВЫПОЛНЕНИЯ
// ============================
console.log('\n--- 2. КОНТЕКСТ ВЫПОЛНЕНИЯ ---');

// ЗАДАНИЕ 2.1: Продемонстрируй разницу между глобальным и локальным контекстом
// Создай переменную в глобальном контексте и переменную с таким же именем в функции
// Покажи, что они не перезаписывают друг друга

// Глобальная переменная (доступна везде в коде)
let name = 'Глобальное имя';

function demonstrateContext() {
    // Локальная переменная с таким же именем (видна только внутри функции)
    // Она "затеняет" глобальную переменную внутри функции
    let name = 'Локальное имя';
    
    console.log('Внутри функции name =', name); // Выведет: 'Локальное имя'
}

// Вызываем функцию
demonstrateContext();

// После выполнения функции глобальная переменная не изменилась
console.log('В глобальном контексте name =', name); // Выведет: 'Глобальное имя'

// ЗАДАНИЕ 2.2: Создай вложенные функции и покажи, как они видят переменные
// из внешних контекстов (замыкания)

// Пример для понимания:
let globalVar = 'Я глобальная переменная';

function outerFunction() {
    let localVar = 'Я локальная переменная';
    console.log('В outerFunction:', globalVar, localVar);
    
    function innerFunction() {
        let innerVar = 'Я переменная внутренней функции';
        console.log('В innerFunction:', globalVar, localVar, innerVar);
    }
    
    innerFunction();
    // console.log(innerVar); // Ошибка! innerVar недоступна здесь
}

outerFunction();

// ЗАДАНИЕ 2.3: Создай свой пример с вложенными функциями и разными контекстами
let globalVar2 = 'Я глобальная переменная';

function outerFunction2() {
    let localVar2 = 'Я локальная переменная';
    console.log('В outerFunction2:', globalVar2, localVar2);
    
    function innerFunction2() {
        let innerVar2 = 'Я переменная внутренней функции';
        console.log('В innerFunction2:', globalVar2, localVar2, innerVar2);
    }
    
    innerFunction2();
    // console.log(innerVar2); // Ошибка! innerVar2 недоступна здесь
}

outerFunction2();
console.log('В глобальном контексте globalVar2 =', globalVar2); // Выведет: 'Я глобальная переменная'

// ============================
// 3. ФУНКЦИИ-КОНСТРУКТОРЫ РАСШИРЕННО
// ============================
console.log('\n--- 3. ФУНКЦИИ-КОНСТРУКТОРЫ РАСШИРЕННО ---');

// ЗАДАНИЕ 3.1: Создай функцию-конструктор Book с параметрами:
// title, author, year, pages
// Добавь метод getInfo(), который возвращает строку с информацией о книге
// Добавь метод getAge(), который считает, сколько лет книге (от текущего года)
function Book(title, author, year, pages) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.getInfo = function() {
        return `${this.title} ${this.author} ${this.year} ${this.pages}`;
    };
    this.getAge = function() {
        return new Date().getFullYear() - this.year;
    };
};

const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 180);
console.log(book.getInfo());
console.log(book.getAge());


// ЗАДАНИЕ 3.2: Создай функцию-конструктор Student с параметрами:
// name, age, course
// Добавь свойство grades (массив оценок) и методы:
// - addGrade(grade) - добавляет оценку в массив
// - getAverageGrade() - возвращает среднюю оценку
// - isExcellent() - возвращает true, если средняя оценка >= 4.5
function Student(name,age,course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.grades = [];
    this.addGrade = function(grade) {
        this.grades.push(grade);
    }
    this.getAverageGrade = function(){
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    }
    this.isExcellent = function(){
        return this.getAverageGrade() >= 4.5;
    };
};

const student = new Student('John Doe', 20, 1);
student.addGrade(4);
student.addGrade(5);
student.addGrade(5);
student.addGrade(4);
console.log(student.getAverageGrade());
console.log(student.isExcellent());


// ============================
// 4. СВОЙСТВО PROTOTYPE ФУНКЦИИ-КОНСТРУКТОРА
// ============================
console.log('\n--- 4. СВОЙСТВО PROTOTYPE ---');

// ЗАДАНИЕ 4.1: Добавь метод через prototype к функции-конструктору Book
// Например, метод getTitle() или formatAuthor()
// Создай несколько объектов Book и проверь, что метод доступен всем
Book.prototype.getTitle = function() {
    return this.title;
};
const book2 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 180);
console.log(book2.getTitle());


// ЗАДАНИЕ 4.2: Добавь метод через prototype к функции-конструктору Student
// Например, метод getFullInfo() или getStatus()
Student.prototype.getFullInfo = function() {
    return `${this.name} ${this.age} ${this.course}`;
};
const student2 = new Student('John Doe', 20, 1);
console.log(student2.getFullInfo());


// ЗАДАНИЕ 4.3: Покажи разницу между методом, добавленным через this в конструкторе,
// и методом, добавленным через prototype
// (один будет копироваться в каждый объект, другой - один раз в прототипе)

// Пример для понимания:
function Person(name) {
    this.name = name;
    // Метод в конструкторе - копируется в каждый объект
    this.sayHello = function() {
        return `Привет, я ${this.name}`;
    };
}

// Метод через prototype - один на все объекты
Person.prototype.sayGoodbye = function() {
    return `До свидания от ${this.name}`;
};


// ============================
// 5. КОНСТРУКТОР Date И ЕГО МЕТОДЫ
// ============================
console.log('\n--- 5. КОНСТРУКТОР Date ---');

// ЗАДАНИЕ 5.1: Создай объект Date с текущей датой и временем
// Выведи: год, месяц, день, часы, минуты, секунды
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());

// ЗАДАНИЕ 5.2: Создай объект Date с конкретной датой (например, твой день рождения)
// Вычисли, сколько дней прошло с этой даты до сегодня
const date2 = new Date('2008-07-06');
const today = new Date();
const diffTime = Math.abs(today.getTime() - date2.getTime());
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log(diffDays);

// ЗАДАНИЕ 5.3: Создай функцию, которая принимает дату и возвращает:
// - день недели (понедельник, вторник и т.д.)
// - полную дату в формате "ДД.ММ.ГГГГ"
function getDayOfWeek(date) {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return days[date.getDay()];
}
console.log(getDayOfWeek(date));
console.log(getDayOfWeek(date2));

// ЗАДАНИЕ 5.4: Создай функцию, которая сравнивает две даты и говорит,
// какая из них раньше
function compareDates(date1, date2) {
    if (date1.getTime() > date2.getTime()) {
        return 'Первая дата позже';
    }
    if (date1.getTime() < date2.getTime()) {
        return 'Первая дата раньше';
    } 

    return 'Даты равны';
    
}
console.log(compareDates(date, date2));

// Полезные методы Date:
// - new Date() - текущая дата
// - new Date(year, month, day) - конкретная дата
// - getFullYear(), getMonth(), getDate()
// - getHours(), getMinutes(), getSeconds()
// - getDay() - день недели (0=воскресенье, 1=понедельник)
// - getTime() - миллисекунды с 1970 года


// ============================
// 6. МЕТОДЫ ОБЪЕКТА Math
// ============================
console.log('\n--- 6. МЕТОДЫ ОБЪЕКТА Math ---');

// ЗАДАНИЕ 6.1: Используй Math для работы с числами:
// - Math.round() - округление до ближайшего целого
// - Math.floor() - округление вниз
// - Math.ceil() - округление вверх
// - Math.abs() - абсолютное значение
// Создай примеры для каждого метода

// ЗАДАНИЕ 6.2: Используй Math для степеней и корней:
// - Math.pow(base, exponent) или base ** exponent
// - Math.sqrt() - квадратный корень
// - Math.cbrt() - кубический корень (ES6)
// Вычисли площадь круга с радиусом 5 (π * r²)

// ЗАДАНИЕ 6.3: Используй Math для случайных чисел:
// - Math.random() - случайное число от 0 до 1
// Создай функцию, которая возвращает случайное целое число от min до max (включительно)

// ЗАДАНИЕ 6.4: Используй Math для нахождения максимума и минимума:
// - Math.max() - максимальное значение
// - Math.min() - минимальное значение
// Найди максимальное и минимальное число в массиве [45, 12, 89, 3, 67, 23]

// ЗАДАНИЕ 6.5: Используй Math.PI и Math.E (константы)
// Вычисли длину окружности с радиусом 10 (2 * π * r)

// ============================
// 7. КОМБИНИРОВАННОЕ ЗАДАНИЕ
// ============================
console.log('\n--- 7. КОМБИНИРОВАННОЕ ЗАДАНИЕ ---');

// ЗАДАНИЕ 7.1: Создай функцию-конструктор Task с полями:
// - title (название задачи)
// - description (описание)
// - createdAt (дата создания через new Date())
// - status ('pending', 'in_progress', 'completed')
// Добавь методы через prototype:
// - getDaysSinceCreated() - сколько дней прошло с создания
// - changeStatus(newStatus) - меняет статус
// - getInfo() - возвращает полную информацию о задаче
function Task(title, description, createdAt, status) {
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.status = status;
};
Task.prototype.getDaysSinceCreated = function() {
    return Math.ceil((new Date().getTime() - this.createdAt.getTime()) / (1000 * 60 * 60 * 24));
}
Task.prototype.changeStatus = function(newStatus) {
    this.status = newStatus;
}
Task.prototype.getInfo = function() {
    return `${this.title} ${this.description} ${this.createdAt} ${this.status}`;
}
const task = new Task('Task 1', 'Description 1', new Date(), 'pending');
console.log(task.getDaysSinceCreated());
console.log(task.changeStatus('in_progress'));
console.log(task.getInfo());

// ЗАДАНИЕ 7.2: Создай массив из нескольких Task
// Используй Math для генерации случайных данных
// Отсортируй задачи по дате создания (от новых к старым)
const tasks = [
    new Task('Task 1', 'Description 1', new Date(), 'pending'),
    new Task('Task 2', 'Description 2', new Date(), 'in_progress'),
    new Task('Task 3', 'Description 3', new Date(), 'completed'),
];
// ============================
// ПРОВЕРКА РЕЗУЛЬТАТОВ
// ============================
console.log('\n=== КОНЕЦ ОТРАБОТКИ ===');

