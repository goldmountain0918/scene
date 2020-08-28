document.addEventListener('DOMContentLoaded', (event) => {
    var i = 1;
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    document.addEventListener('keypress', () => {
        if (i < 3) {
            i++;
            document.getElementById(`video${i}`).style['z-index'] = i;
            document.getElementById(`video${i}`).play();
        } else {
            video1.currentTime = 0;
            video2.currentTime = 0;
            video3.currentTime = 0;
            video1.style['z-index'] = 1;
            video2.style['z-index'] = 0;
            video3.style['z-index'] = 0;
            i = 1;
        }
    });
});
