
document.addEventListener('DOMContentLoaded', (event) => {
    $('.flipbook').turn({

        display: 'single',
        // Width

        width:1024,

        // Height

        height:1450,

        // Elevation

        elevation: 50,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true,

        duration: 2500

    });
    $('#video').get(0).play();
});
