//Smart Attendance Checker

function checkExamEligibility(attendance, feesPaid) {

    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam");
    } else {
        console.log("Not Allowed");
    }

}

checkExamEligibility(85, true);

//Mobile Password Strength Checker

let password = "Abc12345";

let hasUppercase = false;
let hasNumber = false;

for (let char of password) {

    if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
    }

    if (char >= '0' && char <= '9') {
        hasNumber = true;
    }
}

if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}


//Find Second Largest Number

let numbers = [10, 50, 80, 20, 90, 70];

let largest = 0;
let secondLargest = 0;

for (let num of numbers) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }

}

console.log(secondLargest);

//Bus Seat Booking System

let seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let bookedSeats = [3, 5];

let userSeat = 5;

if (bookedSeats.includes(userSeat)) {
    console.log("Seat Already Booked");
} else {
    bookedSeats.push(userSeat);
    console.log("Seat Booked Successfully");
}


//ATM Cash Withdraw Logic

function withdrawAmount(balance, withdraw) {

    if (withdraw > balance) {
        return "Insufficient Balance";
    }

    if ((balance - withdraw) < 1000) {
        return "Minimum Balance Should Maintain 1000";
    }

    return "Withdraw Successful";
}

console.log(withdrawAmount(10000, 9500));


//Product Search Engine

let products = ["iphone", "samsung", "realme", "oppo"];

let searchProduct = "realme";

let found = false;

for (let product of products) {

    if (product.toLowerCase() === searchProduct.toLowerCase()) {
        found = true;
        break;
    }

}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}

//Voting Eligibility System

let age = 20;
let hasVoterId = true;
let citizenship = "Indian";

if (age >= 18) {

    if (hasVoterId === true && citizenship === "Indian") {
        console.log("Eligible to Vote");
    } else {
        console.log("Not Eligible to Vote");
    }

} else {
    console.log("Not Eligible to Vote");
}

//Online Food Order Bill

function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gst) / 100;

    let totalBill = foodPrice + gstAmount + deliveryCharge - discount;

    console.log("Total Bill : ₹" + totalBill);
}

calculateBill(400, 5, 30, 0);

//Reverse Word Without reverse()

let word = "javascript";

let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord);

//Mini Instagram Like System

let isLiked = false;
let totalLikes = 100;

function likeSystem() {

    isLiked = !isLiked;

    console.log(isLiked ? "Liked ❤️" : "Like 🤍");

    if (isLiked) {
        totalLikes++;
    } else {
        totalLikes--;
    }

    console.log("Total Likes :", totalLikes);
}

likeSystem();