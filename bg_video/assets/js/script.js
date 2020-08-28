document.addEventListener('DOMContentLoaded', (event) => {
    var i = 1;
    document.addEventListener('keypress', () => {
        if (i < 3) {
            i++;
            document.getElementById(`video${i}`).style['z-index'] = i;
            document.getElementById(`video${i}`).play();
        }
    });
});
