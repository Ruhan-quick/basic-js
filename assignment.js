// https://github.com/Ruhan-quick/basic-js

// Kilometer to Meter Calculation------------------------------------------------------------

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "!Invalid Input, Distance can't be negetive";
    }
    return 1000 * kilometer;  // Return the distance in meter.(1000 meter = 1 Kilometer)
}

//Budget Calculator--------------------------------------------------------------------------

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
    if (numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0) {
        return "!Invalid Input.Any amount can't be negetive here.";
    }
    var price = numberOfWatch * 50 + numberOfPhone * 100 + numberOfLaptop * 500; // Price of watch,phone,laptop (50,100,500)
    return price;

}

// Hotel Cost -------------------------------------------------------------------------------

function hotelCost(numberOfDays) {
    if (numberOfDays < 0) {
        return "!Invalid Input,Number of days can't be negetive";
    }
    if (numberOfDays <= 10) {
        return numberOfDays * 100;
    }

    else if (numberOfDays <= 20) {
        return (numberOfDays - 10) * 80 + 1000;  // Here 1000 is the rent of first 10 days 100*10 = 1000
    }
    else {
        return (numberOfDays - 20) * 50 + 1800; // Here 1800 is the rent of first 20 days 100*10 = 1000
    }
}


// Mega Friend Name Finding------------------------------------------------------------------

function megaFriend(nameArray) {
    var numberOfNames = nameArray.length;

    //Input Validation Check
    for (var i = 0; i < numberOfNames; i++) {
        if (typeof (nameArray[i]) != 'string') {
            return "Invalid Input. All element must be a string.";
        }
    }
    // Large element finding
    var largestName = nameArray[0];
    for (var i = 0; i < numberOfNames; i++) {
        if (largestName.length < nameArray[i].length) {
            largestName = nameArray[i];
        }
    }
    return largestName;
}



// console.log(kilometerToMeter(8));
// console.log(budgetCalculator(2,5,1));
// console.log(hotelCost(12));
// var names = ['Abid','Kamrul Bhai','Kaikubad', 'Boktiar'];
// console.log(megaFriend(names));