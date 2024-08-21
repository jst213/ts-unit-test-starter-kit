import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  calculateTotal,
  clearCart,
  applyShippingDiscount,
} from "../src/ecommerce";

let cart = {};
describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    //Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    //Act
    const sum = calculateTotal();

    //Assert
    expect(sum).toBe(600);
  });

  it("should add items to cart", () => {
    //Arrange
    let cart = {};

    //Act
    cart = addToCart("Soap", 2)

    //Assert
    expect(cart["Soap"]).toBe(2);
  })

  it("should apply shipping discount", () => {
    let cart = {};

    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    const sum = calculateTotal();

    expect(applyShippingDiscount(sum)).toBe(590);

  })

  it("should not apply shipping discount", () => {
    let cart = {};

    addToCart("Soap", 1);
    addToCart("Shampoo", 1);

    const sum = calculateTotal();

    expect(applyShippingDiscount(sum)).toBe(300);

  })
});
