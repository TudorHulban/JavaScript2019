### Coxxx - template for web component
```html
https://ayushgp.github.io/html-web-components-using-vanilla-js/
https://ayushgp.github.io/html-web-components-using-vanilla-js-part-2/
https://ayushgp.github.io/html-web-components-using-vanilla-js-part-3/
https://www.codementor.io/ayushgupta/vanilla-js-web-components-chguq8goz
https://dev.to/aspittel/building-web-components-with-vanilla-javascript--jho
https://dev.to/thatjoemoore/bringing-order-to-web-design-chaos--3fhb
https://developers.google.com/web/fundamentals/web-components/shadowdom
```

Note: At the top of your UserCard.js file, define a constant called currentDocument. It is needed in imported HTML’s scripts to allow them access to the DOM of the imported HTML. Define it as follows:
```js
const currentDocument = document.currentScript.ownerDocument;
```
use it:
```js
const template = currentDocument.querySelector('#HTML template ID');
  ```
