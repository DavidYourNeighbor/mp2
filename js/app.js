var IMDBApp = angular.module('IMDBApp', [
    'ngRoute',
    'movieViewControllers'
]);

IMDBApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/list', {
                templateUrl: 'partials/list.html',
                controller: 'listMoviesController'
            }).
            when('/movies/:imdbID', {
                templateUrl: 'partials/details.html',
                controller: 'detailMoviesController'
            }).
            when('/gallery', {
                templateUrl: 'partials/gallery.html',
                controller: 'galleryMoviesController'
            }).
            otherwise({
                redirectTo: '/list'
            });
    }]);