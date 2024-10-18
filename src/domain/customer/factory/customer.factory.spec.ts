import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit tests", () => {
  it("should create a customer", () => {
    const customer = CustomerFactory.create("Higor");
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Higor");
    expect(customer.address).toBeUndefined();
  });

  it("should create a customer with an address", () => {
    const address = new Address("Street", 123, "Zip", "City");
    const customer = CustomerFactory.createWithAddress("Higor", address);
    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Higor");
    expect(customer.address).toBe(address);
  });
});
