import { Address } from "./address.js";
import { Order } from "./order.js";
let order = require('./order');

let storeCollection = {
    fW: new Store('FW'),
    arlingtion: new Store('Arlington'),
    dallas: new Store('Dallas')
};

function Store (n) {
    this.id = null;
    this.name = n;
    this.address = new Address();
    this.orders = [];
  }
  
  module.exports = {};