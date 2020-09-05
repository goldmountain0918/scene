
document.addEventListener('DOMContentLoaded', (event) => {
    $('.flipbook').turn({

        display: 'double',
        // Width

        width:2048,

        // Height

        height:1450,

        // Elevation

        elevation: 50,

        // Enable gradients

        gradients: true,

        // Auto center this flipbook

        autoCenter: true,

        duration: 2500,

        page: 2,

        when: {
            start: function(event, pageObject, corner) {
                if (pageObject.next === 1)
                    event.preventDefault();
            },
            turning: function (event, page, pageObject) {
                if (page === 1) {
                    event.preventDefault();
                }
            }
        }
    });
});
