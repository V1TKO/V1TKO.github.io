const form = document.querySelector('.add');
const message = document.getElementById('submit-msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    message.classList.remove('hidden');
    message.classList.add('fade-in');


    form.reset();


    setTimeout(() => {
        message.classList.add('hidden');
        message.classList.remove('fade-in');
    }, 3000);
});