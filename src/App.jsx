import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [showCharacters, setShowCharacters] = useState(false);
  const [showWords, setShowWords] = useState(false);

  return (
    <div className="app">
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
          onChange={(e) => {
            setText(e.target.value);
            setShowCharacters(false);
            setShowWords(false);
          }}
          placeholder="Start typing something..."
        ></textarea>

        {/* Text transformation buttons */}
        <div className="button-row">
          <button onClick={() => setText(text.toUpperCase())}>
            UPPERCASE
          </button>

          <button onClick={() => setText(text.toLowerCase())}>
            lowercase
          </button>

          <button
            onClick={() => {
              setText("");
              setShowCharacters(false);
              setShowWords(false);
            }}
          >
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
                {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
              </strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;