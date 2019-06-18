### Abstract
From the suite of Web Components meaning: 
- Custom Elements
- Shadow DOM
- HTML Templates
- HTML Imports

the one not used is HTML Templates.

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

### Web Component - CoSlide
1. Intended Use and User Experience (UX)
2. Included Files and Deployment
3. Integration with Site and Backend
4. Configuration and Testing 
5. Further development

#### 1. Intended Use and User Experience (UX) 
CoSlide is intended to be used as a slide show in a web page.
The selected images would change at a configurable period.

#### 2. Included Files and Deployment
The component files are included in the CoSlide folder. The files are:
- CoSlide.js, contains the JavaScript code
- CoSlide.html, contains the HTML code
- CoSlide.css, contains the CSS to style the HTML (shadow) DOM elements

The CoSlide folder should be deployed to the same folder where the home page file resides.

#### 3. Integration with Site and Backend
The CoSlide component would provide slideshow functionality. 
The page to use the component should include the link to the component HTML:
```html
<link rel="import" href="./CoSlide/CoSlide.html">
```
and the component where it is to be used: 
```html
<compo-slide config='{"img":["./CoSlide/im1.jpeg","./CoSlide/im2.jpeg", "./CoSlide/im3.jpeg"], "ms":"5000"}'></compo-slide>
```
The backend should be able the serve the file where the component is included to the HTTP request.
The CoSlide component attributes can be rendered through server side templating accordingly.

#### 4. Configuration and Testing 
The component exposes the below parameters in the config attribute in a JSON string:
a. <img> - the URL of the images to be presented in a JSON array element. 
b. <ms> - the time in between image changes. Value in miliseconds.

After the component is created it hides itself. 
To show it, the component would need to be selected from the light DOM and call the show() method.
The component can be hidden by calling its hide() method.

Testing can be done only for the component using a file as the below or integrated in site.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Slide</title>
    <link rel="import" href="./CoSlide/CoSlide.html">
</head>

<body>
    <compo-slide config='{"img":["./CoSlide/im1.jpeg","./CoSlide/im2.jpeg", "./CoSlide/im3.jpeg"], "ms":"5000"}'></compo-slide>
</body>

</html>
```
#### 5. Further development
Based on the slideshow component a carousel component could be produced.
