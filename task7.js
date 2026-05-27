//E-Commerce Product Filter
async function getProducts() {
    let response = await fetch("https://fakestoreapi.com/products/");
    let data = await response.json();

    let result = data.filter(product =>
        product.price > 100 &&
        product.category === "electronics"
    );

    result.forEach(product => {
        console.log(product.title);
        console.log(product.price);
    });
}

getProducts();


//Online Shopping Cart Total

let cart = [
  {product:"Shoes", price:2000, qty:2},
  {product:"Watch", price:1500, qty:1},
  {product:"Bag", price:1000, qty:3}
];

let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.qty);
}, 0);

console.log(total);

//Employee Salary Dashboard

let employees = [
  {name:"John", salary:25000},
  {name:"Sam", salary:50000},
  {name:"Ravi", salary:45000},
  {name:"Kumar", salary:30000}
];

let result = employees
    .filter(emp => emp.salary > 40000)
    .map(emp => emp.name);

console.log(result);

//Food Delivery App
let hotels = [
  {hotel:"A2B", rating:4.1},
  {hotel:"KFC", rating:4.7},
  {hotel:"Dominos", rating:4.3}
];

let result = hotels.find(hotel => hotel.rating > 4.5);

console.log(result);

//Student Pass/Fail System

let marks = [45,67,89,90,34];

let result = marks.every(mark => mark >= 35);

console.log(result);

//OTP Verification System

let otpList = [1234,4567,7890,9876];

let enteredOtp = 4567;

let result = otpList.includes(enteredOtp);

console.log(result);

//Movie Booking Timer

let count = 10;

let timer = setInterval(() => {
    console.log(count);

    if(count === 0){
        console.log("Booking Closed");
        clearInterval(timer);
    }

    count--;
}, 1000);

//Instagram Like Counter


let likes = 0;

let counter = setInterval(() => {
    likes++;

    console.log("Likes :", likes);

    if(likes === 10){
        clearInterval(counter);
    }
}, 1000);

//Login Authentication

let username = "admin";
let password = "12345";

if(username === "admin" && password === "12345"){
    console.log("Login Success");
}
else{
    console.log("Invalid Credentials");
}

//Weather App Simulation

let internet = true;

let weatherPromise = new Promise((resolve, reject) => {

    if(internet){
        resolve("Weather Data");
    }
    else{
        reject("No Internet");
    }

});

weatherPromise
    .then(data => console.log(data))
    .catch(error => console.log(error));

//Amazon Product Search

let products = [
    "shirt for men",
    "watch",
    "black shirt",
    "mobile",
    "t-shirt"
];

let result = products.filter(product =>
    product.includes("shirt")
);

console.log(result);


//YouTube Video Duration


let videos = [10,20,30,40];

let totalTime = videos.reduce((sum, video) => {
    return sum + video;
}, 0);

console.log(totalTime);


//Swiggy Order Status

let status = "Preparing";

switch(status){

    case "Placed":
        console.log("Order Placed Successfully");
        break;

    case "Preparing":
        console.log("Your food is being prepared");
        break;

    case "Out for Delivery":
        console.log("Delivery Partner is on the way");
        break;

    case "Delivered":
        console.log("Order Delivered");
        break;

    default:
        console.log("Invalid Status");
}


//WhatsApp Chat Analyzer

let chats = ["hi","hello","where","ok","bye"];

let count = 0;

for(let i = 0; i < chats.length; i++){
    count++;
}

console.log("Total Messages :", count);

//Netflix Age Restriction

let age = 20;

let result = age >= 18
    ? "watch movie"
    : "access denied";

console.log(result);


//Flipkart Product Sorting

let prices = [1200,450,9999,2500,700];

prices.sort((a,b) => a - b);

console.log(prices);


//Employee Attendance

let attendance = ["present","absent","present"];

let result = attendance.reduce((count, status) => {

    count[status] = (count[status] || 0) + 1;

    return count;

}, {});

console.log(result);

//Banking System

let balance = 5000;

function deposit(amount){
    balance += amount;
    console.log("Deposited :", amount);
}

function withdraw(amount){

    if(amount <= balance){
        balance -= amount;
        console.log("Withdrawn :", amount);
    }
    else{
        console.log("Insufficient Balance");
    }
}

function checkBalance(){
    console.log("Balance :", balance);
}

deposit(2000);
withdraw(1000);
checkBalance();

// Zomato Rating Checker

let ratings = [4.5, 3.8, 2.9, 4.2];

let result = ratings.some(rating => rating < 3);

console.log(result);


//Real API Product Table

/*<!DOCTYPE html>
<html>
<head>
    <title>Dog API</title>
</head>
<body>

<h1>Random Dog Image 🐶</h1>

<button onclick="getDog()">Get Dog</button>

<br><br>

<img id="dogImage" width="300">

<script>

async function getDog(){

    
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await response.json();
    document.getElementById("dogImage").src = data.message;
}

</script>

</body>
</html>
*/

// Small E-Commerce Logic
let cart = [];

async function ecommerce(){

    let response = await fetch("https://fakestoreapi.com/products/");
    let products = await response.json();
    let electronics = products.filter(
        product => product.category === "electronics"
    );

    console.log(electronics);

    let sorted = products.sort((a,b) => a.price - b.price);
    console.log(sorted);
    let search = products.filter(product =>
        product.title.toLowerCase().includes("shirt")
    );

    console.log(search);
    cart.push(products[0]);
    cart.push(products[1]);
    console.log(cart);

    let total = cart.reduce((sum, item) => {
        return sum + item.price;
    }, 0);

    console.log("Total :", total);

}

ecommerce();