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

### Web Component - CoLogin
1. Intended Use and User Experience (UX)
2. Included Files and Deployment
3. Integration with Site and Backend
4. Configuration and Testing 
5. Further development

#### 1. Intended Use and User Experience (UX) 
CoLogin is intended to be used as a login form like structure in a web page. The submit button would be enabled only if the fields would actually be populated.
CoLogin is not a HTML form but a suite of fields (username / email and password) that are presented as a form. The component would collect the information in the fields and create a real form like request to a configurable URL.
The suite of fields is defined in the HTML template, the fields are not created with JavaScript.
CoLogin would receive configuration JSON from the backend through an AJAX request.
Upon success CoLogin would perform a redirection to a configurable URL.

#### 2. Included Files and Deployment
The component files are included in the CoLogin folder. The files are:
- CoLogin.js, contains the JavaScript code
- CoLogin.html, contains the HTML code
- CoLogin.css, contains the CSS to style the HTML (shadow) DOM elements

The CoLogin folder should be deployed to the same folder where the home page file resides.

#### 3. Integration with Site and Backend
The CoLogin component could be placed on the home page or on any page that is an entry point to actions that require authentication. 
The page to use the component should include the link to the component HTML:
```html
<link rel="import" href="./CoLogin/CoLogin.html">
```
and the component where it is to be used: 
```html
<compo-login ip="127.0.0.1" port="8080" route="config-login" succes="http://www.taraworks.eu" color_bg="red" color_text="yellow"></compo-login>
```
The backend should be able to serve the file where the component is included to the HTTP request.
The JSON configuration that backend should send is in the below form:
```json
{"usecredentials":true,"usecaptcha":false,"authroute":"auth","proto":"post"}
```
with the lements being:
- "usecredentials", boolean. If true a request to an authentication route is made. If false after submit the page would be redirected to a configurable URL;
- "usecaptcha", boolean. If true a captcha should be displayed. Currently not implemented;
- "authroute", string. Value for authentication route;
- "proto", string. Value for the HTTP method to be used when sending the login form request.

The CoLogin component attributes can be rendered through server side templating accordingly.

#### 4. Configuration and Testing 
The component exposes the below parameters as component attributes:
- "ip" - IP address to use when creating the URL from which to fetch the configuration. 
- "port" - port to use when creating the URL from which to fetch the configuration. 
- "route" - route to use when creating the URL from which to fetch the configuration. 
- "succes" - on succesfull authentication the page to which the redirect would be made. If credentials are not to be used the redirection to the value of the success attribute occurs on submit. 
- "color_bg" - configures the background color for the submit form button and the border color of the form input elements.
Supports colors both in hexa or in words.
- "color_text" - configures the text color for the submit form button. 
Supports colors both in hexa or in words.

Testing can be done only for the component using a file as the below or integrated in site.
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>

<body>
    <link rel="import" href="./CoLogin/CoLogin.html">

    <compo-login ip="127.0.0.1" port="8080" route="config-login" succes="http://www.taraworks.eu" color_bg="red" color_text="yellow"></compo-login>
</body>

</html>
```

#### 5. Further development
- the success URL could be integrated in the configuration
- for failed authentication a message could be displayed for the user
- an integration with a captcha element would need to be assesed
