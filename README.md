# 🚀 Dev Stack

Dev Stack is a clean, responsive web app where developers can explore popular technologies and build their own ideal development stack. Pick tools from different categories, add them to your stack, and manage the list with instant feedback.

🔗 **Live Demo:** _add your Vercel/Netlify link here_

## 🛠️ Technologies Used

- React.js (with Vite)
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON (local data file)

## ✨ Key Features

1. **Explore Technologies** – Browse 12 technologies loaded from a JSON file, each with an icon, badge, category, difficulty level and rating.
2. **Build Your Stack** – Add technologies to the "Your Stack" panel, remove a single item or clear everything. Duplicates are blocked and the card button changes to "✓ Added to Stack".
3. **Smart Feedback & Theme** – Toast alerts for every action, a loading spinner while data loads, and one shared orange → pink → violet gradient that controls the whole brand theme.

## ▶️ Run Locally

```bash
git clone https://github.com/hossensumon071/Devstack.git
cd Devstack
npm install
npm run dev
```

## 📚 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes the UI code easier to read and write, and React turns it into normal JavaScript behind the scenes.

**2. What is the difference between props and state?**
Props are data passed from a parent component to a child, and the child cannot change them. State is data that a component owns and can change over time, and when it changes the component re-renders.

**3. What does the useState hook do, and where did you use it in this project?**
`useState` lets a component remember a value between renders. I used it in `App.tsx` for `technologies`, `stack` and `loading`, and in `Navbar.tsx` for the mobile menu open/close state.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
`useEffect` runs code after the component renders. I needed it to fetch `technologies.json` once when the page loads, so the data is requested only one time and not on every re-render.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the key to know which item was changed, added or removed. A unique key (like `tech.id`) helps React update only the needed items instead of re-rendering the whole list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering means showing different UI based on a condition. In `YourStack.tsx`, if the stack is empty I show "Your stack is empty.", otherwise I show the list of selected technologies.

**7. How do you pass data from a parent to a child, and how does a child send something back?**
The parent passes data using props. The child sends something back by calling a function that the parent passed as a prop. For example, `TechCard` calls `onAdd(tech)` and `App` updates the stack.
