console.log ("Hello World") 

describe('Demo Calculator Tests', function () { 
    
    it('Addition Test', function () {
       

        browser.get ('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);

        element(By.model('first')).sendKeys('2');

        element(by.model('second')).sendKeys('2');
        
        element(by.css('[ng-click="doAddition()"]')).click();

        browser.sleep(2000);

        //let result=element(By.cssContainingtext('.ng-binding','4'))

        //expect(result.gettext()).toequal('4');
          
    });






});