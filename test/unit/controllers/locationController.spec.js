describe('locationController', function(){
  var ctrl;
  // var chosenLocationFactoryMock;
  var response;
  var $rootScope;
  var forecast;

  beforeEach(module('GnarApp', function($routeProvider) {
    $routeProvider.otherwise(function(){return false;});
  }));

  // above is a workaround for a karma bug

  beforeEach(function() {
    response = [{tides:2}];
    forecast = {};
  //   chosenLocationFactoryMock = jasmine.createSpyObj('chosenLocationFactoryMock', ['getMarineInfo']
  // );
  module('GnarApp', {
    // chosenLocationFactory: chosenLocationFactoryMock
  });
});

beforeEach(inject(function($controller, $q, _$rootScope_) {
  // chosenLocationFactoryMock.getMarineInfo.and.returnValue($q.when(response));
  ctrl = $controller('locationController', {forecast: forecast});
  $rootScope = _$rootScope_;
}));

xit('initializes with information from the chosenLocationFactory', function() {
  // $rootScope.$digest();
  expect(ctrl.marineWeather).not.toBeUndefined();
});

xdescribe('displaying forecasts', function() {
  it('initializes displaying the one day forecast', function() {
    expect(ctrl.oneDayForecast).toEqual(true);
  });

  it('sets the seven day forecast display to true', function() {
    ctrl.showSevenDayForcast();
    expect(ctrl.sevenDayShow).toEqual(true);
  });

  it('changes the one day forecast display to false', function() {
    ctrl.showSevenDayForcast();
    expect(ctrl.oneDayForecast).toEqual(false);
  });

  it('displays the one day forecase and hides the seven day forecast', function() {
    ctrl.showSevenDayForcast();
    ctrl.showOneDayForecast();
    expect(ctrl.oneDayForecast).toEqual(true);
    expect(ctrl.sevenDayShow).toEqual(false);
  });
});

});
