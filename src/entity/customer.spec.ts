import Address from "./address";
import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("", "John");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("1", "");
    }).toThrowError("Name is required");
  });

  it("should change name", () => {
    let customer = new Customer("123", "John");
    customer.changeName("Higor");
    expect(customer.name).toBe("Higor");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Higor");
    const address = new Address("Street", 123, "Zip", "City");
    customer.Address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });

  it("should throw error when address is undefined when activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Higor");
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Higor");
    customer.deactivate();
    expect(customer.isActive()).toBe(false);
  });
});
