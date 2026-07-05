# Props

Props (short for "properties") are how you pass data into a component from its parent. They make a component flexible — the same component can look or behave differently depending on what props it receives.

```jsx
function Button({ label, color }) {
  return <button style={{ background: color }}>{label}</button>;
}

<Button label="Submit" color="blue" />
<Button label="Cancel" color="grey" />
```

Props flow in one direction only: from parent to child.
