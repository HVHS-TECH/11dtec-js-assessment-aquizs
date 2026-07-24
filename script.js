//Array that stores stuff for cart when u add to order
let itemNames = [];
let itemPrices = [];
let itemQuantity = [];

//Function to add items to cart from add button
function addToCart(name, price) {

    //found lets you know if the item is in the cart if not when addTocart function then add to array and add is false to start with otherwise it will just add it
    let found = false;
    //scans through the array as a loop to see whats in there
    for(let i=0; i<itemNames.length; i++) {
        //checks if the index number matches the name of the thing
        if(itemNames[i] == name) { 
            //adds on the quantity of the product
            itemQuantity[i] = itemQuantity[i] + 1;
            //the item is in the cart now
            found = true;
        }
    }

    //if its not found then put in the array and put the name price and quantity info
    if(found == false) {
        //it puts the name price and quantity in to the array
        itemNames.push(name);
        itemPrices.push(price);
        itemQuantity.push(1);
    }

    //displays whats on the cart
    displayCart();
}

//display cart function to show stuff on the cart
function displayCart() {
    //cart output starts with nothing so we can put stuff in it
    let cartOutPut = "";
    //nothing in there at the start
    let total = 0;
    //scans through the array as a loop to see whats in there
    for(let i=0; i<itemNames.length; i++) {
        //which index number their price x the quantity bought to find out the total price of that product
        let cost = itemPrices[i] * itemQuantity[i];
        //what cartoutput has with the cartoutput item name through their index number the "x" is for the x how many and item quantity i and their cost just what gonna be written on the html to see
        cartOutPut = cartOutPut + itemNames[i] + " x" + itemQuantity[i] + " - $" + cost + "<br>";
        //total is how much everything cost
        total = total + cost;
    }
    //display the things on the html
    document.getElementById("cartItems").innerHTML = cartOutPut
    document.getElementById("total").innerHTML = total;
}

//checkout function
function checkOut() {
    //takes the values from namefield and moneyfield that we got 
    let name = document.getElementById("nameField").value;
    let money = Number(document.getElementById("moneyField").value);
    //total is cost by default 0
    let total = 0;
    //store a list of purchased items
    let items = "";
    //scans through the array as a loop to see whats in there
    for(let i=0; i<itemNames.length; i++) {
        //item prices from index times itemquantity by index is the total
        total = total + (itemPrices[i] * itemQuantity[i]);
        //puts the item amounts in the recipt same code as the display cart too
        items = items + itemNames[i] + " x" + itemQuantity[i] + " - $" + (itemPrices[i] * itemQuantity[i]) + "<br>";
    }
    //if there is no name written then it will alert and prevent you from continuing
    if(name == ""){
        alert("enter a name");
        //stops the checkout function even after ok is pressed
        return;
    }
    //if the total cost is more than the inputted money then do an alert and not let you proceed
    if(money < total) {
        alert("too poor lol noob");
    }
    //otherwise if money is bigger than total then do the change variable of money - total
    else {
        let change = money - total;
        //puts into html what you see and the writing stuff
        document.getElementById("receipt").innerHTML = "<h2>Receipt</h2>" + "Name: " + name + "<br><br>" + "Items:<br>" + items + "<br>" + "Total: $" + total +"<br>" + "Money: $" + money + "<br>" + "Change: $" + change;
    }
}
//reset order function to clear your order
function resetOrder() {
    //sets the item names prices and quantity to nothing to reset it back to 0
    itemNames = [];
    itemPrices = [];
    itemQuantity = [];
    //sets the items total cost recipet name and money inputted to nothing except for cart and total because otherwise it would be nothing
    document.getElementById("cartItems").innerHTML = "Cart is empty";
    document.getElementById("total").innerHTML = "0";
    document.getElementById("receipt").innerHTML = "";
    document.getElementById("nameField").value = "";
    document.getElementById("moneyField").value = "";
}