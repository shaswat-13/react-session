# React KSS — Presentation Script & Todo App Walkthrough

This file has two parts:
1. **Presentation Script** — for React, JSX, Components, Props, and useState, each broken into **What / Why / Do's & Don'ts / Use Case**
2. **Todo App Walkthrough** — a line-by-line explanation of each of the 5 build stages from the code examples file, so you can explain *why* each change was made, not just *what* changed

---

# Part 1 — Presentation Script

---

## React

### What
React is a JavaScript library for building user interfaces out of small, reusable pieces called components. Instead of writing one giant page of HTML and JavaScript, you break the UI into independent chunks and combine them.

### Why
- Manually updating the DOM (the page) with plain JavaScript gets messy fast as an app grows — you end up tracking what changed and updating it by hand everywhere.
- React keeps a lightweight in-memory copy of the UI (the **virtual DOM**), figures out what actually changed, and updates only that part of the real page. This keeps things fast and predictable.
- Components can be reused anywhere, which keeps large codebases organized instead of turning into one massive file.

### Do's & Don'ts
**Do:**
- Think of your UI as a tree of small components, each responsible for one thing.
- Use function components (the modern, standard approach) — leave class components as a "you might see this in old code" mention.

**Don't:**
- Don't try to explain the virtual DOM's internal diffing algorithm in depth — one sentence is enough for this audience.
- Don't get pulled into "React vs. Angular vs. Vue" debates during the session — redirect to Q&A after, if it comes up.

### Use Case
Any interactive interface where parts of the page need to update without a full page reload — social media feeds, dashboards, forms, todo apps, e-commerce product listings.

**Script line:** *"React is a JavaScript library for building user interfaces out of reusable components. It keeps a lightweight copy of the page in memory, figures out exactly what changed, and updates only that part — so things stay fast even as the app grows."*

---

## JSX

### What
JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code directly inside JavaScript. It's not a separate language — it compiles down to regular JavaScript function calls before it reaches the browser.

### Why
- Writing UI structure and the logic that drives it in the same place is easier to read and reason about than keeping them in separate files.
- It looks familiar to anyone who's touched HTML, which lowers the learning curve.
- Curly braces `{ }` let you drop back into plain JavaScript any time you need a variable, a calculation, or a function call inside your markup.

### Do's & Don'ts
**Do:**
- Always return a single root element (wrap siblings in a `<div>` or a Fragment `<>...</>`).
- Use `className` instead of `class`.
- Use curly braces for any dynamic value.

**Don't:**
- Don't spend time explaining Babel's internals — one line ("a transpiler converts this into JavaScript the browser understands") is enough.
- Don't write raw HTML attribute names that clash with JS keywords (`class`, `for`) — use the React equivalents (`className`, `htmlFor`).

### Use Case
Every single React component uses JSX to describe what should appear on screen — it's not optional, it's the default way you write UI in React.

**Script line:** *"JSX lets us write HTML-like markup directly inside JavaScript. Behind the scenes, a tool called a transpiler converts it into plain JavaScript before the browser ever sees it. Curly braces are your escape hatch back into real JavaScript whenever you need it."*

---

## Components

### What
A component is a reusable, self-contained piece of UI — usually a JavaScript function that returns JSX. You define it once and use it anywhere, as many times as you like.

### Why
- Breaking a page into components (Header, Sidebar, Card, Footer) keeps code organized and each piece easy to understand on its own.
- Reusability means you write the UI once and use it in many places — change the definition, every usage updates.
- It mirrors how real interfaces are actually structured — most webpages are made of the same repeated pieces (cards, buttons, list items).

### Do's & Don'ts
**Do:**
- Keep components small and focused on one job.
- Give components clear, descriptive names (`UserCard`, not `Thing1`).
- Capitalize component names (`Greeting`, not `greeting`) — React uses this to tell components apart from regular HTML tags.

**Don't:**
- Don't cram unrelated logic into one giant component — split it up.
- Don't forget to `export` a component if it's used in another file.

### Use Case
Any repeated visual pattern — a product card shown 20 times on a shopping page, a comment shown for every user reply, a todo item shown for every task in a list.

**Script line:** *"A component is a reusable piece of UI — usually a function that returns JSX. Think of it like a LEGO brick: you build one small piece with a clear purpose, then combine many of them to build the full page."*

---

## Props

### What
Props ("properties") are how a parent component passes data down into a child component. They work like function arguments — the child receives them and uses them, but never changes them.

### Why
- Without props, every component would be static and identical every time it's used. Props are what make components flexible and reusable with different data.
- This keeps data flow predictable: data only ever moves **one direction** — parent to child — which makes bugs much easier to trace.

### Do's & Don'ts
**Do:**
- Destructure props in the function signature for readability: `function Greeting({ name }: GreetingProps)`.
- Define a TypeScript `interface` for your props so mistakes get caught while typing, not at runtime.

**Don't:**
- Don't try to modify a prop's value inside the child component — props are read-only. If a value needs to change, that logic belongs in the parent (via state).
- Don't overload one component with excessive props — if you're passing 10+ props, consider splitting the component.

### Use Case
A `Greeting` component that shows a different name for every user; a `ProductCard` that shows different prices, images, and titles depending on which product is passed in.

**Script line:** *"Props are how a parent component hands data down to a child — just like arguments passed into a function. The child can use that data, but it can never change it directly. That one-way flow is what keeps React apps predictable."*

---

## useState

### What
`useState` is a React Hook that lets a component create and manage its own piece of data — called **state** — that can change over time and cause the UI to update automatically when it does.

### Why
- Props are read-only and come from outside. But components often need to remember things and react to user actions — typing, clicking, toggling. That's what state is for.
- Calling the state's setter function is what tells React: "this data changed, please re-render this component with the new value."
- Without state, every UI would be frozen the moment it renders — nothing could ever respond to a click or a keystroke.

### Do's & Don'ts
**Do:**
- Always update state using its setter function (`setCount`, `setText`), never assign to the variable directly.
- Keep each `useState` call focused on one piece of data — it's normal to have several `useState` calls in one component.
- Use the functional update form (`setCount(prev => prev + 1)`) when the new value depends on the old one.

**Don't:**
- Don't mutate state directly (`count = count + 1`) — React won't know anything changed, and (in TypeScript) it usually won't even compile.
- Don't call `useState` (or any Hook) inside loops, conditions, or nested functions — only at the top level of a component.

### Use Case
Anything that needs to change while the user interacts with the page: a counter, a like button, a character count as someone types, items in a todo list, form input values.

**Script line:** *"`useState` gives a component memory. It returns two things: the current value, and a function to update it. Whenever you call that update function, React automatically re-renders the component with the new value — that's what makes the UI feel alive."*

---

# Part 2 — Todo App Walkthrough (5-Stage Build Explained)

This matches the 5 code steps from the code-examples file. Read this section as your own prep notes — you don't need to say all of it verbatim, just enough to narrate what each line is doing as you type it live.

---

## Step 1 — Static UI Only

```tsx
function TodoApp() {
  return (
    <div>
      <h1>My Todo List</h1>
      <input placeholder="Add a new task..." />
      <button>Add</button>
      <ul>
        <li>Sample task 1</li>
        <li>Sample task 2</li>
      </ul>
    </div>
  );
}

export default TodoApp;
```

**What's happening:**
- This is pure JSX — no state, no logic, nothing is wired up yet.
- The `<input>` and `<button>` are sitting there doing nothing; typing into the input has no effect, and clicking the button does nothing.
- The two `<li>` items are hardcoded directly into the markup — there's no data behind them, just fixed text.

**Why start here:** It gives the audience a visual target — "this is what we're building toward" — before any logic is introduced. It also isolates JSX structure from behavior, so they're not trying to absorb both at once.

---

## Step 2 — Controlled Input with State

```tsx
import { useState } from "react";

function TodoApp() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button>Add</button>
    </div>
  );
}

export default TodoApp;
```

**What changed and why:**
- `const [inputValue, setInputValue] = useState<string>("")` creates a new piece of state, `inputValue`, starting as an empty string.
- `value={inputValue}` binds the input's displayed text directly to our state — the input can no longer manage its own text internally; React state is now the single source of truth for what's inside it. This is called a **controlled input**.
- `onChange={(e) => setInputValue(e.target.value)}` runs every time the user types a character. `e.target.value` is the current text inside the input at that moment; we immediately push it into state.
- **The loop to point out:** state changes → React re-renders → input's `value` reflects the new state → user sees their own typing on screen. It looks instant, but it's actually this full cycle happening on every keystroke.

**Why this step matters:** It's the first time state visibly "does something," and it introduces the controlled-input pattern that's used constantly in real forms.

---

## Step 3 — Todo Array in State + Adding Items

```tsx
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
}

function TodoApp() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default TodoApp;
```

**What changed and why:**
- `interface Todo` defines the *shape* of a single todo item — an `id` (number) and `text` (string). TypeScript will now warn us if we ever build a todo object incorrectly.
- A second state variable, `todos`, is introduced — an **array** of `Todo` objects, starting empty. This is the moment the component starts holding a real, growing collection of data.
- `handleAddTodo` is a plain function, not a Hook — it's the logic that runs when the button is clicked.
  - `if (inputValue.trim() === "") return;` — a guard clause that stops empty or whitespace-only todos from being added. Worth explaining: `.trim()` removes leading/trailing spaces, so " " (just spaces) still counts as empty.
  - `id: Date.now()` — a quick, good-enough way to generate a unique number for each todo based on the current timestamp. Not production-grade for high-frequency inserts, but perfectly fine here and easy to explain.
  - `setTodos([...todos, newTodo])` — this is the most important line in this step. `...todos` **spreads** every existing todo into a brand-new array, and `newTodo` is added at the end. **We never modify the old array directly** (no `.push()`), because React needs a new array reference to detect that something changed and trigger a re-render.
  - `setInputValue("")` — clears the input box after adding, so it's ready for the next task.
- `onClick={handleAddTodo}` wires the button to actually run this function.

**Why this step matters:** It's the conceptual core of the whole app — turning a UI action (a click) into a state update that grows a list. Everything after this is just *displaying* that state.

---

## Step 4 — Rendering the List with `.map()`

```tsx
<ul>
  {todos.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>
```
*(full component combines this with everything from Step 3)*

**What changed and why:**
- Up to this point, `todos` existed in state but was never actually shown on screen — adding a todo "worked" invisibly. This step makes it visible.
- `todos.map((todo) => (...))` walks through every object in the `todos` array and turns each one into a `<li>` element — this converts an array of *data* into an array of *JSX elements*, which is exactly what React needs to render a list.
- `key={todo.id}` — **required** by React any time you render a list with `.map()`. React uses the key to track which item is which across re-renders, so it can update efficiently instead of re-drawing the entire list every time.
  - Worth a specific callout: **never use the array index as the key if the list can reorder, filter, or have items removed** — it causes React to mismatch items and can produce subtle bugs (wrong item highlighted, wrong item deleted, etc.). Since we generate a real unique `id` with `Date.now()`, we're already doing this the right way.
- `{todo.text}` displays the actual task text inside each list item.

**Why this step matters:** This is the payoff moment — the audience adds a task, hits Enter/clicks Add, and *sees* it appear in the list. It also directly reuses the `.map()` pattern from the JS refresher, so it should feel familiar rather than new.

---

## Step 5 — Marking Todos Complete

```tsx
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

**What changed and why:**
- `Todo` interface gains a `completed: boolean` field — every new todo now needs this property, which is why `handleAddTodo` sets `completed: false` when creating a new one.
- `handleToggle(id: number)` is new. Walk through it carefully, it's the trickiest line in the whole build:
  - `todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)`
  - This goes through **every** todo in the array, not just the one clicked.
  - For the todo whose `id` matches the one clicked: build a **new object** (`{ ...todo, completed: !todo.completed }`) — spread all its existing fields, but flip `completed` to its opposite.
  - For every other todo: `: todo` — leave it completely untouched, just return it as-is.
  - `setTodos(...)` replaces the whole array with this new one (some items changed, most didn't).
  - **The key idea to emphasize:** we never mutate the todo object directly (`todo.completed = true`) — we always build a new object and a new array. This "immutability" habit is one of the most important patterns in React and worth calling out explicitly, even to a beginner.
- `onClick={() => handleToggle(todo.id)}` on the `<li>` — clicking anywhere on a todo now triggers the toggle for that specific item's `id`.
- `style={{ textDecoration: todo.completed ? "line-through" : "none" }}` — inline style that visually strikes through completed todos. This is a small, satisfying visual payoff that reinforces "state changed → UI changed" one more time.
- `cursor: "pointer"` — a small UX touch, tells the user the list items are clickable (not required to explain, but nice to mention).

**Why this step matters:** It's the natural closing beat — everything from the whole session (components, JSX, props indirectly via `TodoItem` if you split it out, state, `.map()`, event handling) comes together in a working, clickable, complete mini-app.

---

## Closing Recap (say this after Step 5)

*"Let's look at what's actually in this file: JSX to describe the structure, a component to contain it all, `useState` twice — once for the input, once for the todo list — a function that adds to that list without mutating it, `.map()` to turn that list into visible items, and an event handler that updates one specific item without touching the rest. Every concept from today is sitting in this one file, working together."*