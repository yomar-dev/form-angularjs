var app = angular.module('formApp',['jcs-autoValidate']);

angular.module('formApp')
    .run([
        'defaultErrorMessageResolver',
        function(defaultErrorMessageResolver){
            defaultErrorMessageResolver.getErrorMessages().then(function(errorMessages){
                errorMessages['minAge'] = 'The minimun age is {0} years';
                errorMessages['maxAge'] = 'The maximun age is {0} years';
            });
        }
    ]);

app.controller('mainCtrl', ['$scope', function($scope){
    $scope.formData = {};
    $scope.save = function(valid){
        console.log('Ok')
    }
}]);
