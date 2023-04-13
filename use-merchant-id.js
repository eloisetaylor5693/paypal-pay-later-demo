PayPalSDK.Messages({
  currency: "USD",
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-USD");

PayPalSDK.Messages({
  currency: "EUR",
  "merchant-id": "EUR",
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-EUR");

PayPalSDK.Messages({
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-no-currency");
