
var app = angular.module('formApp',['jcs-autoValidate']);

app.controller('mainCtrl', ['$scope', function($scope){
    $scope.formData = {};
    $scope.save = function(valid){
        if(!valid){
            return;
        }
    }
}]);
