//let homepage=require('C:/Users/Surya/Desktop/Protractor Project/pages/homepage.js');

//let abc=require('./../pages/homepage')
describe('Demo Calculator Tests with POM', function(){

    it('Addition Test with POM', function() {


        console.log("Hi To POM");
        //browser.sleep(2000);
        //var home=new homepage();
        //home.gets('http://juliemr.github.io/protractor-demo/');
        //browser.sleep(2000);
        browser.get ('http://juliemr.github.io/protractor-demo/');
        browser.sleep(5000);

        element(By.model('first')).sendKeys('2');

        element(by.model('second')).sendKeys('2');
        
        element(by.css('[ng-click="doAddition()"]')).click();

        browser.sleep(2000);
        





    });






});