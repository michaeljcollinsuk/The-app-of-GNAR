describe('locationController', function(){
  var ctrl;
  var filterWeatherFactoryMock;
  var response;
  var $rootScope;
  var forecast;

  beforeEach(module('GnarApp', function($routeProvider) {
    $routeProvider.otherwise(function(){return false;});
  }));

  // above is a workaround for a karma bug

  beforeEach(function() {
    response = [{tides:2}];
    forecast = {data: {data: {weather: {}}}};
    filterWeatherFactoryMock = jasmine.createSpyObj('filterWeatherFactoryMock', ['sortData', 'setTabs']
  );
  module('GnarApp', {
    filterWeatherFactory: filterWeatherFactoryMock
  });
});

beforeEach(inject(function($controller, $q, _$rootScope_) {
  filterWeatherFactoryMock.sortData.and.returnValue({data: {data: {weather: {}}}});
  ctrl = $controller('locationController', {forecast: forecast});
  $rootScope = _$rootScope_;
}));

it('initializes with information from the chosenLocationFactory', function() {
  expect(ctrl.marineWeather).toEqual({data: {data: {weather: {}}}});
});

describe('onClickTab', function(){

  it('changes the current tab', function(){
    var newTab = 'two.tpl.html'
    ctrl.onClickTab(newTab)
    expect(ctrl.currentTab).toEqual(newTab)
  });

});

});
