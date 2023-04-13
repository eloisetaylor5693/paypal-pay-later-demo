PayPalSDK.Messages({
  currency: "USD",
  "merchant-id": "USD",
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-USD");

PayPalSDK.Messages({
  currency: "EUR",
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-EUR");

PayPalSDK.Messages({
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-no-currency");
