### Abstract
From the suite of Web Components meaning: 
- Custom Elements
- Shadow DOM
- HTML Templates
- HTML Imports

the one not used is c. HTML Templates.

The approach for implementing the web component was:
1. Create a class in which to specify the functionality using the **ECMAScript 2015** class syntax
2. Register the new custom element ex. 
```js
customElements.define('compo-xxx', CompoXXX)
```
3. Attach a shadow DOM to the custom element ex. 
```js
const shadowRoot = this.attachShadow({mode: 'open'});
```
4. Import the component HTML template in the page where it is to be used ex. 
```html
<link rel="import" href="./CoXXX/CoXXX.html">
```

### Web Component - CoFooter
1. Intended Use and User Experience (UX)
2. Included Files and Deployment
3. Integration with Site and Backend
4. Configuration and Testing 
5. Further development

#### 1. Intended Use and User Experience (UX) 
CoFooter is intended to be used as footer element in a web page. It will display a copyright notice with a link to the copyright owner web site.

The text is shown on the left side of the screen.

#### 2. Included Files and Deployment
The component files are included in the CoFooter folder. The files are:
- CoFooter.js, contains the JavaScript code
- CoFooter.html, contains the HTML code
- CoFooter.css, contains the CSS to style the HTML (shadow) DOM elements

The CoFooter folder should be deployed to the same folder where the home page file resides.

#### 3. Integration with Site and Backend
The CoFooter component would provide footer functionality. 
The page to use the component should include the link to the component HTML:

<link rel="import" href="./CoFooter/CoFooter.html">

and the component where it is to be used: 

<compo-footer url-target="http://www.yahoo.com" url-text="yahoo" bg__color="aqua" text__color="yellow"></compo-footer>

The backend should be able the serve the file where the component is included to the HTTP request.
The CoFooter component attributes can be rendered through server side templating accordingly.

#### 4. Configuration and Testing 
The component exposes the below parameters:
##### a. "url-target" 
Configures the URL of the copyright owner web site to which the link should point to. 
##### b. "url-text" 
Configures the text for the link.
##### c. "bg__color" 
Configures the background color for the area on top of which the footer text and link appears.
Supports colors both in hexa or in words.
##### d. "text__color" 
Configures the text color. Supports colors both in hexa or in words.

Testing can be done only for the component using a file as the below or integrated in site.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Footer</title>
</head>

<body>
    <link rel="import" href="./CoFooter/CoFooter.html">
    <compo-footer url-target="http://www.yahoo.com" url-text="yahoo" bg__color="aqua" text__color="yellow"></compo-footer>
</body>

</html>
```
#### 5. Further development
No further development needed for now.
