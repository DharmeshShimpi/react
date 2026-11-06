# React Learning Roadmap

- developed by facebook

## why react?

- used to build complex frontends
- manages UI updates

### problem react solved and why we don't use plain html anymore?

Example:

- suppose you have a e-commerce website
- there is a cart icon which shows number of items in your cart, total price which is a sum of price of all items in your cart and a sidebar where you can see items you added in your cart.
- imagine I deleted an item from cart.
- the UI should change in 3 places all together.
- this is painful with plain html and js. You have to write everytime this stupid `document.getElementById.innerText`.
- react solves this issue by using hooks


## react flow. how react works behind the scenes.

### react: single page application

- because browser loads only one single HTML page (index.html)
- inside index.html, there is a div element with id=root

### Main flow

- browser understands only html, css and js.
- we write code in javascript, but react converts it into html, css and js
- it injects all that code into that div in index.html where id=root

### who tf injects the code?

- it's main.jsx

### what's jsx?

- nothing. here 'x' means execute. it let's you write HTML in JS file.
- example
`function Name () { return ( <h1> My name is Dharmsh. </h1>) }`
- notice there is no `e` in my name.

- Because it's in my result `;)`

### okay main.jsx injects the code inside the div element of index.html whose id is root.
## But how?

### so react comes with 2 packages

- react-dom
- react native

### .
 - react-dom is used to develop web applications
 - react-native is for mobile applications.

 ## focus on react-dom

 - tomorrow


