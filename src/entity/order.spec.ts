import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerid is empty", () => {
    expect(() => {
      let order = new Order("1", "", []);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when items are empty", () => {
    expect(() => {
      let order = new Order("1", "1", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total", () => {
    const order1 = new Order("1", "1", [new OrderItem("1", "Item 1", 10, 1)]);
    expect(order1.total()).toBe(10);

    const order2 = new Order("1", "1", [
      new OrderItem("1", "Item 1", 10, 1),
      new OrderItem("2", "Item 2", 20, 1),
      new OrderItem("3", "Item 3", 30, 3),
    ]);
    expect(order2.total()).toBe(120);
  });
});
