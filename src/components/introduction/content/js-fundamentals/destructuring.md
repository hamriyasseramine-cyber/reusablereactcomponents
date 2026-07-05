# Destructuring

Destructuring lets you pull values out of objects or arrays directly into variables, instead of accessing them one property at a time. It's used constantly in React, especially for reading props.

```js
const user = { name: "Yasser", role: "developer" };
const { name, role } = user;

console.log(name); // "Yasser"
```

```jsx
function Profile({ name, role }) {
  return <p>{name} — {role}</p>;
}
```
