# Coding tasks

## function “getMaxTime(array)”
```javascript
function getMaxTime( array ) {

    return Math.max.apply(
    	this, 
    	array.map(function(obj){
        	return obj.time;
    	})
    );
}
```
## ./rest-client
There is implemetion of task 2 and 3(RESTful client on Backbone.js with Bootstrap).

## ./threejs-demo
Its is particularly implementation of task 4.
TODO:
  1. move object
  2. rotate camera
  3. import *.dae files

# QA's
### 1. General questions
  a.   Explain why a system should be separated into independent, only loosely coupled components?

  b. Explain all S.O.L.I.D Programming Principles?

  c. What is use­-case-­driven development and why is it a good idea to follow specific use cases instead of implementing functionality because it might become handy later?

  d. Why is it good to “fail fast”? 

  e. What is the law of demeter and why is it important? 

  f. Why is it a good idea to separate creational logic (application logic managing the creation of objects) from business logic?  

  g. Why are long methods a sign of bad design? 

  h. Explain what the idea behind a listener is. When is an event­driven architecture useful and when not?

  i. What are factories and builders and what is dependency injection? 
   
  j. What is the difference between GIT and SVN? What are git branches?

>GIT is distributed, SVN is not. A branch represents an independent line of development.

### 2. Javascript (JS) questions
  a. How does inheritance work in JS?

  b. How is it different from the inheritance pattern like Java? 

  c. How does the keyword “this” work in JS? What are the differences to “this” in languages like Java? 

  d. What is “scope” in JS?

  >In JavaScript, scope is the set of variables, objects, and functions you have access to.

  e. What is a “closure”?

>A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.

  f. What is an “Immediately Invoked Function Expression” (IIFE) and why is it important for JS development?

>An IIFE is an anonymous function that is created and then immediately invoked. It's not called from anywhere else (hence why it's anonymous), but runs just after being created. They can be used to guard against unintended effects of hoisting.

  g. What is “hoisting” and why is it relevant?

>When you declare a variable inside of a function, the variable declaration is “hoisted” to the top of the function. That is, the runtime will move your variable declaration to the beginning of the function, in spite of where you put the var statement.

  h. What does “first class object” mean? 

>It means that functions are objects, with a type and a behaviour. They can be dynamically built, passed around as any other object, and the fact that they can be called is part of their interface.

  i. How are the functions “apply” and “call” used and why is this useful? 

>**call** function is a property of all Javascript functions. It allows you to run a function and define what the value of **this** will be inside the function, and also supply arguments to the function you are running. **apply** is very similar, and can be run on any functions. It runs your function, and the first argument you pass is the same as in **call**: it will become the value of **this**.The difference is that you don't pass the other arguments individually, you pass them as an array.

  j. What are the different ways to create a function in JS and what are the differences? 
  k. How to handle private state in JS?

>Whith clousure.

  l. Why should you use “===” over “==” for comparison? Name an example where it might matter.

>The == operator will compare for equality after doing any necessary type conversions. The === operator will not do the conversion, so if two values are not the same type === will simply return false. It's this case where === will be faster, and may return a different result than ==. In all other cases performance will be the same.

  m. What is a “hash table” in JS?

>Object literals

  n. What is AJAX?

>Techniques used on the client-side to create asynchronous Web applications.

  o. What is the “DOM”?

>The Document Object Model (DOM) is a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document (a tree) and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content.

  p. What is “strict” mode and why is it useful?

>The strict mode allows for better error checking within the code. For example, it is not possible to use implicitly declared variables, assign read-only property values or add properties to not expandable ojects.

  q. How does event­-bubbling work in JS?


  r. What is preferred way to create a new Object/Array in JS? 

  s. What are some important JS­-specific patterns? 

  t. How does module­-loading currently work in JS? What are the most common patterns? 

  u. What are “promises” in JS

>The core idea behind promises is that a promise represents the result of an 
>asynchronous operation. A promise is in one of three different states:
>pending - The initial state of a promise.
>fulfilled - The state of a promise representing a successful operation.
>rejected - The state of a promise representing a failed operation.
>Once a promise is fulfilled or rejected, it is immutable. 