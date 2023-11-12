const partes = document.querySelectorAll('.parte');
const main = document.querySelector('main');

partes.forEach(parte => {
    parte.addEventListener('click', () => {
        parte.classList.toggle('desativada');
        main.innerHTML = '';
        partes.forEach(p => {
            if (!p.classList.contains('desativada')) {
                main.appendChild(p);
            }
        });
    });
});
