function isAdjacent(empty, parte) {
    const emptyIndex = Array.from(empty.parentElement.children).indexOf(empty);
    const parteIndex = Array.from(parte.parentElement.children).indexOf(parte);

    const emptyRow = Math.floor(emptyIndex / 3); // Número de colunas - 1
    const emptyCol = emptyIndex % 3; // Número de linhas - 1
    const parteRow = Math.floor(parteIndex / 3); // Número de colunas - 1
    const parteCol = parteIndex % 3; // Número de linhas - 1

    return (
        (Math.abs(emptyRow - parteRow) === 1 && emptyCol === parteCol) ||
        (Math.abs(emptyCol - parteCol) === 1 && emptyRow === parteRow)
    );
}

function swapTiles(empty, parte) {
    const parent = empty.parentElement;
    const emptyIndex = Array.from(parent.children).indexOf(empty);
    const parteIndex = Array.from(parent.children).indexOf(parte);

    parent.insertBefore(parte, empty);
    parent.insertBefore(empty, parent.children[parteIndex]);
}

function verificarMontagem() {
    const quebracabeca = document.getElementById('quebracabeca');
    const pecas = quebracabeca.children;

    for (let i = 0; i < pecas.length; i++) {
        if (parseInt(pecas[i].innerText) !== i + 1) {
            return;
        }
    }

    document.getElementById('exibirDisney').style.display = 'block';
}

window.addEventListener('load', function() {
    embaralharPecas();
    setTimeout(verificarMontagem, 3000); // Verifica após 3 segundos
});

