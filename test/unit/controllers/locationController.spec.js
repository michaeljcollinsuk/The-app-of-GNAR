describe('locationController', function(){
  var ctrl;
  var chosenLocationFactoryMock;
  var response;
  var $rootScope;

  beforeEach(module('GnarApp', function($routeProvider) {
    $routeProvider.otherwise(function(){return false;});
  }));

  // above is a workaround for a karma bug

  beforeEach(function() {
    response = [{tides:2}];
    chosenLocationFactoryMock = jasmine.createSpyObj('chosenLocationFactoryMock', ['getMarineInfo']
  );
  module('GnarApp', {
    chosenLocationFactory: chosenLocationFactoryMock
  });
});

beforeEach(inject(function($controller, $q, _$rootScope_) {
  chosenLocationFactoryMock.getMarineInfo.and.returnValue($q.when(response));
  ctrl = $controller('locationController');
  $rootScope = _$rootScope_;
}));

it('initializes with information from the chosenLocationFactory', function() {
  $rootScope.$digest();
  expect(ctrl.marineWeather).toEqual(response);
});

describe('displaying forecasts', function() {
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

describe('returning the time in 24 hour format', function() {

  it("converts a three digit time to the correct format", function() {
    expect(ctrl.time('300')).toEqual('0300');
  });

  it("does not change a four digit time", function() {
    expect(ctrl.time('1200')).toEqual('1200');
  });
});

describe('formatting the date', function() {
  it("returns the date dd/mm/yyyy", function() {
    var date = "2016-03-28";
    var result = "28-03-2016";
    expect(ctrl.date(date)).toEqual(result);
  });
});
});
