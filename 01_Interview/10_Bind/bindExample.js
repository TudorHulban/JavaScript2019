function getMonthlyFee(monthlyFee){
  this.balance = this.balance - monthlyFee;
}

var rachel = {name:'Rachel Green', balance:500};
var john = {name:'John Smith', balance:1000};

console.log(rachel.balance);
console.log(john.balance);

var getRachelReccurentFee = getMonthlyFee.bind(rachel, 90);
var getJohnReccurentFee = getMonthlyFee.bind(john, 100);

getRachelReccurentFee();

console.log(rachel.name + ": remaining balance is " + rachel.balance + ".");

getJohnReccurentFee();

console.log(john.name + ": remaining balance is " + john.balance + ".");
