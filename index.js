PayPalSDK.Messages({
  currency: "USD",
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
  currency: "GBP",
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-GBP");

PayPalSDK.Messages({
  style: {
    layout: "text",
  },
}).render("#paypal-pay-later-message-no-currency");
