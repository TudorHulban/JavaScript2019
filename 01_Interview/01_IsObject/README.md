What is a potential pitfall with using typeof x === "object" to determine if x is an object? How can this pitfall be avoided?

Although typeof bar === "object" is a reliable way of checking if bar is an object, the surprising gotcha in JavaScript is that null is also considered an object!
