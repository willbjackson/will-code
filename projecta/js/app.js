import { StoreLocation } from "./store";
import { storeCollection } from "./store.js";
import { userCollection } from "./user.js";
import { Pizza } from "./pizza.js";
import { Order } from "./order.js";

function validatePizza() {
    let userCollection = document.querySelector('select[name="user"]');
    let storeCollection = document.querySelector('select[name="store"]');
    let crustCollection = document.querySelector('select[name="crust"]');
    let sizeCollection = document.querySelectorAll('input[name="size"]');
    let toppingCollection = document.querySelectorAll('input[name="toppings"]');
    let crust = null, size = null, toppings = [];

    sizeCollection.forEach(function (s) {
        if (s.checked) {
            size = s.value;
        }
    });

    toppingCollection.forEach(function (t) {
        if (t.checked) {
            toppings.push(t.id);
        }        
    });

    if (userCollection.value.toLowerCase() == 'none') {
        return;
    }

    if(storeCollection.value.toLowerCase() == 'none') {
        return;
    }

    if (crustCollection.value.toLowerCase() == 'none') {
        return;
    }
    if (!size) {
        return;
    }

    if (toppings.length == 0) {
        return;
    }
    crust = crustCollection.value;
    user = userCollection.value;
    store = storeCollection.value;
    pizzas.push(new Pizza(crust, size, toppings));
    addToOrderCart(pizzas);
} 

function addToOrderCart (p) {
    let orderCart = document.querySelector('#orderCart');

    orderCart.innerHTML = '';

    for (let i = 0; i < p.length; i += 1) {
        let li = document.createElement('i');

        li.innerHTML = `${p[i].size.name} ${p[i].crust} with ${p[i].toppings} for $${p[i].size.price} `;
        orderCart.appendChild(li);
    }
}

function createOrder () {
    let order = new Order();

    order.pizzas = pizzas;
    attachLocation(store, order);
    attachUser(user, order);
}

function attachLocation (sl, o) {
    let store = storeLocationCollection[sl];

    store.orders.push(o);
}

function attachUser(u, o) {
    let user = userCollection[u];
  
    user.orders.push(o);
  }
  
  let pizzas = [];
  let user = null;
  let store = null;
  
  let makeOrder = document.querySelector('#makeOrder');
  let makePizza = document.querySelector('#makePizza');
  
  if (makeOrder) {
    makeOrder.addEventListener('click', function () {
  
    });
  };
  
  if (makePizza) {
    makePizza.addEventListener('click', function () {
  
    });
  };

// if (addPizza) {
//     addPizza.addEventListener('click', validatePizza);
// }

// if (placeOrder) {
//     placeOrder.addEventListener('click', createOrder);
// }

// if (addLocation) {
//     addLocation.addEventListener('click', createOrder);
// }

// if (addUser) {
//     addUser.addEventListener('click', createOrder);
// }
