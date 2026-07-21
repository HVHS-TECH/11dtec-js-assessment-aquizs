let itemNames = [];
let itemPrices = [];
let itemQuantity = [];

function addToCart(name, price) {

    let found = false;
    for(let i=0; i<itemNames.length; i++) {
        if(itemNames[i] == name) {
            itemQantity[i] = itemQuantiy[i] + 1;
            found = true;
        }
    }

    if(found == false) {
        itemNames.push(name);
    }
}