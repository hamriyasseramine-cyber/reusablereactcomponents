# Functions & arrow functions

Arrow functions are a shorter syntax for writing functions, and they're the standard style used throughout React code, especially for event handlers and callbacks.

```js
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
```

You'll see arrow functions everywhere in React — inside `onClick` handlers, inside `.map()` calls, and inside hooks like `useEffect`.
