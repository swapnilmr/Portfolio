$(document).ready(function () {
    $('#fullpage').fullpage({
        licenseKey: 'EB5D1883-8A3B4481-9D3DEB7D-2D737E70',
        sectionsColor: ['#000', '#FFF', '#000', '#FFF'],
        anchors: ['about', 'skills', 'work', 'contact'],
        menu: '#main-nav ul',
        fadingEffectKey: 'Z2l0aHViLmlvX3ZkOFptRmthVzVuUldabVpXTjBLS2o=',
        fadingEffect: true,
        onLeave: function (origin, destination, direction) {
            if (destination.index == 1 || destination.index == 3) {
                $('.underline').addClass('black');
                $('.navbar-collapse').addClass('whitebg');
                $('.icon-bar').addClass('blackbg');
                $('.scroll').addClass('black');
            } else if (destination.index == 0 || destination.index == 2) {
                $('.underline').removeClass('black');
                $('.navbar-collapse').removeClass('whitebg');
                $('.icon-bar').removeClass('blackbg');
                $('.scroll').removeClass('black');
            }
        }
    });
});