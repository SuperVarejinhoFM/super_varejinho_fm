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

// Inicia o primeiro áudio
audioPlayer.src = audios[currentAudioIndex];
audioPlayer.play();

// Carrossel de Banners
let currentIndex = 0;
const banners = document.querySelectorAll('.carousel .banner');
const carousel = document.querySelector('.carousel');

// Função para mover o carrossel
function moveCarousel() {
    // Remover a classe 'active' de todos os banners
    banners.forEach(banner => {
        banner.classList.remove('active');
    });

    // Incrementa o índice e faz a rotação dos banners
    currentIndex = (currentIndex + 1) % banners.length;

    // Adiciona a classe 'active' ao banner que deve estar em destaque
    banners[currentIndex].classList.add('active');

    // Aplica a transformação de transição para os banners (faz o carrossel se mover)
    carousel.style.transform = `translateX(-${(currentIndex * 420)}px)`; // 420px é a largura do banner + a margem
}

// Inicia o movimento automático do carrossel a cada 3 segundos
setInterval(moveCarousel, 3000);

// Inicializa o primeiro banner como ativo
banners[currentIndex].classList.add('active');
