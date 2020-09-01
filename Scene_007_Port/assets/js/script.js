
document.addEventListener('DOMContentLoaded', (event) => {
    const bar = document.getElementById('split__thumb');
    const top = document.getElementById('split__top');
    let mouse_is_down = false;

    bar.addEventListener('touchstart', (e) => {
        mouse_is_down = true;
    })

    document.addEventListener('touchmove', (e) => {
        if (!mouse_is_down) return;
        top.style.height = `${e.touches[0].clientY}px`;
    })

    document.addEventListener('touchend', () => {
        mouse_is_down = false;
    })
});
