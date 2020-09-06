
$(function() {
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

    init();
    let s = document.createElement("style");
    document.head.appendChild(s);
    let rangePercent = $('[type="range"]').val();
    $('[type="range"]').on('change input', function() {
        rangePercent = $('[type="range"]').val();
        const vid = document.getElementById("landscape_main");
        vid.playbackRate = 4 - rangePercent;
        const slider_height = ((3 - rangePercent) / 2 * 1090) * 0.773 + 123.5;
        $('#slider_bg').css('height', `${slider_height}px`);
        $('#slider_bg').css('background-color', `hsl(${(rangePercent - 1) * 30}, 100%, 50%)`);
    });

    document.addEventListener('keypress', () => sign());
    var signaturePad = new SignaturePad(document.getElementById('pad'), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)',
        minWidth: 2
    });

    document.getElementById('send').addEventListener('click', () => {
        $('#signature').css('max-height', '0');
        setTimeout(()=> signaturePad.clear(), 1000);
    });

    const elements = document.getElementsByClassName('index');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {
            $(".index").removeClass("active");
            this.classList.add('active');
            $('#emailcontent').css('background-image', 'url("../Scene_019/assets/emails/'+ this.getAttribute('data-index') +'.jpg")');
        }, false);
    }
    let emailbox = document.getElementById('emailbox');
    document.getElementById('trigger').addEventListener('click', function () {
        emailbox.style.display = 'block';
    });
    document.getElementById('emailclose').addEventListener('click', function () {
        emailbox.style.display = 'none';
    });

});


function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    // event.preventDefault();
}

function init() {
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
}

function sign() {
    $('#signature').css('max-height', '829px');
}
