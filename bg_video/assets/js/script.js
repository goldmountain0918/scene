document.addEventListener('DOMContentLoaded', (event) => {
    var i = 1;
    var video = document.getElementById('myVideo');
    document.addEventListener('keypress', () => {
        video.pause();
        document.getElementById('source').setAttribute('src', `assets/video/${++i}.mp4`);
        video.load();
        video.play();
        if (i === 3) i = 0;
    });
});
