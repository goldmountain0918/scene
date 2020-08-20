
document.addEventListener('DOMContentLoaded', (event) => {
    calling();
    document.getElementById('back').addEventListener('click', () => {
        document.getElementById('video').classList.remove('active');
        document.getElementById('viewer').classList.remove('active');
        calling();
    });
    document.getElementById('accept').addEventListener('click', () => {
        document.getElementById("myModal").style.display = 'none';
        document.getElementById('video').classList.add('active');
        document.getElementById('video').play();
        document.getElementById('viewer').classList.add('active');
    });
    setInterval(function(){
        document.getElementById('variable1').innerText = generateRandomNumber() + '%';
        document.getElementById('variable2').innerText = generateRandomNumber() + '%';
        document.getElementById('variable3').innerText = generateRandomNumber() + '%';
    }, 300);
});

function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}

function calling() {
    setTimeout(function() {
        document.getElementById("myModal").style.display = 'block';
    }, 5000);
}