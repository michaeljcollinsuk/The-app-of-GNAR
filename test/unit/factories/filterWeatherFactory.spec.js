describe('factory: filterWeatherFactory', function(){
  var filter;

  beforeEach(module('GnarApp', function ($routeProvider) {
    $routeProvider.otherwise(function(){return false;});
  }));

  beforeEach(inject(function(filterWeatherFactory) {
    filter = filterWeatherFactory;
  }));

  // describe('sortData', function() {
  //   var response = ['hourly'];
  //   it('passes the data to the delete forecasts function', function() {
  //     var deleteForecasts = jasmine.createSpy('deleteForecasts');
  //     filter.sortData(response);
  //     expect(filter.deleteForecasts).toHaveBeenCalled();
  //   });
  // });

  describe('deleteForecasts', function() {
    it('deletes unwanted forecasts', function(){
      filter.hours = 1;
      var mockData = [{hourly:[1,2,3,4,5,6,7,8]},{hourly:[1,2,3,4,5,6,7,8]},{hourly:[1,2,3,4,5,6,7,8]},{hourly:[1,2,3,4,5,6,7,8]},{hourly:[1,2,3,4,5,6,7,8]},{hourly:[1,2,3,4,5,6,7,8]},{hourly:[1,2,3,4,5,6,7,8]}];
      expect(filter.deleteForecasts(mockData)).toEqual([{'hourly':[3,4,5,6,7,8]},{'hourly':[3,4,5,6,7,8]},{'hourly':[3,4,5,6,7,8]},{'hourly':[3,4,5,6,7,8]},{'hourly':[3,4,5,6,7,8]},{'hourly':[3,4,5,6,7,8]},{'hourly':[3,4,5,6,7,8]}]);
    });
  });


});

// describe('formatting the date', function() {
//   it("returns the date dd/mm/yyyy", function() {
//     var date = "2016-03-28";
//     var result = "28-03-2016";
//     expect(ctrl.date(date)).toEqual(result);
//   });
// });

// describe('returning the time in 24 hour format', function() {
//
//   it("converts a three digit time to the correct format", function() {
//     expect(ctrl.time('300')).toEqual('0300');
//   });
//
//   it("does not change a four digit time", function() {
//     expect(ctrl.time('1200')).toEqual('1200');
//   });
// });
//
