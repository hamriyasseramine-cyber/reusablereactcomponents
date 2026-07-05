# React vs vanilla JavaScript

With vanilla JavaScript, you manually select elements and update them:

```js
document.getElementById("count").textContent = count;
```

With React, you describe what should be displayed based on the current state, and React handles the update for you:

```jsx
<p>{count}</p>
```

This shift — from manually updating the page to declaring what it should look like — is the main mental change when moving from vanilla JS to React.
