document.getElementById('contact-header').addEventListener('click', function () {
    const infoForm = document.getElementById('info-form');
    if (infoForm.classList.contains('open')) {
        infoForm.classList.remove('open');
    } else {
        infoForm.classList.add('open');

    }
});