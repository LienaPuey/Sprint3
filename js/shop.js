// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'Cooking Oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var contador = 0;
var total = 0;

// Exercise 1
function buy(id) {
    var item = products.find((product) =>product.id === id);
    cartList.push(item);
    console.log(cartList);

    document.getElementById("count_product").innerHTML= cartList.length;
    generateCart();
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
    while (cart.length > 0) {
        cart.pop();
        total= 0;
        contador=0;
    }
    console.log(cart);

    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(i=0; i < cartList.length; i++){
        var precio = cartList[i].price;
        total += precio;
    }
    console.log(total);

}

// Exercise 4
function generateCart() {
    var itemIdQuantityMap = cartList.reduce((acc,item)=> {
        if(acc[item.id] !== undefined){ 
            acc[item.id].quantity +=1;
        }else {
            acc[item.id] = {...item, quantity: 1};
        }
        return acc;
    }, {});

    cart = Object.values(itemIdQuantityMap);
    console.log(cart);
    applyPromotionsCart();
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
}


// Exercise 5
function applyPromotionsCart() {

    for(let i = 0; i < cart.length; i++){
        const precio = cart[i].price;
        const cantidad = cart[i].quantity;
        cart[i].subtotal = precio * cantidad;

        if (cart[i].offer !== undefined){
            if (cantidad >= cart[i].offer.number){
                const oferta = cart[i].offer.percent;
                
                cart[i].subtotalWithDiscount = ((precio * cantidad) - precio * cantidad * oferta /100);
            }else{
                cart[i].subtotalWithDiscount = cart[i].subtotal;
            }
        }else {
            cart[i].subtotalWithDiscount = cart[i].subtotal;
        }
    }
    console.log(cart);
    // Apply promotions to each item in the array "cart"
}

// Exercise 6
function printCart() {


    var cartListHtml="";
    var total = 0;
    if(cart.length == 0){
        document.getElementById("count_product").innerHTML= "0";
        document.getElementById("cart_list").innerHTML = `

        <td colspan="4" class=" text-center px-5 py-3">
            <h3>Your Cart Is Currently Empty!</h3>
        </td>
        
        `;
        document.getElementById("total_price").innerHTML= total;
    }else{

        for(let i = 0; i < cart.length; i++){
            var producto = cart[i].name;
            var precio = cart[i].price;
            var cantidad = cart[i].quantity;
            var totalDiscounted = cart[i].subtotalWithDiscount;
            cartListHtml += `
                <tr>
                    <th scope="row">${producto}</th>
                    <td>${precio}</td>
                    <td>${cantidad}</td>
                    <td>$${totalDiscounted}</td>
                    <td><svg role="button" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeFromCart(${cart[i].id})">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg></td>
                </tr>
                `;

              total += totalDiscounted;

        }

        document.getElementById("cart_list").innerHTML= cartListHtml;
        document.getElementById("total_price").innerHTML= total;
    }
    // Fill the shopping cart modal manipulating the shopping cart dom
}
// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    var item = products.find((product) =>product.id === id);
    if (cart.length == 0){
        cart.push({...item, quantity: 1});
        contador ++;
    }else {
        var elemento = cart.find((product)=> product.id === item.id);
        if(elemento != undefined){
            elemento.quantity +=1;
            contador++;
        }else{
            cart.push({...item, quantity:1});
           contador++;
        }
    }
    applyPromotionsCart();
    document.getElementById("count_product").innerHTML = contador;

    console.log(cart);
}



// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    const producto = cart.find(item => item.id === id);
    if(producto.quantity > 1){
        producto.quantity--;
        contador--;
        applyPromotionsCart();
        printCart();
    }else{
        cart.splice(producto, 1);
        contador--;
        applyPromotionsCart();
        printCart();
    }
    document.getElementById("count_product").innerHTML = contador;
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}