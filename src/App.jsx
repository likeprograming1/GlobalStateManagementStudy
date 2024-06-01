import { useState } from "react";
import "./App.css";
import { useTheme } from "./hooks/useContext";

function App() {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is useState count {count}
        </button>
      </div>
      <>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </>
    </div>
  );
}

export default App;
