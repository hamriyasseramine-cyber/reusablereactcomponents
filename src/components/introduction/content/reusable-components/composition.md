# Composition

Composition means building complex UIs by combining smaller components together, rather than writing one giant component that does everything. It's the same idea as building with LEGO bricks: small, focused pieces that combine into something bigger.

```jsx
function Page() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}
```

Favoring composition over one large component keeps your code easier to read, test, and reuse.
