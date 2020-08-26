
$(function() {
    init();
    let s = document.createElement("style");
    document.head.appendChild(s);
    var rangePercent = $('[type="range"]').val();
    $('[type="range"]').on('change input', function() {
        rangePercent = $('[type="range"]').val();
        s.textContent = `.range::-webkit-slider-thumb{background-color: hsl(${rangePercent / 100 * 250}, 100%, 50%)}`
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