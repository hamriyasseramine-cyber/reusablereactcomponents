# Array methods (map, filter)

`.map()` and `.filter()` are the two array methods you'll use the most in React, mainly for rendering lists of data as UI elements.

```js
const fruits = ["apple", "banana", "cherry"];

const upper = fruits.map((fruit) => fruit.toUpperCase());
// ["APPLE", "BANANA", "CHERRY"]

const longNames = fruits.filter((fruit) => fruit.length > 5);
// ["banana", "cherry"]
```

In React, `.map()` is specifically how you turn an array of data into a list of components on the screen.
