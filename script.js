// Lista de canciones
const songs = [
    'https://www.youtube.com/watch?v=ssVCtZBQyus',
    'https://youtu.be/mm29aBe71SI?si=3P_AcZ0jZb7mcRs2',
    'https://youtu.be/nP8ZVJxiJlU?si=mDvCgd-e93pcWumS',
    'https://youtu.be/6SHIrbtXY1U?si=UEzcSUUzHNjFI7KU',
    'https://youtu.be/dTbONq0zxRA?si=j7FKiWa9Ts-hQ2Do',
    'https://youtu.be/XQ0D_QD_DhM?si=jwr_mIG-zZwSPk-S'
];

// Funciones para manejar las canciones
let currentSongIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    window.location.href = songs[currentSongIndex];
});

document.getElementById('next').addEventListener('click', () => {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    window.location.href = songs[currentSongIndex];
});
