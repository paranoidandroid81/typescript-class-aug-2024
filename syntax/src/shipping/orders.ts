type OrderMeta = {
  orderId: string;
  customerId: string;
};

type PendingOrder = {
  status: "pending";
} & OrderMeta;

type ShippedOrder = {
  shipDate: string;
  status: "shipped";
} & OrderMeta;

type DeliveredOrder = {
  shipDate: string;
  deliveryDate: string;
  status: "delivered";
} & OrderMeta;

export type Order = PendingOrder | ShippedOrder | DeliveredOrder;
