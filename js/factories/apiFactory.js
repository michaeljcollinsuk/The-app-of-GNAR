gnarApp.factory('apiFactory',['$http', function($http) {

  return {
    getBeaches: getBeaches
  };

  function getBeaches() {
    return $http.get('http://localhost:3000/beaches')
    .then(function(response){
      return response.data;
    });
  }
}]);
