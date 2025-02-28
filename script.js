// Pegando os elementos do botão e do player de áudio
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeControl = document.getElementById('volumeControl');
const audioPlayer = document.getElementById('audioPlayer');

// Lista de músicas (caminhos para os arquivos)
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

let currentTrackIndex = 0; // Índice da música atual

// Função para alternar entre play e pause
playPauseBtn.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause'; // Altera o texto para 'Pause' quando o áudio está tocando
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play'; // Altera o texto para 'Play' quando o áudio está pausado
    }
});

// Função para avançar para a próxima música
nextBtn.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex + 1) % audioFiles.length; // Avança para a próxima música (com loop)
    audioPlayer.src = audioFiles[currentTrackIndex]; // Atualiza o arquivo de áudio
    audioPlayer.play(); // Inicia a nova música
    playPauseBtn.textContent = 'Pause'; // Muda o botão para 'Pause'
});

// Função para ajustar o volume
volumeControl.addEventListener('input', function() {
    audioPlayer.volume = volumeControl.value; // Ajusta o volume com base no controle deslizante
});
