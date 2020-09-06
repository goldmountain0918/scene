
document.addEventListener('DOMContentLoaded', (event) => {

    var signaturePad = new SignaturePad(document.getElementById('canvas'), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 255)',
        minWidth: 3
    });

    document.addEventListener ("keydown", function (zEvent) {
        if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "s") {
            let canvas = document.getElementById('canvas');
            console.log('canvas', canvas)
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            $('canvas').css('z-index', -$('canvas').css('z-index'));
        }
    } );
});
