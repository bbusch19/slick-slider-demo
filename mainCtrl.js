angular.module('myApp').controller('mainCtrl', function($scope) {

    $(document).ready(function() {
        $('.my-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true
        });

    });

})
