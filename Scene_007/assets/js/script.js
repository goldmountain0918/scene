
document.addEventListener('DOMContentLoaded', (event) => {
    var signaturePad = new SignaturePad(document.getElementById('canvas'), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 255)',
        minWidth: 3
    });

    // target elements with the "draggable" class
    interact('.draggable')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            modifiers: [
                interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                })
            ],
            // enable autoScroll
            autoScroll: true,

            listeners: {
                // call this function on every dragmove event
                move: dragMoveListener,

                // call this function on every dragend event
                end (event) {
                }
            }
        })

    function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.webkitTransform =
            target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }

    const elements = document.getElementsByClassName('index');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            $(".index").removeClass("active");
            this.classList.add('active');
            $('#emailcontent').css('background-image', 'url("../Scene_007/assets/emails/'+ this.getAttribute('data-index') +'.jpg")');
        }, false);
    }
    let emailbox = document.getElementById('emailbox');
    document.getElementById('spin-cover').addEventListener('click', function () {
        emailbox.style.display = 'block';
    });
    document.getElementById('emailclose').addEventListener('click', function () {
        emailbox.style.display = 'none';
    });

    const bar = document.getElementById('split__thumb');
    const top = document.getElementById('split__top');
    let mouse_is_down = false;

    bar.addEventListener('touchstart', (e) => {
        mouse_is_down = true;
    });

    document.addEventListener('touchmove', (e) => {
        if (!mouse_is_down) return;
        top.style.height = `${e.touches[0].clientY}px`;
    });

    document.addEventListener('touchend', () => {
        mouse_is_down = false;
    });

    document.getElementById('portrait_bg').addEventListener('click', () => {
           document.getElementById('split__bottom').style.display = 'block';
           document.getElementById('split__bar').style.display = 'block';
           document.getElementById('split__top').style.height = '50%';
           setTimeout(() => {
               document.getElementById('textarea').style.display = 'block';
           }, 300);
           setTimeout(() => {
               document.getElementById('split__top').style.transition = 'none';
           }, 1000);
    });
});
