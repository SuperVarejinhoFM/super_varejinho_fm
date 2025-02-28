// Selecionando os elementos do áudio e dos botões
const audioPlayer = document.querySelector('audio');
const playButton = document.querySelector('#playButton');
const nextButton = document.querySelector('#nextButton');

// Lista de arquivos de áudio. Vamos criar a sequência aqui
const baseAudioPath = 'RADIO/audio/';
const audioFiles = [];

// Função para gerar a lista de arquivos de áudio
function generateAudioList() {
    for (let i = 1; i <= 38; i++) {  // Para 38 arquivos
        // Definir os nomes dos arquivos sequenciais com a possibilidade de ofertas
        let fileName = `audio${i}.mp3`;
        // Adicionar o arquivo à lista
        audioFiles.push(baseAudioPath + fileName);

        // Verificar se o arquivo de "oferta" existe
        if (i === 6 || i === 12 || i === 18 || i === 24 || i === 30 || i === 36) {
            const offerFileName = `audio${i}_oferta${i / 6}.mp3`; // Cria o arquivo de oferta, ex: audio6_oferta1.mp3
            audioFiles.push(baseAudioPath + offerFileName);
        }
    }
}

// Função para atualizar o áudio
function updateAudio() {
    audioPlayer.src = audioFiles[currentTrack];
    audioPlayer.play();
}

// Função para alternar o estado de play/pause
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.innerHTML = "Pause"; // Troca o texto para Pause
    } else {
        audioPlayer.pause();
        playButton.innerHTML = "Play"; // Troca o texto para Play
    }
}

// Função para avançar para a próxima música
function nextTrack() {
    currentTrack++;
    if (currentTrack >= audioFiles.length) {
        currentTrack = 0; // Se chegar ao final, volta para a primeira música
    }
    updateAudio();
}

// Variável para controlar a música atual
let currentTrack = 0;

// Gerar a lista de arquivos de áudio
generateAudioList();

// Inicializa o áudio
updateAudio();

// Adiciona os ouvintes de eventos para os botões
playButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextTrack);
