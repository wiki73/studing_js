/**
 * ПРАКТИЧЕСКОЕ ЗАДАНИЕ #1: Работа с числами
 * 
 * ЗАДАЧА: Создать калькулятор статистики оценок студентов
 * 
 * Требования:
 * 1. Создайте переменные для хранения массива оценок (используйте const/let)
 * 2. Реализуйте функции для:
 *    - Вычисления средней оценки
 *    - Поиска максимальной оценки
 *    - Поиска минимальной оценки
 *    - Подсчета количества оценок выше среднего
 *    - Округления результатов до 2 знаков после запятой
 * 
 * Операции с числами, которые нужно использовать:
 * - Арифметические операторы (+, -, *, /, %)
 * - Методы Math (Math.max, Math.min, Math.round)
 * - Метод toFixed() для округления
 * 
 * Пример данных:
 * const grades = [85, 92, 78, 96, 88, 74, 91, 87];
 * 
 * Ожидаемый результат:
 * Средняя оценка: 86.38
 * Максимальная оценка: 96
 * Минимальная оценка: 74
 * Оценок выше среднего: 4
 */

// ===== ВАШ КОД НИЖЕ =====

// 1. Создайте массив оценок (используйте const)
const grades = [85, 92, 78, 96, 88, 74, 91, 87];

// 2. Функция для вычисления средней оценки
function calculateAverage(gradesArray) {
    let sum = 0;
    for (let item of gradesArray) {
        sum += item
    }
    return sum / gradesArray.length;
}

// 3. Функция для поиска максимальной оценки
function findMaxGrade(gradesArray) {
    return Math.max(...gradesArray);
}

// 4. Функция для поиска минимальной оценки
function findMinGrade(gradesArray) {
    return Math.min(...gradesArray);
    
}

// 5. Функция для подсчета оценок выше среднего
function countAboveAverage(gradesArray) {
    let count = 0;
    let average = calculateAverage(gradesArray);
    for (let item of gradesArray) {
        if (item > average) { 
            count++;
        }
    }
    return count; 
}
function getMedians (gradesArray) {
    const sorted = [...gradesArray].sort((a,b) => a-b);
    if (sorted.length % 2 === 1) {
        return sorted[Math.floor(sorted.length/2)]
    }
    else {
        return (sorted[sorted.length/2  - 1] + sorted[sorted.length/2]) / 2;
        }
}

function countGood( gradesArray) {
    let count = 0;
    for (let item of gradesArray) {
        if (item > 90) {
            count++
        }
    }
    return count;
}
function around (gradesArray) {
    let average  = calculateAverage(gradesArray) 
    return Math.round(average)
}
// 6. Функция для отображения статистики (округление до 2 знаков)
function displayStatistics(gradesArray) {
    const average = calculateAverage(gradesArray);
    const max = findMaxGrade(gradesArray);
    const min = findMinGrade(gradesArray);
    const aboveAverage = countAboveAverage(gradesArray);
    const medians = getMedians(gradesArray)
    const Good = countGood(gradesArray)
    const aroundNum = around(gradesArray)
    
    console.log('=== СТАТИСТИКА ОЦЕНОК ===');
    console.log(`Средняя оценка: ${average.toFixed(2)}`);
    console.log(`Максимальная оценка: ${max}`);
    console.log(`Минимальная оценка: ${min}`);
    console.log(`Оценок выше среднего: ${aboveAverage}`);
    console.log(`Медиана оценок: ${medians}`);
    console.log(`Хороших оценок: ${Good}`);
    console.log(`Оруглёная средняя оценка: ${aroundNum}`);
}

// ===== ПРОВЕРКА РАБОТЫ =====
displayStatistics(grades);
// ===== ДОПОЛНИТЕЛЬНЫЕ ЗАДАНИЯ (по желанию) =====
// 1. Добавьте функцию для вычисления медианы оценок --- Сделано
// 2. Добавьте функцию для определения процента оценок "отлично" (>= 90) --- сделано
// 3. Создайте функцию, которая округляет среднюю оценку до ближайшего целого -- сделано
