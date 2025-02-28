// Selecionando os elementos do áudio e dos botões
const audioPlayer = document.querySelector('audio');
const playButton = document.querySelector('#playButton');
const nextButton = document.querySelector('#nextButton');

// Lista de arquivos de áudio com o caminho completo
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

// Variável para controlar a música atual
let currentTrack = 0;

// Função para atualizar o áudio
function updateAudio() {
    audioPlayer.src = audioFiles[currentTrack]; // Define o arquivo de áudio atual
    audioPlayer.play(); // Começa a tocar o áudio
}

// Função para alternar o estado de play/pause
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play(); // Inicia a música
        playButton.innerHTML = "Pause"; // Altera o texto do botão para "Pause"
    } else {
        audioPlayer.pause(); // Pausa a música
        playButton.innerHTML = "Play"; // Altera o texto do botão para "Play"
    }
}

// Função para avançar para a próxima música
function nextTrack() {
    currentTrack++; // Avança para o próximo áudio na lista
    if (currentTrack >= audioFiles.length) {
        currentTrack = 0; // Se chegar ao final, volta para o primeiro áudio
    }
    updateAudio(); // Atualiza o áudio e começa a tocar
}

// Inicializa o áudio
updateAudio();

// Adiciona os ouvintes de eventos para os botões
playButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextTrack);
