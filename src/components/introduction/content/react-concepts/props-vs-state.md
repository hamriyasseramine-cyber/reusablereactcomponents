# Props vs State

Props and state are both data, but they work differently:

- **Props** are passed *into* a component from its parent, and the component can't change them itself.
- **State** is owned *by* the component itself, and the component can update it (usually with `useState`).

A simple way to remember it: props are given to you, state is yours to manage.
