let itemNames = [];
let itemPrices = [];
let itemQuantity = [];

function addToCart(name, price) {

    let found = false;
    for(let i=0; i<itemNames.length; i++) {
        if(itemNames[i] == name) {
            itemQuantity[i] = itemQuantity[i] + 1;
            found = true;
        }
    }

    if(found == false) {
        itemNames.push(name);
        itemPrices.push(price);
        itemQuantity.push(1);
    }

    displayCart();
}

function displayCart() {
    let cartOutPut = "";
    let total = 0;

    for(let i=0; i<itemNames.length; i++) {
        let cost = itemPrices[i] * itemQuantity[i];

        cartOutPut = cartOutPut + itemNames[i] + " x" + itemQuantity[i] + " - $" + cost + "<br>";
        total = total + cost;
    }

    document.getElementById("cartItems").innerHTML = cartOutPut
    document.getElementById("total").innerHTML = total;
}

