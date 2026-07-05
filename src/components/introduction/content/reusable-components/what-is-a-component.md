# What is a component

A component is a self-contained, reusable piece of UI — a function that returns what should be displayed on screen. Components are the building blocks of every React application: a button, a card, a navbar, even an entire page are all just components.

```jsx
function Card({ title }) {
  return <div className="card">{title}</div>;
}
```

Once written, a component can be reused anywhere in your app, with different data each time.
