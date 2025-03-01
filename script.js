// Array com os caminhos dos arquivos de áudio
const audios = [
    'RADIO/audio/audio1.mp3',
    'RADIO/audio/audio2.mp3',
    'RADIO/audio/audio3.mp3',
    'RADIO/audio/audio4.mp3',
    'RADIO/audio/audio5.mp3',
    'RADIO/audio/audio6_oferta1.mp3',
    'RADIO/audio/audio7.mp3',
    'RADIO/audio/audio8.mp3',
    'RADIO/audio/audio9.mp3',
    'RADIO/audio/audio10.mp3',
    'RADIO/audio/audio11.mp3',
    'RADIO/audio/audio12_oferta2.mp3',
    'RADIO/audio/audio13.mp3',
    'RADIO/audio/audio14.mp3',
    'RADIO/audio/audio15.mp3',
    'RADIO/audio/audio16.mp3',
    'RADIO/audio/audio17.mp3',
    'RADIO/audio/audio18_oferta3.mp3',
    'RADIO/audio/audio19.mp3',
    'RADIO/audio/audio20.mp3',
    'RADIO/audio/audio21.mp3',
    'RADIO/audio/audio22.mp3',
    'RADIO/audio/audio23.mp3',
    'RADIO/audio/audio24_oferta4.mp3',
    'RADIO/audio/audio25.mp3',
    'RADIO/audio/audio26.mp3',
    'RADIO/audio/audio27.mp3',
    'RADIO/audio/audio28.mp3',
    'RADIO/audio/audio29.mp3',
    'RADIO/audio/audio30_oferta5.mp3',
    'RADIO/audio/audio31.mp3',
    'RADIO/audio/audio32.mp3',
    'RADIO/audio/audio33.mp3',
    'RADIO/audio/audio34.mp3',
    'RADIO/audio/audio35.mp3',
    'RADIO/audio/audio36_oferta6.mp3',
    'RADIO/audio/audio37.mp3',
    'RADIO/audio/audio38.mp3'
];

// Selecionar um áudio aleatório
function getRandomAudio() {
    const randomIndex = Math.floor(Math.random() * audios.length);
    return audios[randomIndex];
}

const audioPlayer = document.getElementById('audioPlayer');

// Função para iniciar o áudio automaticamente ao carregar a página
window.onload = function() {
    audioPlayer.src = getRandomAudio(); // Carregar um áudio aleatório
    audioPlayer.play(); // Iniciar a reprodução
    audioPlayer.loop = false; // Não repetir a música automaticamente
};

// Atualização das barras enquanto a música toca
audioPlayer.addEventListener('play', function() {
    document.querySelectorAll('.audio-bar-top').forEach(bar => {
        bar.style.animationPlayState = 'running'; // Iniciar animação das barras
    });

    // A cada 100ms, a altura das barras será alterada aleatoriamente
    setInterval(function() {
        document.querySelectorAll('.audio-bar-top').forEach((bar, index) => {
            const randomHeight = Math.floor(Math.random() * 60) + 30; // Altura aleatória para simular movimento
            bar.style.height = `${randomHeight + (index * 10)}px`; // Variação para cada barra
        });
    }, 100);
});

// Quando a música for pausada, as barras param e voltam ao estado inicial
audioPlayer.addEventListener('pause', function() {
    document.querySelectorAll('.audio-bar-top').forEach(bar => {
        bar.style.animationPlayState = 'paused'; // Parar animação das barras
        bar.style.height = '60px'; // Voltar ao tamanho inicial
    });
});

// Quando a música terminar, carrega uma nova música aleatória
audioPlayer.addEventListener('ended', function() {
    audioPlayer.src = getRandomAudio(); // Carregar um áudio aleatório
    audioPlayer.play(); // Reproduzir a nova música
});
