angular.module('app', [])
  .controller('Register',  function($scope, $http,$window) {

    $scope.registro = function(){

      var data = {
        "username" : $scope.username,
        "email": $scope.email,
        "pass" : $scope.pass,
      }
      console.log(data);
      $http.post(url, data, config)
              .success(function (data, status, headers, config) {
                $window.location.href = "/citas"
                console.log("registro correctamente");
              })
              .error(function (data, status, header, config) {
                console.log(data)
              });
    }

  });
