let homepage= function() {

    let firstNumber=element(By.model('first'));
    let secondNumber=element(by.model('second'));
    let clickGo=element(by.css('[ng-click="doAddition()"]'));

    this.gets=function(url){
        browser.get(url);        
    };
    this.enterFirstNumber= function (firstno) {
        firstNumber.sendKeys(firstno);
    };

    this.enterSecondNumber=function(secondno){
        secondNumber.sendkeys(secondno);
    };
    this.clickGo=function() {
        clickGo.click();
    };

};

//Module.Exports=new homepage();
//Module.Exports=new homepage();

Module.Exports= new homepage();

