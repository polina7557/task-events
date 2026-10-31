export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((itemText) => {
        const li = document.createElement('li');
        li.textContent = itemText;

        // Убираем li.title = itemText; отсюда!

        li.addEventListener('mouseenter', () => {
            li.title = itemText;
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    a.addEventListener('click', function (event) {
        if (!a.textContent.includes(a.href)) {
            event.preventDefault();
            a.textContent += ' ' + a.href;
        }
    });
    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });
    button.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });
    ul.appendChild(li);
    document.body.appendChild(ul);
    document.body.appendChild(button);
}
