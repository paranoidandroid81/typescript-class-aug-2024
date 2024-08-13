import { Order } from "./orders";

type UndeliveredOrder = Exclude<Order, { status: "delivered" }>;
// predicting ship date
export function calculateExpectedDeliveryDate(order: UndeliveredOrder) {
  switch (order.status) {
    case "shipped": {
      return new Date();
    }
    case "pending": {
      return new Date();
    }
  }
}

export function isUndeliveredOrder(order: Order): order is UndeliveredOrder {
  return order.status !== "delivered";
}
