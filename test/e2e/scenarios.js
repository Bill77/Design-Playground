'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('Testing Slide Menu Operation', function() {
    element(by.id('navIconOpen')).click();    
    browser.driver.sleep(250);
    element(by.id('navIconClose')).click();
    
  });
});
