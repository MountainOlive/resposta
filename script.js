// Embaralhar peças do quebra-cabeça
function embaralharPecas() {
    const quebracabeca = document.getElementById('quebracabeca');
    for (let i = quebracabeca.children.length; i >= 0; i--) {
        quebracabeca.appendChild(quebracabeca.children[Math.random() * i | 0]);
    }
}

// Verificar se o quebra-cabeça está completo
function verificarMontagem() {
    // Lógica para verificar se o quebra-cabeça está na ordem correta
    // Se estiver correto, exibir o botão de "Exibir Disney"
    document.getElementById('exibirDisney').style.display = 'block';
}

// Event listener para botão "Exibir Disney"
document.getElementById('exibirDisney').addEventListener('click', function() {
    // Lógica para exibir a imagem da Disney em tela cheia
    alert('Exibindo imagem da Disney em tela cheia!');
});

// Adiciona evento de arrastar para cada peça do quebra-cabeça
document.querySelectorAll('.parte').forEach(parte => {
    parte.addEventListener('mousedown', function(e) {
        this.style.position = 'absolute';
        this.style.zIndex = 1000;
        document.body.append(this);
        moveAt(e);
        this.style.left = e.pageX - this.offsetWidth / 2 + 'px';
        this.style.top = e.pageY - this.offsetHeight / 2 + 'px';
        document.addEventListener('mousemove', onMouseMove);
    });

    parte.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMouseMove);
        verificarMontagem();
    });

    function moveAt(e) {
        parte.style.left = e.pageX - parte.offsetWidth / 2 + 'px';
        parte.style.top = e.pageY - parte.offsetHeight / 2 + 'px';
    }

    function onMouseMove(e) {
        moveAt(e);
    }
});

// Embaralhar as peças iniciais ao carregar a página
window.addEventListener('load', function() {
    embaralharPecas();
});
