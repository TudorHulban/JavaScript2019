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
### Web Component - CoForm
1. Intended Use and User Experience (UX)
2. Included Files and Deployment
3. Integration with Site and Backend
4. Configuration and Testing 
5. Further development

#### 1. Intended Use and User Experience (UX) 
CoForm is intended to be used as a form like structure in a web page.
CoForm is not a HTML form but a suite of fields that are presented as a form. The component would collect the information in the fields and create a real form like request to a configurable URL.
CoForm can selectively show fields following and based on a unique selection element.

#### 2. Included Files and Deployment
The component files are included in the CoForm folder. The files are:
- CoForm.js, contains the JavaScript code
- CoForm.html, contains the HTML code
- CoForm.css, contains the CSS to style the HTML (shadow) DOM elements
- PNG files for the menu icon pressed or not

The CoForm folder should be deployed to the same folder where the home page file resides.

#### 3. Integration with Site and Backend
The CoForm component would provide header and main navigation functionality. 
The page to use the component should include the link to the component HTML:
```html
<link rel="import" href="./CoForm/CoForm.html">
```
and the component where it is to be used: 
```html
<compo-form config='{"h1":"Create new Customer","url":[{"p":"post"},{"u":"https://putsreq.com/lJALaobXfJ10fsWqEK97"}],"info":[{"n":"name1","o":[]}, {"n":"name2","o":[]}, {"n":"name3","o":["option1", "option2", "option3"]}, {"n":"name4","o":[], "mode":"tandem"}, {"n":"name5","o":[], "mode":"tandem"}, {"n":"name6","o":[]}], "btn":"submit", "color_bg":"red", "color_text":"yellow"}'></compo-form>
```

The backend should be able the serve the file where the component is included to the HTTP request.
The CoForm component attributes can be rendered through server side templating accordingly.

#### 4. Configuration and Testing 
The component exposes the below parameters in the config attribute in a JSON string:
- "h1"   - form title text
- "url"  - the node contains the HTTP method to send the form data in the "p" element and the URL to which to send the request in the "u" element.
- "info" - the node contains the strings that are to be associated with the form (like) elements as below:
- "n"    - element would be used to set the label that accompanies the input or selection element and also be used as form request field;
- "o"    - element contains in a JSON array the options for the selection element. The CoForm would present a selection element instead of an input element in case an option is present;
- "mode" - element would signalize special behaviors. For now a "tandem" behavior is implemented. Elements with the "tandem" flag would follow the selection in the first prior selection element
- "btn"  - contains the submit form button text
- "color_bg" - configures the background color for the submit form button and the border color of the form input and selection elements
Supports colors both in hexa or in words.
- "color_text" - configures the text color for the submit form button 
Supports colors both in hexa or in words.
- "showElemID" - configures the ID of the DOM element on which the show / hide methods would be called on submit.

Testing can be done only for the component using a file as the below or integrated in site.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Web Compo Form</title>
</head>

<body>
    <link rel="import" href="./CoForm/CoForm.html">

    <compo-form config='{"h1":"Create new Customer","url":[{"p":"post"},{"u":"https://putsreq.com/lJALaobXfJ10fsWqEK97"}],"info":[{"n":"name1","o":[]}, {"n":"name2","o":[]}, {"n":"name3","o":["option1", "option2", "option3"]}, {"n":"name4","o":[], "mode":"tandem"}, {"n":"name5","o":[], "mode":"tandem"}, {"n":"name6","o":[]}], "btn":"submit", "color_bg":"red", "color_text":"yellow", "showElemID":"ABC"}'></compo-form>
</body>

</html>
```

### 5. Further development
Based on the input item mode a new mode could be implemented in order to have a placeholder in the input file with the value being a sub-string of the previous selection element value.

