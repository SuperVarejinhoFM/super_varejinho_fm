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
const playButton = document.getElementById('playBtn');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const audioBar = document.getElementById('audioBar');

// Função para carregar a próxima música
function loadNextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % audios.length;
    audioPlayer.src = audios[currentAudioIndex];
    audioPlayer.play();
}

// Função para carregar a música anterior
function loadPrevAudio() {
    currentAudioIndex = (currentAudioIndex - 1 + audios.length) % audios.length;
    audioPlayer.src = audios[currentAudioIndex];
    audioPlayer.play();
}

// Função de play/pause
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
}

// Evento para o botão de "Play/Pause"
playButton.addEventListener('click', togglePlayPause);

// Evento para o botão "Próxima"
nextButton.addEventListener('click', loadNextAudio);

// Evento para o botão "Anterior"
prevButton.addEventListener('click', loadPrevAudio);

// Atualizar a barra de progresso conforme a música vai tocando
audioPlayer.addEventListener('timeupdate', function() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
});

// Função para reiniciar a música ao terminar
audioPlayer.addEventListener('ended', function() {
    audioPlayer.currentTime = 0;
    audioPlayer.play(); // Reinicia a música ao terminar
});

// Animar a barra de áudio (subir e descer) com base na batida
audioPlayer.addEventListener('play', function() {
    setInterval(function() {
        const randomHeight = Math.random() * 30 + 10; // altura aleatória entre 10px e 40px
        audioBar.style.height = `${randomHeight}px`;
    }, 200);
});

// Inicia o primeiro áudio
audioPlayer.src = audios[currentAudioIndex];
audioPlayer.play();
