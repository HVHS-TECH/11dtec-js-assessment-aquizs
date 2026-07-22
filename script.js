//Array that stores stuff for cart when u add to order
let itemNames = [];
let itemPrices = [];
let itemQuantity = [];

//Function to add items to cart from add button
function addToCart(name, price) {

    //found lets you know if the item is in the cart if not when addTocart function then add to array and add is false to start with otherwise it will just add it
    let found = false;
    //scan through the items with their index number until find the one that was pressed and add it to array
    for(let i=0; i<itemNames.length; i++) {
        //checks if the index number matches the name of the thing
        if(itemNames[i] == name) { 
            //adds on the quantity of the product
            itemQuantity[i] = itemQuantity[i] + 1;
            //puts in an array and if there already is then increase the quantity
            found = true;
        }
    }

    //if its not found then put in the array and put the name price and quantity info
    if(found == false) {
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

    for(let i=0; i<itemNames.length; i++) {
        let cost = itemPrices[i] * itemQuantity[i];

        cartOutPut = cartOutPut + itemNames[i] + " x" + itemQuantity[i] + " - $" + cost + "<br>";
        total = total + cost;
    }

    document.getElementById("cartItems").innerHTML = cartOutPut
    document.getElementById("total").innerHTML = total;
}

