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
"<link rel="import" href="./CoXXX/CoXXX.html">
```

### Web Component - CoNav
1. Intended Use and User Experience (UX)
2. Included Files and Deployment
3. Integration with Site and Backend
4. Configuration and Testing 
5. Further development

#### 1. Intended Use and User Experience (UX) 
CoNav is intended to be used as header and main navigation in a web page.
According to the UX trends the number of navigation links should be limited to seven. 
Based on the same UX trend drop down menus were not added to the component.

Main navigation provides to the user:
a. orientation in terms of helping the user understand if the website is what the user is looking for
b. links to the pages within the web site. Easily switch topics / sections of the web site

The links are shown starting with the left side of the screen and having one isolated in the right side.
The component provides responsiveness, from a currently hardcoded value the navigation links dissapear and are shown by pressing the right side icon in a drop down menu.

#### 2. Included Files and Deployment
The component files are included in the CoNav folder. The files are:
- CoNav.js, contains the JavaScript code
- CoNav.html, contains the HTML code
- CoNav.css, contains the CSS to style the HTML (shadow) DOM elements
- PNG files for the menu icon pressed or not

The CoNav folder should be deployed to the same folder where the home page file resides.

#### 3. Integration with Site and Backend
The CoNav component would provide header and main navigation functionality. 
The page to use the component should include the link to the component HTML:

<link rel="import" href="./CoNav/CoNav.html">

and the component where it is to be used: 

<compo-nav categs="servers, dns" bg__color="red" text__color="yellow"></compo-nav>

The backend should be able the serve the file where the component is included to the HTTP request.
The CoNav component attributes can be rendered through server side templating accordingly.

#### 4. Configuration and Testing 
The component exposes the below parameters:
##### a. "categs" - corresponds to the categories to be presented as navigation elements. 
Based on this categories the navingation links would be created to the exact category string. 
The last category would be presented on the right side of the page.
##### b. "bg__color" - configures the background color for the area on top of which the navigation links or menu icon appears.
Supports colors both in hexa or in words.
##### c. "text__color" - configures the text color of the navigation links.
Supports colors both in hexa or in words.

Testing can be done only for the component using a file as the below or integrated in site.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Navigator</title>
</head>

<body>
    <link rel="import" href="./CoNav/CoNav.html">

    <compo-nav categs="servers, dns" bg__color="red" text__color="yellow"></compo-nav>
</body>

</html>
```

#### 5. Further development
- An open item that remains is the hard coding of the breaking point for the page responsiveness.
- Currently the responsiveness is done in the CoNav.css file but the component should have this breaking point exposed and this could be achieved by using moving the media query from CSS to the window.resize event.
