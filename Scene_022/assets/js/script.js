
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keypress', () => {
        document.getElementById('engaged').style.display = 'block';
    });
    document.getElementById('button').addEventListener('click', () => {
        document.getElementById('launch').style['background-image'] = 'url("../Scene_022/assets/img/INITIATE.gif")';
        document.getElementById('portrait_bg_active').style['opacity'] = '1';
        document.getElementById('portrait_bg_active').play();
    });
});
