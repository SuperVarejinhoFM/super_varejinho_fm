// Array com os arquivos de áudio
const audioFiles = [
    'audio1.mp3',
    'audio2.mp3',
    'audio3.mp3',
    'audio4.mp3',
    'audio5.mp3',
    'audio6_oferta1.mp3',
    'audio7.mp3',
    'audio8.mp3',
    'audio9.mp3',
    'audio10.mp3',
    'audio11.mp3',
    'audio12_oferta2.mp3',
    'audio13.mp3',
    'audio14.mp3',
    'audio15.mp3',
    'audio16.mp3',
    'audio17.mp3',
    'audio18_oferta3.mp3',
    'audio19.mp3',
    'audio20.mp3',
    'audio21.mp3',
    'audio22.mp3',
    'audio23.mp3',
    'audio24_oferta4.mp3',
    'audio25.mp3',
    'audio26.mp3',
    'audio27.mp3',
    'audio28.mp3',
    'audio29.mp3',
    'audio30_oferta5.mp3',
    'audio31.mp3',
    'audio32.mp3',
    'audio33.mp3',
    'audio34.mp3',
    'audio35.mp3',
    'audio36_oferta6.mp3',
    'audio37.mp3',
    'audio38.mp3'
];

// Variáveis para o player de áudio
const audioPlayer = document.getElementById('musicPlayer');
const audioSource = document.getElementById('audioSource');
const playButton = document.getElementById('playButton');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const volumeUpButton = document.getElementById('volumeUp');
const volumeDownButton = document.getElementById('volumeDown');

// Índice da música atual
let currentSongIndex = 0;

// Função para tocar a próxima música
function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= audioFiles.length) {
        currentSongIndex = 0;
    }

    audioSource.src = `RADIO/audio/${audioFiles[currentSongIndex]}`;
    audioPlayer.load();
    audioPlayer.play();
}

// Função para voltar para a música anterior
function playPrevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = audioFiles.length - 1;
    }

    audioSource.src = `RADIO/audio/${audioFiles[currentSongIndex]}`;
    audioPlayer.load();
    audioPlayer.play();
}

// Função para alternar o botão de play/pause
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Ícone de pause
    } else {
        audioPlayer.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>'; // Ícone de play
    }
}

// Função para aumentar o volume
function increaseVolume() {
    if (audioPlayer.volume < 1) {
        audioPlayer.volume += 0.1;
    }
}

// Função para diminuir o volume
function decreaseVolume() {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume -= 0.1;
    }
}

// Eventos para os botões
playButton.addEventListener('click', togglePlay);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
volumeUpButton.addEventListener('click', increaseVolume);
volumeDownButton.addEventListener('click', decreaseVolume);

// Evento de quando a música termina
audioPlayer.addEventListener('ended', playNextSong);

// Iniciar a reprodução do áudio quando a página carregar
window.onload = () => {
    audioPlayer.play();
    playButton.innerHTML = '<i class="fas fa-pause"></i>'; // Ícone de pause
};
