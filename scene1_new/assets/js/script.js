
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keypress', () => calling())
    document.getElementById('accept').addEventListener('click', () => {
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('video').classList.add('active');
        document.getElementById('video').play();
        document.getElementById('main').classList.add('inactive');
        document.getElementById('footer-main').classList.add('inactive');
        document.getElementById('header').classList.add('active');
    });
    document.getElementById('back').addEventListener('click', () => {
        document.getElementById('video').classList.remove('active');
        document.getElementById('main').classList.remove('inactive');
        document.getElementById('footer-main').classList.remove('inactive');
        document.getElementById('header').classList.remove('active');
    });
    document.getElementById('reveal').addEventListener('camera-change', () => {
        console.log('changing...', document.getElementById('reveal').getCameraOrbit());
    })
});


function calling() {
    document.getElementById('myModal').style.display = 'block';
}
