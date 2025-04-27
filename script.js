const intro = document.getElementById('introVideo');
const loop = document.getElementById('loopVideo');
const centerOverlay = document.getElementById('centerOverlay');
const topMenu = document.getElementById('topMenu');

intro.addEventListener('play', () => {
    setTimeout(() => {
        intro.pause();
        intro.style.display = 'none';
        loop.style.display = 'block';
        loop.play();
        centerOverlay.style.display = 'block';
        centerOverlay.play();

        setTimeout(() => {
            centerOverlay.pause();
            centerOverlay.currentTime = centerOverlay.duration;
        }, 10000);
    }, 4000);
});

document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {
        topMenu.style.top = '0';
    } else {
        topMenu.style.top = '-70px'; 
    }
});