# Dev Stack 🧩

A tech-picker web app where developers can browse frontend, backend, database, styling, DevOps and tooling options, and build their own personal "stack" by adding technologies to a running list.

## Tech Used

- **React** (Vite) — component structure and UI logic
- **Tailwind CSS + DaisyUI** — utility-first styling and base components
- **React-Toastify** — toast notifications for add/remove/duplicate actions
- **JSON** — local technology dataset, loaded via `fetch`

## Features

1. **Browse & filter visually** — 15 technologies shown as cards with icon, badge, category, difficulty and star rating, laid out in a responsive 1 / 2 / 3-column grid.
2. **Build a personal stack** — clicking "Add to Stack" adds a technology to the sidebar, blocks duplicate adds with a warning toast, and disables the card's button once added.
3. **Manage the stack live** — remove a single technology with the ✕ button or clear everything at once with "Remove All", both reflected instantly with toast feedback.

## Running Locally

```bash
npm install
npm run dev
```

---

## React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript files. Under the hood it gets compiled into regular `React.createElement()` calls. It's used because it makes UI code much easier to read and write — you can see the structure of a component right next to the logic that drives it, instead of building the DOM by hand with JS.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component receiving them can't change them, they're read-only from its point of view. State is data a component manages *itself*, internally, and can update over time (usually in response to user interaction). In short: props flow down and are owned by the parent, state is owned and controlled by the component itself.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update its own piece of data, and re-renders the component whenever that data changes. In this project it's used in several places: `App.jsx` uses it to hold the fetched `technologies` list, the `loading` flag, and the `stack` array of selected technologies. `Navbar.jsx` also uses it to track whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs a side effect after a component renders — things like fetching data, subscribing to something, or manually touching the DOM, which shouldn't happen during the render itself. It was needed here because fetching the JSON file is a side effect (it reaches outside the component to the network/filesystem). By fetching inside `useEffect` with an empty dependency array `[]`, the fetch only runs once, right after the component first mounts, instead of running on every re-render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell items in a list apart between renders, so it knows which items were added, removed, or reordered instead of re-rendering the whole list from scratch. Without a stable, unique key, React can mismatch old and new items, leading to bugs like wrong data showing up in the wrong card or broken input state. In this project each technology's own `id` (e.g. `"react"`, `"postgresql"`) is used as the key.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. One example here is in `StackPanel.jsx`: if `stack.length === 0`, it renders an `EmptyState` message ("No technologies yet…"), and otherwise it maps over `stack` and renders the list of added items. Another example is in `App.jsx`, where a `Loader` spinner is shown while `loading` is `true`, and the actual technology grid is shown once it's `false`.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child by giving it as a prop, e.g. `<TechCard tech={tech} isAdded={isAdded} />` — the child just reads `props.tech` (or destructures it). To send something back up, the parent passes a *function* down as a prop, and the child calls that function (usually with some data as an argument) when something happens — e.g. `<TechCard onAdd={onAdd} />`, and inside the card, `onAdd(tech)` runs on a button click. Since the function was defined in the parent, calling it there is really the parent updating its own state in response to something that happened in the child.
