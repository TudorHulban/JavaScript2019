Function binding is probably your least concern when beginning with JavaScript, but when you realize that you need a solution to the problem of how to keep the context of **“this”** within another function, then you might not realize that what you actually need is Function.prototype.bind().

The **bind()** method creates a new function that, when called, has its **this** keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
