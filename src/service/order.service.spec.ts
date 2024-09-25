import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service unit tests", () => {
  it("should calculate total of all orders", () => {
    const order1 = new Order("1", "1", [
      new OrderItem("1", "p1", "Item 1", 10, 1),
      new OrderItem("1", "p1", "Item 1", 20, 2),
    ]);

    const order2 = new Order("2", "2", [
      new OrderItem("2", "p2", "Item 2", 10, 1),
      new OrderItem("2", "p2", "Item 2", 20, 2),
    ]);

    const orders = [order1, order2];

    expect(OrderService.total(orders)).toBe(100);
  });
});
