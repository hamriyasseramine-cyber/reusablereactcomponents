# Hooks (useState, useEffect)

Hooks are functions that let you use React features — like state or side effects — inside function components. The two you'll use constantly are:

- `useState` — to store and update data inside a component.
- `useEffect` — to run code in response to something changing (like fetching data when the component loads).

```jsx
import { useState, useEffect } from "react";

function Example() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div>{data ? data.name : "Loading..."}</div>;
}
```
