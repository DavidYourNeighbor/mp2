var movieViewControllers = angular.module('movieViewControllers', []);

movieViewControllers.controller('listMoviesController', ['$scope', '$http', function($scope, $http) {
   $http.get('./data/imdb250.json').success(function(data) {
     $scope.movies = data;
     $scope.title = 'title';
     $scope.released = 'released';
     $scope.rank = 'rank';
     $scope.imdbID = 'imdbID';
   });
 }]);

movieViewControllers.controller('detailMoviesController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
            $scope.title = 'title';
            $scope.released = 'released';
            $scope.rank = 'rank';
            $scope.imdbID = 'imdbID';
        });
        $scope.specialID = $routeParams.imdbID;
    }]);

movieViewControllers.controller('galleryMoviesController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.movies = data;
            $scope.title = 'title';
            $scope.released = 'released';
            $scope.rank = 'rank';
            $scope.imdbID = 'imdbID';
            $scope.genre = 'genre';
        });
    }]);