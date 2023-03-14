'use strict'

for (let li of document.querySelectorAll('li')) {
    // получаем название из текстового узла
    let title = li.firstChild.data;

    title = title.trim(); // удаляем лишние пробелы c конца строки

    // считаем количество потомков
    let count = li.getElementsByTagName('li').length;

    alert(title + ': ' + count);
}
