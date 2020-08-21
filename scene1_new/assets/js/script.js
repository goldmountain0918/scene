
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        // calling();
    }, 5000);
    document.getElementById('accept').addEventListener('click', () => {
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('video').classList.add('active');
        document.getElementById('video').play();
        document.getElementById('main').classList.add('inactive');
    });
    document.getElementById('back').addEventListener('click', () => {
        document.getElementById('video').classList.remove('active');
        document.getElementById('main').classList.remove('inactive');
        setTimeout(function() {
            calling();
        }, 5000);
    });
    document.getElementById('reveal').addEventListener('camera-change', () => {
        console.log('changing...', document.getElementById('reveal').getCameraOrbit());
    })
});


function calling() {
    document.getElementById('myModal').style.display = 'block';
}