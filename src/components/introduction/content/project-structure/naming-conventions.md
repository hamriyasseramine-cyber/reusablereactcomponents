# Naming conventions

Consistency matters more than the specific convention you pick. A common approach in React projects:

- Component files: **PascalCase** (`Navbar.jsx`, `UserCard.jsx`)
- Regular utility files: **camelCase** (`formatDate.js`, `useAuth.js`)
- CSS files: match the component name (`Navbar.css` for `Navbar.jsx`)

Sticking to one convention across the whole project avoids the kind of import bugs caused by mismatched file casing.
