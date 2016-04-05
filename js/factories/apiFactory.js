gnarApp.factory('apiFactory',['$http', function($http) {

  return {
    getBeaches: getBeaches
  };

  function getBeaches() {
    return $http.get('https://gnar-api.herokuapp.com/beaches');
  }
}]);
