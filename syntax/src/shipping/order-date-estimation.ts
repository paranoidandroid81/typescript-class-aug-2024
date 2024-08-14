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

type Pizza = { type: "P"; crust: "thin" | "thick" };
type Calzone = { type: "C"; crust: "thin" | "thick"; extras: string[] };

type ItalianFood = Pizza | Calzone;
const myFood: ItalianFood = { crust: "thin", type: "C", extras: ["peppers"] };
function placeYourOrder(what: Pizza | Calzone) {
  // if ('extras' in what) {
  // }

  switch (what.type) {
    case "P":
      // pizza
      break;
    case "C":
      //calzone
      break;
  }
}
