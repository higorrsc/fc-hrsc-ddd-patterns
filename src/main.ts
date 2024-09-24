import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("1", "Higor Cruz");
const address = new Address("Street", 123, "Zip", "City");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, 1);
const item2 = new OrderItem("2", "Item 2", 20, 1);
const order = new Order("1", "1", [item1, item2]);
