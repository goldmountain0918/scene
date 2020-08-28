document.addEventListener('DOMContentLoaded', (event) => {
    var i = 1;
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
    var video3 = document.getElementById('video3');
    document.addEventListener('keypress', () => {
        video1.style.display = 'none';
        video2.style.display = 'none';
        video3.style.display = 'none';
        document.getElementById(`video${++i}`).style.display = 'block';
        if (i === 3) i = 0;
    });
});
