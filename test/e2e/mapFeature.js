describe('Map page', function() {



  it('can find a marker', function() {
    browser.get('http://localhost:8080');
    setTimeout(function(){
      element(by.id('markers')).click();
    }, 10000);
    expect(browser.getTitle()).toEqual('The App of GNAR');
  });

  it('display weather info when marker clicked', function() {
    browser.get('http://localhost:8080');
    setTimeout(function(){
      element(by.id('markers')).click();
      console.log();
    }, 10000);
      expect(element(by.css('#locationPopup')).getText()).toBe("Temperature");

  });

  it('routes to correct location when more info clicked', function() {

  });

});
