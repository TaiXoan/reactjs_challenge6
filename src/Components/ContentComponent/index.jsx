import React, { useState } from "react";
// import style from './styles.module.css';
function Content() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      const newResult = {
        id: Date.now(),
        text: inputValue,
      };

      setResults([...results, newResult]);
      setInputValue("");
    }
  };

  const handleDeleteAllClick = () => {
    setResults([]);
  };
  const handlekeyDow = (event) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          id="month-input"
          className="form-control"
          placeholder="add details"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handlekeyDow}
        />
        <button className="btn" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>

      {results.map((result) => (
        <div className="result" key={result.id}>
          <div className="checkbox"></div>
          <div className="icon-delete">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </div>
          <div className="text-result">{result.text}</div>
        </div>
      ))}

      <div className="btn-deleteall" onClick={handleDeleteAllClick}>
        <div className="icon-delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </div>
        <div className="text-delete">delete all</div>
      </div>
    </>
  );
}

export default Content;
