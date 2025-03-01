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

let currentAudioIndex = 0;
const audioPlayer = document.getElementById('audioPlayer');
const progressBar = document.getElementById('progressBar');
const audioBars = document.querySelectorAll('.audio-bar'); // Selecione todas as barras de áudio

// Função para carregar e tocar um áudio aleatório
function playRandomAudio() {
    currentAudioIndex = Math.floor(Math.random() * audios.length); // Escolhe um áudio aleatório
    audioPlayer.src = audios[currentAudioIndex];
    audioPlayer.play();
    startBarsAnimation(); // Inicia a animação das barras
}

// Função para iniciar a animação das barras
function startBarsAnimation() {
    audioBars.forEach(bar => {
        bar.classList.add('bounce'); // Começa a animação das barras
    });
}

// Função para parar a animação das barras
function stopBarsAnimation() {
    audioBars.forEach(bar => {
        bar.classList.remove('bounce'); // Remove a animação das barras
    });
}

// Evento para o botão de "Play" quando a página carrega
window.onload = function() {
    playRandomAudio();
};

// Atualizar a barra de progresso conforme a música vai tocando
audioPlayer.addEventListener('timeupdate', function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

// Ao terminar o áudio, escolhe um novo áudio aleatório
audioPlayer.addEventListener('ended', function() {
    playRandomAudio();
});

// Pausa a música e para a animação
audioPlayer.addEventListener('pause', function() {
    stopBarsAnimation();
});

// Inicia o primeiro áudio ao carregar a página
audioPlayer.src = audios[currentAudioIndex];
audioPlayer.play();
