describe('Map page', function() {



  it('plots markers', function() {
    browser.get('http://localhost:8080');
    setTimeout(function(){
      element(by.id('markers')).click();
      expect(browser.getTitle()).toEqual('The App of GNAR');
    }, 10000);
  });

  it('display weather info when marker clicked', function() {

  });

  it('routes to correct location when more info clicked', function() {

  });

});
