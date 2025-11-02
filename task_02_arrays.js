/**
 * ПРАКТИЧЕСКОЕ ЗАДАНИЕ #2: Массивы PRO
 * 
 * Уровень: выбери «базовая» | «средняя» | «продвинутая» (по умолчанию: средняя)
 * 
 * Данные: массив товаров с ценой, категорией и рейтингом
 */

// ===== ДАННЫЕ =====
const products = [
    { id: 1, title: 'Ноутбук', category: 'electronics', price: 899.99, rating: 4.6 },
    { id: 2, title: 'Наушники', category: 'electronics', price: 59.90, rating: 4.1 },
    { id: 3, title: 'Кофеварка', category: 'home', price: 129.00, rating: 4.4 },
    { id: 4, title: 'Фитнес-браслет', category: 'wearables', price: 39.99, rating: 3.9 },
    { id: 5, title: 'Кроссовки', category: 'fashion', price: 74.50, rating: 4.2 },
    { id: 6, title: 'Смартфон', category: 'electronics', price: 699.00, rating: 4.8 },
    { id: 7, title: 'Термос', category: 'home', price: 18.99, rating: 4.0 },
    { id: 8, title: 'Рюкзак', category: 'fashion', price: 45.00, rating: 4.3 },
    { id: 9, title: 'Читалка', category: 'electronics', price: 129.99, rating: 4.5 },
    { id: 10, title: 'Футболка', category: 'fashion', price: 14.99, rating: 3.8 },
];

// ===== ВСПОМОГАТЕЛЬНЫЕ =====
const roundTo = (x, n = 2) => Math.round((x + Number.EPSILON) * 10 ** n) / 10 ** n;

// ===== ЗАДАЧИ (СРЕДНЯЯ) =====
// 1) map: получить массив названий товаров в верхнем регистре
function getUpperTitles(items) {
    // TODO: верни массив строк
    return items.map(p => p.title.toUpperCase());
}

// 2) filter: товары дороже N и с рейтингом ≥ R
function filterByPriceAndRating(items, minPrice, minRating) {
    return items.filter(p => p.price > minPrice && p.rating >= minRating)
}

// 3) reduce: посчитать общую стоимость товаров по категории
function getTotalByCategory(items, category) {
    return items.reduce((sum, item ) => sum+ (item.category === category ? item.price : 0), 0 )
}

// 4) sort: отсортировать копию по цене по возрастанию, при равной цене — по рейтингу по убыванию
function sortByPriceAscThenRatingDesc(items) {
    return [...items].sort((a,b) => a.price === b.price ? b.rating - a.rating : a.price - b.price);
}

// 5) unique: получить список уникальных категорий (в порядке первого появления)
function getUniqueCategories(items) {
    const seen = new Set();
    const result = [];
    for (const p of items) {
        if (!seen.has(p.category)) {
            seen.add(p.category);
            result.push(p.category);
        }
    }
    return result;
}

// ===== ДОП (ПРОДВИНУТО) =====
// 6) groupBy: сгруппировать товары по категории {category: [...products]}
function groupByCategory(items) {
    return items.reduce((acc, p) => {
        (acc[p.category] ||= []).push(p.title);
        return acc;
    }, {});


}


// ===== ПРИМЕРЫ ВЫЗОВОВ =====
console.log('--- Массивы PRO: демо ---');
console.log('Верхний регистр:', getUpperTitles(products));
console.log('Фильтр (>100, ≥4.2):', filterByPriceAndRating(products, 100, 4.2));
console.log('Сумма по electronics:', roundTo(getTotalByCategory(products, 'electronics')));
console.log('Сортировка по цене, рейтинг по убыванию:', sortByPriceAscThenRatingDesc(products));
console.log('Уникальные категории:', getUniqueCategories(products));
console.log('Группировка:', groupByCategory(products));


