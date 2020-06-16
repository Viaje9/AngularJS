(function (){
    var app = angular.module('Controller',['book']);
    var book = angular.module('book',[]);


    book.controller('bookController',['$scope',function($scope) {
        $scope.data = "this is book";
    }]);

    
})()