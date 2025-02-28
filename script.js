const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');

// Lista de arquivos de áudio
const audioFiles = [
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

let currentTrack = 0;  // Posição inicial na lista de áudio

// Função para carregar e tocar a música
function loadAndPlay() {
    audioSource.src = audioFiles[currentTrack]; // Atualiza a fonte do áudio
    audioPlayer.load();  // Carrega o novo arquivo de áudio
    audioPlayer.play();  // Começa a tocar o áudio
}

// Alternar entre Play/Pause
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();  // Inicia a música
        playPauseButton.innerHTML = "Pause";  // Altera o texto do botão
    } else {
        audioPlayer.pause();  // Pausa a música
        playPauseButton.innerHTML = "Play";  // Altera o texto do botão
    }
}

// Função para avançar para o próximo áudio
function nextTrack() {
    currentTrack++;  // Avança para a próxima música
    if (currentTrack >= audioFiles.length) {
        currentTrack = 0;  // Se atingir o final, volta para o início
    }
    loadAndPlay();  // Atualiza e começa a próxima música
}

// Inicializa o player
loadAndPlay();

// Event listeners
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextTrack);
