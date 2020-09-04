
$(function() {
    init();
    let s = document.createElement("style");
    document.head.appendChild(s);
    let rangePercent = $('[type="range"]').val();
    $('[type="range"]').on('change input', function() {
        rangePercent = $('[type="range"]').val();
        // s.textContent = `.range::-webkit-slider-thumb{background-color: hsl(${rangePercent / 100 * 250}, 100%, 50%)}`;
        const vid = document.getElementById("landscape_bg");
        vid.playbackRate = 4 - rangePercent;
        // console.log('range', rangePercent)
        console.log('range', ((3 - rangePercent) / 2 * 1090) * 0.773 + 123.5 )
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
