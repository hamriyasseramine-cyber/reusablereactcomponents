# State

State is data that belongs to a component and can change over time — for example, a counter value or whether a menu is open. When state changes, React automatically re-renders the component to reflect the new value.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
