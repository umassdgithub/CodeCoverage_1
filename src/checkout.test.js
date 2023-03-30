const { checkout } = require("./checkout.js");

// this describes the function we are testing
describe("checkout", () => {
  // this describes the scenario we are testing
  it("should calculate the total with SAVE10 discount", () => {
    expect(checkout(100, "SAVE10")).toEqual(90);
  });

  it("should calculate the total with SAVE20 discount", () => {
    expect(checkout(100, "SAVE20")).toEqual(80);
  });
});
