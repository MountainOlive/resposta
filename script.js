// Embaralhar peças do quebra-cabeça
function embaralharPecas() {
    const quebracabeca = document.getElementById('quebracabeca');
    for (let i = quebracabeca.children.length; i >= 0; i--) {
        quebracabeca.appendChild(quebracabeca.children[Math.random() * i | 0]);
    }
}

// Verificar se o quebra-cabeça está na ordem correta
function verificarMontagem() {
    const quebracabeca = document.getElementById('quebracabeca');
    const pecas = quebracabeca.children;

    for (let i = 0; i < pecas.length; i++) {
        // Supondo que a ordem correta seja de 1 a N
        // Se a posição da peça não corresponder à ordem correta, o quebra-cabeça não está montado
        if (parseInt(pecas[i].innerText) !== i + 1) {
            return; // Se qualquer peça estiver fora de ordem, interrompe a verificação
        }
    }

    // Se todas as peças estiverem na ordem correta, exibe o botão "Exibir Disney"
    document.getElementById('exibirDisney').style.display = 'block';
}

// Event listener para botão "Exibir Disney"
document.getElementById('exibirDisney').addEventListener('click', function() {
    // Supondo que você tem o caminho para a imagem da Disney
    document.body.style.backgroundImage = "disney.png";
    document.body.style.backgroundSize = "cover"; // Ajusta a imagem para cobrir toda a tela
});

// Event listener para cada peça do quebra-cabeça
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
    // Verifica a montagem após um tempo definido
    setTimeout(verificarMontagem, 10000); // Verifica depois de 3 segundos
});


