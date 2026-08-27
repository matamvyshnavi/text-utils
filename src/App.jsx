import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [originalText, setOriginalText] = useState("");

  const [showCharacters, setShowCharacters] = useState(false);
  const [showWords, setShowWords] = useState(false);

  const [darkMode, setDarkMode] = useState(true);

  const handleTextChange = (e) => {
    const value = e.target.value;

    setText(value);
    setOriginalText(value);

    setShowCharacters(false);
    setShowWords(false);
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
    setShowCharacters(false);
    setShowWords(false);
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
    setShowCharacters(false);
    setShowWords(false);
  };

  const handleOriginal = () => {
    setText(originalText);
    setShowCharacters(false);
    setShowWords(false);
  };

  const handleClear = () => {
    setText("");
    setOriginalText("");

    setShowCharacters(false);
    setShowWords(false);
  };

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>

      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button
          className={!darkMode ? "active" : ""}
          onClick={() => setDarkMode(false)}
        >
          ☀️ Light
        </button>

        <button
          className={darkMode ? "active" : ""}
          onClick={() => setDarkMode(true)}
        >
          🌙 Dark
        </button>
      </div>

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="glow glow-three"></div>

      <div className="glass-card">

        <div className="heading">
          <span>✦</span>
          <h1>Text Utils</h1>
          <span>✦</span>
        </div>

        <p className="subtitle">
          Transform your words, one click at a time.
        </p>

        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Start typing something..."
        ></textarea>

        {/* Text transformation buttons */}
        <div className="button-row">

          <button onClick={handleUppercase}>
            UPPERCASE
          </button>

          <button onClick={handleLowercase}>
            lowercase
          </button>

          <button onClick={handleOriginal}>
            Original
          </button>

          <button onClick={handleClear}>
            Clear
          </button>

        </div>

        {/* Count buttons */}
        <div className="count-row">

          <button
            onClick={() => {
              setShowCharacters(true);
              setShowWords(false);
            }}
          >
            Characters
          </button>

          <button
            onClick={() => {
              setShowWords(true);
              setShowCharacters(false);
            }}
          >
            Words
          </button>

        </div>

        {/* Results */}
        <div className="result-area">

          {showCharacters && (
            <div className="result-box">
              <span>Characters</span>
              <strong>{text.length}</strong>
            </div>
          )}

          {showWords && (
            <div className="result-box">
              <span>Words</span>

              <strong>
                {text.trim() === ""
                  ? 0
                  : text.trim().split(/\s+/).length}
              </strong>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default App;