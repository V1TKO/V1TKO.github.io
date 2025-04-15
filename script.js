
const title = document.querySelector('h1');
const text = title.textContent;
title.innerHTML = '';

text.split('').forEach(letter => {
    const span = document.createElement('span');
    if (letter === ' ') {
        span.innerHTML = '&nbsp;';
        title.appendChild(span);
    } else {
        span.textContent = letter;
        title.appendChild(span);
    }
});




