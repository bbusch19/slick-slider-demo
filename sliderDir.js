angular.module('myApp').directive('sliderDir', function() {

    function link(scope, elem, attrs) {
        // $(document).ready(function() {
        //     $('.my-slider').slick({
        //     });
        // })   
    }

    return {
        restrict: 'E',
        templateUrl: './sliderTmpl.html',
        controller: 'mainCtrl'
    }
})
