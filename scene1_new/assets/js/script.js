
document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        calling();
    }, 5000);
    document.getElementById('accept').addEventListener('click', () => {
        document.getElementById('myModal').style.display = 'none';
        document.getElementById('video').classList.add('active');
        document.getElementById('video').play();
        document.getElementById('main').classList.add('inactive');
    });
});


function calling() {
    document.getElementById('myModal').style.display = 'block';
}