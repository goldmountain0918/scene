
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('button').addEventListener('click', function () {
        setTimeout(() => {
            document.getElementById('button').style.display = 'none';
            document.getElementById('background').style['background-image'] = 'url("../Scene_027/assets/background/background_2.png")';
        }, 1000)
    })
});
