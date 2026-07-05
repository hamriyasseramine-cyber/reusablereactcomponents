# Organizing routes and pages

Each route in your app should map to one page component, usually placed in a `pages/` folder, and declared using `react-router-dom`.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/introduction" element={<Introduction />} />
</Routes>
```

Keeping one file per route makes it obvious where to go when you need to update a specific page.
