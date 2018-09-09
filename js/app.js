
var app = angular.module('formApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){
    $scope.formData = {};
    $scope.save = function(valid){
        if(!valid){
            return;
        }
    }
}]);
