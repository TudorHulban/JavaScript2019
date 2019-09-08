### What is JavaScript?
JavaScript (JS) is a lightweight interpreted or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event. JavaScript is an easy to learn and also powerful scripting language, widely used for controlling web page behaviour.

Contrary to popular misconception, JavaScript is not "Interpreted Java". In a nutshell, JavaScript is a **dynamic scripting** language supporting **prototype** based object construction. The basic syntax is intentionally similar to both Java and C++ to reduce the number of new concepts required to learn the language. Language constructs, such as if statements, for and while loops, and switch and try ... catch blocks function the same as in these languages (or nearly so).

JavaScript can function as both a procedural and an object oriented language. Objects are created programmatically in JavaScript, by attaching methods and properties to otherwise empty objects at run time, as opposed to the syntactic class definitions common in compiled languages like C++ and Java. Once an object has been constructed it can be used as a blueprint (or prototype) for creating similar objects.

JavaScript's dynamic capabilities include runtime object construction, variable parameter lists, function variables, dynamic script creation (via eval), object introspection (via for ... in), and source code recovery (JavaScript programs can decompile function bodies back into their source text).

#### Advantages of JavaScript
- Server interaction is less
- Feedback to the visitors is immediate
- Interactivity is high
- Interfaces are richer

#### Disadvantages of JavaScript
- No support for multithreading
- No support for multiprocessing
- Reading and writing of files is not allowed
- No support for networking applications

### What Does A Scope Mean In JavaScript?
#### Global Scope
A variable defined outside a function comes under the Global scope. Variables defined inside the Global scope are accessible from any part of the code. Let’s see an example.
```js
var name = 'xxx';
console.log(name); // logs 'xxx'

function logName() {
console.log(name); // 'name' is accessible here and everywhere else
}
logName(); // logs 'xxx'
```
#### Local Scope
Variables defined inside a function come under the Local scope. Different functions can use a variable with the same name. It is because these variables are strictly bound to the function that defines it (each having different scopes) and is not accessible in other functions. 
```js
// Global Scope
function sampleFunction() {
    // Local Scope #1
    function sample2Function() {
        // Local Scope #2
    }
}
// Global Scope
function sample3Function() {
    // Local Scope #3
}
// Global Scope
```
### What Is "this" In JavaScript?
All the OOPs languages use ‘this’ keyword to refer to an object that is currently instantiated by the class. However, in JavaScript, ‘this’ refers to an object which ‘owns’ the method. Though this varies, with how a function call happens.
If no object is currently available, then ‘this’ represents the global object. In a web browser, ‘window’ is the top-level object which represents the document, location, history and a few other useful properties and methods.

### What Is The Prototype Property In JavaScript?
Every JavaScript function has a prototype property (by default this property is null), that is mainly used for implementing inheritance. We add methods and properties to a function’s prototype so that it becomes available to instances of that function. 

### What Is Prototypal Inheritance In JavaScript?
In JavaScript, the inheritance is prototype-based. It means that there are no classes. Instead, there is an object that inherits from another object. JavaScript provides three different types of Prototypal Inheritance.

#### Delegation (I.E., The Prototype Chain)
A delegate prototype is an object that serves as a base for another object. When you inherit from a delegate prototype, the new object gets a reference to the prototype.

When we try to access any property, it first checks in the properties owned by the object. If that property does not exist there, it checks in the ‘[[Prototype]]’ and so on. If that property does not exist there, it checks in the ‘[[Prototype]]’ and so on. Gradually, it moves up the prototype chain, until it reaches the <Object.prototype> i.e., the root delegate for most of the objects.

#### Concatenative Inheritance (I.E. Mixins, Object.Assign())
It is the process of inheriting the features of one object to another by copying the source objects properties. JavaScript calls these source prototypes by the name mixins. This process makes use of the JavaScript method Object.assign(). However, before ES6, the <.extend()> method was used.

#### Functional (Not To Be Confused With Functional Programming)
In JavaScript, a function can create an object. It’s not necessary to be a constructor(or a class). It is called a factory function. Functional inheritance produces an object from a factory and also extends it, by assigning properties.

Every type of Prototypal Inheritance supports a separate set of use-cases, applicable to it. All of them are equally useful in their ability to enable composition. It provides a has-a, uses-a, or can-do relationship as compared to the is-a relationship created with class inheritance.

### DOM
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

### Primitives
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, null, undefined, symbol (new in ECMAScript 2016, see link below).
```html
http://2ality.com/2014/12/es6-symbols.html
```
Null is a value that can be assigned to a variable or an object.
Undefined means a variable has been declared but no value is assigned to it. 

### Dynamic typing
JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
```js
var foo = 42;    
foo     = 'bar'; 
foo     = true; 
```
### What is the difference between == and ===?
The == operator checks equality only whereas === checks equality, and data type, i.e., a value must be of the same type.

### Creating Objects in JavaScript
##### JavaScript Object by object literal
```js
let x = {
            name: "John",
            age: 43
        }
```
##### By creating instance of Object (not recommended)
```js
let objectname = new Object();  
objectname.ID = 7;
```
##### By using an Object constructor
```js
function person(pId, pName) {
     this.id = pId;
     this.name = pName;
}
e = new person(43, "John");
console.log(e.id, e.name);  
```
### Cloning Objects
Object.assign() method is used for cloning an object in Javascript.Here is sample usage but is not recommended to use. Use spread operator instead:
```js
let x = {myProp: "value"};
let y = Object.assign({}, x); 
# use instead
let y = {...x};
```
### What is difference between deep and shallow object coping in JavaScript?
##### Shallow copy
Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

##### Deep copy
A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.
- Deep copy means copies all values or properties recursively in the new object whereas shallow copy copies only the reference.
- In a deep copy, changes in the new object don't show in original object whereas, in shallow copy, changes in new objects will reflect in the original object.
- In a deep copy, original objects do not share the same properties with new object whereas, in shallow copy, they do.

```html
https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c
```
### What is hoisting?
Basically, when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted to the top of their functional/local scope (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”.

Functions declarations are also hoisted, but these go to the very top, so will sit above all of the variable declarations.
```html
https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
```
### Closures
A closure is a JavaScript function defined inside another function. And that is why it gets a special privilege to access three types of scope which are as follows.
- Internal Scope, i.e., the variables defined between its curly brackets
- Outer Function Scope, i.e., the variables of the enclosing function
- Global Scope, i.e., variables defined as globals
Please note that a closure can not only access the outer function variables but also see its parameters. But it can’t call the object of the outer function’s arguments. However, it can directly call the outer function’s parameters.
```js
  var num = 10;
  function sum() {
      document.writeln(num + num);
  }
  sum();  
```
### What is a promise in JS?
A promise is an object in JavaScript which is used to produce a value that may give a result in the future. The value can be a resolved value or it can be a reason which tells why the value is not resolved.

A promise can be of three states:
1. Resolved: The operation is completed and the promise has a specific value.
2. Rejected: The operation is failed and promise has a reason which shows why the operation failed.
3. Pending: Th operation is not fulfilled or rejected, means it has not completed yet.

Resources:
```html
https://developers.google.com/web/fundamentals/primers/promises
```

### Event Capture, Bubbling and Delegation
In HTML DOM API there are two ways of event propagation and determines the order in which event will be received. The two ways are Event Bubbling and Event Capturing. The first method event bubbling directs the event to its intended target, and the second is called event capture in which the event goes down to the element.

#### Event Capture
The capture procedure is rarely used but when it’s used it proves to be very helpful. This process is also called ‘trickling’. In this process, the event is captured first by the outermost element and then propagated to the innermost element. For example:
```html
<div>
<ul>
<li></li>
</ul>
</div>
```
From the above example, suppose the click event did occur in the ‘li’ element, in that case capturing event it will be first handled ‘div’, then ‘ul’ and at last the target element will be hit that is ‘li’.
#### Event Bubbling
Bubbling just works like the bubbles, the event gets handled by the innermost element and then propagated to the outer element.
```html
<div>
<ul>
<li></li>
</ul>
</div>
```
From the above example, suppose the click event did occur in the ‘li’ element in bubbling model the event will be handled first by ‘li’ then by ‘ul’ and at last by ‘div’ element.

#### Event Delegation
When capturing and bubbling, allow functions to implement one single handler to many elements at one particular time then that is called event delegation. Event delegation allows you to add event listeners to one parent instead of specified nodes. That particular listener analyzes bubbled events to find a match on the child elements.

### Errors in JS
- Load time errors: Errors which come up when loading a web page like improper syntax errors are known as Load-time errors and it generates the errors dynamically.
- Run time errors: Errors that come due to misuse of the command inside the HTML language.
- Logical Errors: These are the errors that occur due to the bad logic performed on a function which is having a different operation.

### Higher order functions
It is the function which takes a function as an argument and returns a function as a result. 

### Currying
There is a way to reduce functions of more than one argument to functions of one argument, a way called currying after Haskell B. Curry. 
```js
f(n, m) --> f'(n)(m)
```
```js
multiply = (n, m) => (n * m)
multiply(3, 4) === 12 // true

curryedMultiply = (n) => ( (m) => multiply(n, m) )
triple = curryedMultiply(3)
triple(4) === 12 // true
```
```html
https://blog.benestudio.co/currying-in-javascript-es6-540d2ad09400
https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
```
### Popup Boxes
- Alert
```js
window.alert("I am an alert box!");
```
- Confirm. A confirm box is often used if you want the user to verify or accept something.
```js
window.confirm("sometext");
if (confirm("Press a button!")) {
  txt = "You pressed OK!";
} else {
  txt = "You pressed Cancel!";
}
```
- Prompt. A prompt box is often used if you want the user to input a value before entering a page.
```js
window.prompt("sometext","defaultText");
```
### Online Books
```html

https://eloquentjavascript.net/Eloquent_JavaScript.pdf
https://exploringjs.com/es6/index.html#toc_ch_core-features
https://addyosmani.com/resources/essentialjsdesignpatterns/book/
https://addyosmani.com/backbone-fundamentals/
```
### JavaScript Resources
```html
http://todomvc.com
http://www.forwardadvance.com/course/javascript-and-jquery/
https://medium.com/coderbyte/a-guide-to-becoming-a-full-stack-developer-in-2017-5c3c08a1600c
http://www.dofactory.com/javascript/design-patterns
https://shichuan.github.io/javascript-patterns/
https://medium.freecodecamp.org/how-to-improve-your-javascript-skills-by-writing-your-own-web-development-framework-eed2226f190
https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c
https://medium.freecodecamp.org/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a
```
#### Bind
```html
https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind
```
#### ES6+
```html
https://blog.pragmatists.com/top-10-es6-features-by-example-80ac878794bb
https://medium.freecodecamp.org/arrow-functions-in-javascript-2f8bf7df5077
```
#### Debug
```html
https://blog.pragmatists.com/how-to-debug-front-end-console-3456e4ee5504
https://blog.pragmatists.com/how-to-debug-front-end-elements-d97da4cbc3ea
```
#### Design Patterns
```html
http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
https://toddmotto.com/mastering-the-module-pattern/
```
#### Web Components
```html
https://medium.freecodecamp.org/yep-javascript-moves-fast-build-your-component-library-anyway-a50576ab3031
```
### Backbone
```html
http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/
http://www.forwardadvance.com/course/backbone
```
### React
```html
https://egghead.io/lessons/react-redux-describing-state-changes-with-actions
```
### Redux
```html
https://medium.com/@ramonvictor/tic-tac-toe-js-redux-pattern-in-plain-javascript-fffe37f7c47a
```
### Interview
```html
https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237
http://davidshariff.com/blog/preparing-for-a-front-end-web-development-interview-in-2017/
https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95
https://www.toptal.com/javascript/interview-questions
https://www.pramp.com/#/
https://github.com/h5bp/Front-end-Developer-Interview-Questions
https://medium.freecodecamp.org/how-i-applied-lessons-learned-from-a-failed-technical-interview-to-get-5-job-offers-656fcf58034d
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
```
### Security <br />
```html
https://www.owasp.org/index.php/Category:Attack
```
