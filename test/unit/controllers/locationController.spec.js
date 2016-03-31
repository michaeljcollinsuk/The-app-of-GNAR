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
    filterWeatherFactoryMock.setTabs.and.returnValue({tabs: 10});
    ctrl = $controller('locationController', {forecast: forecast});
    $rootScope = _$rootScope_;
  }));

  describe('on intitialisation', function(){

    it('initializes with information from the filterWeatherFactory', function() {
      expect(ctrl.marineWeather).toEqual({data: {data: {weather: {}}}});
    });

    it('initializes with tabs from the filterWeatherFactory', function() {
      expect(ctrl.tabs).toEqual({tabs: 10});
    });

  });


  describe('onClickTab', function(){

    it('changes the current tab', function(){
      var newTab = 'two.tpl.html'
      ctrl.onClickTab(newTab)
      expect(ctrl.currentTab).toEqual(newTab)
    });

  });

  describe('isActiveTab', function(){

    it('returns true if tab is active', function(){
      var tabUrl = 'three.tpl.html'
      ctrl.onClickTab(tabUrl)
      expect(ctrl.isActiveTab(tabUrl)).toEqual(true)
    });

    it('returns false if tab is not active', function(){
      var tabUrl = 'three.tpl.html'
      var inactiveTab = 'one.tpl.html'
      ctrl.onClickTab(tabUrl)
      expect(ctrl.isActiveTab(inactiveTab)).toEqual(false)
    });

  });

});
