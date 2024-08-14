import { describe, test } from "vitest";
import {
  calculateExpectedDeliveryDate,
  isUndeliveredOrder,
  Order,
} from "./shipping";

describe("Shipping Orders", () => {
  test("shipped orders", () => {
    const order: Order = {
      status: "shipped",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13",
    };

    const expectedDate = calculateExpectedDeliveryDate(order);
  });

  test("pending orders", () => {
    const order: Order = {
      status: "pending",
      customerId: "99",
      orderId: "12",
    };

    const expectedDate = calculateExpectedDeliveryDate(order);
  });

  test("delivered orders", () => {
    const order: Order = {
      status: "delivered",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13",
      deliveryDate: "2024-08-15",
    };

    // @ts-expect-error
    const expectedDate = calculateExpectedDeliveryDate(order);
  });

  test("more real world", () => {
    const order1: Order = {
      status: "shipped",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13",
    };

    const order2: Order = {
      status: "pending",
      customerId: "99",
      orderId: "12",
    };

    const order3: Order = {
      status: "delivered",
      customerId: "99",
      orderId: "12",
      shipDate: "2024-08-13",
      deliveryDate: "2024-08-15",
    };

    const orders = [order1, order2, order3];

    const deliveryDates = orders
      .filter(isUndeliveredOrder)
      .map(calculateExpectedDeliveryDate);

    const otherList = orders.filter((o) => o.status !== "delivered");

    console.log(deliveryDates);
  });
});
