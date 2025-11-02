/**
 * ПРАКТИЧЕСКОЕ ЗАДАНИЕ #3: Объекты и функции
 * 
 * Уровень: выбери «базовая» | «средняя» | «продвинутая» (по умолчанию: средняя)
 * 
 * Данные: массив пользователей с вложенными объектами и массивами
 */

// ===== ДАННЫЕ =====
const users = [
    { id: 1, name: '  анастасия  ', age: 28, balance: 1250.75, isActive: true,  tags: ['js', 'node'],   address: { city: 'Moscow', street: 'Tverskaya', house: 10 } },
    { id: 2, name: 'иван',           age: 34, balance: 980.10,  isActive: false, tags: ['python'],       address: { city: 'Kazan',  street: 'Baumana',  house: 5 } },
    { id: 3, name: 'ольга',          age: 21, balance: 320.00,  isActive: true,  tags: ['js', 'react'],  address: { city: 'Moscow', street: 'Arbat',    house: 3 } },
    { id: 4, name: 'Петр',           age: 28, balance: 1575.30, isActive: true,  tags: ['go', 'devops'], address: { city: 'Sochi',  street: 'Resort',   house: 1 } },
    { id: 5, name: '  мария',        age: 34, balance: 1575.30, isActive: false, tags: ['react'],        address: { city: 'Kazan',  street: 'Kremlin',  house: 9 } },
];

// ===== ВСПОМОГАТЕЛЬНЫЕ =====
const roundTo = (x, n = 2) => Math.round((x + Number.EPSILON) * 10 ** n) / 10 ** n;

// ===== ЗАДАЧИ (СРЕДНЯЯ) =====

// 1) Создать индекс по id: { [id]: user }
function indexById(list) {
    return list.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;

    }, {})
}

// 2) Вернуть только активных пользователей
function getActiveUsers(list) {
    return list.filter(user => user.isActive);
}

// 3) Найти первого пользователя с тегом tag
function findUserByTag(list, tag) {
    return list.find(item => Array.isArray(item.tags) && item.tags.includes(tag));
}

// 4) Посчитать общую сумму балансов пользователей по городу
function getTotalBalanceByCity(list, city) {
    return list.reduce((sum, item) => {
        const inCity = item && item.address && item.address.city === city;
        return inCity ? sum + item.balance : sum;
    }, 0);
}



// console.log('Индекс по id:', indexById(users)[1]);
// console.log('Активные пользователи:', getActiveUsers(users));
// console.log('Пользователь с тегом "react":', findUserByTag(users, 'react'));
console.log('Сумма балансов по Moscow:', roundTo(getTotalBalanceByCity(users, 'Moscow')));
