# Currency issue found on the Paypal Javascript SDK Pay Later messaging

It seems the messaging component can only handle the default currency.

When you pass in other currencies you get a warning in the console and the component doesn't render.

```json
paypal_messages_render_warning
Object { description: 'Invalid option value (currency). Expected USD but received "EUR"', timestamp: "1680787554657" }
js:1:103695

```


This example is hosted here: http://miniature-family.surge.sh/

Even using a VPN to browse from different country IP addresses you see the same result
