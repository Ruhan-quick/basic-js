function kilometerToMeter(kilometer){
    if(kilometer<0){
        return "!Invalid Input, Distance can't be negetive";
    }
    return 1000*kilometer;
}

function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop){
    if(numberOfWatch<0 || numberOfPhone<0 || numberOfLaptop<0){
        return "!Invalid Input.Any amount can't be negetive here."
    }
    var price = numberOfWatch*50 + numberOfPhone*100 + numberOfLaptop*500;
    return price;

}

function hotelCost(numberOfDays){
    if(numberOfDays<0){
        return "!Invalid Input,Number of days can't be negetive";
    }
    if(numberOfDays<=10){
        return numberOfDays*100;
    }

    else if(numberOfDays<=20){
        return (numberOfDays-10)*80 + 1000;
    }
    else{
        return (numberOfDays-20)*50 + 2600;
    }
}

function megaFriend(nameArray){
    var numberOfNames = nameArray.length;

    for(var i=0;i<numberOfNames;i++){
        if(typeof(nameArray[i]) != 'string'){
            return "Invalid Input. All element must be a string.";
        }
    }
    var largestName = nameArray[0];
    for(var i=0;i<numberOfNames;i++){
        if(largestName.length<nameArray[i].length){
            largestName = nameArray[i];
        }
    }
    return largestName;
}

console.log(kilometerToMeter(-8));
console.log(budgetCalculator(5,6,9));
console.log(hotelCost(37));
var names = ['Abid','Kamrul Bhai','Kaikubad',15, 'Boktiar'];
console.log(megaFriend(names));