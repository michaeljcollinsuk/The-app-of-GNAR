gnarApp.factory('ApiFactory',['$http', function($http) {
  var ApiFactory = function() {
    var self = this;
  };

  ApiFactory.prototype.getInfo = function(){
    return $http.get('http://localhost:3000/beaches')
    .then(function(response){
      return response.data;
    });
  };
  return ApiFactory;
}]);
