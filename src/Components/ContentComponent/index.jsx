
import styles from './styles.module.css'
import React, { useState } from "react";
const Content = ({ activeTab }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {


    if (inputValue.trim() !== "") {
      setItems([...items, { text: inputValue, showTick: false }]);
      setInputValue("");
    }
  };



  const handleToggleTick = (index) => {
    const newItems = [...items];
    newItems[index].showTick = !newItems[index].showTick;
    setItems(newItems);
  };





  const handleDeleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };




  const handleDeleteAllChecked = () => {
    const newItems = items.filter((item) => !item.showTick);
    setItems(newItems);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  }

  return (
    <div className="body">
      {activeTab === "all" && (
        <div>
          <div className={styles.form}>
            <input
              type="text"
              id="month-input"
              className={styles.formcontrol}
              placeholder="add details"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className={styles.btn}
              onClick={handleAddItem}>
              Add
            </button>
          </div>
          <div>
            {items.map((item, index) => (
              <div key={index} className={styles.result}>
                <div
                  className={`${styles.checkBox} ${item.showTick ? styles.checkboxItem : ""
                    }`}
                  onClick={() => handleToggleTick(index)}
                >
                  {item.showTick && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  )}
                </div>
                <div
                  className={`${styles.textResult} ${item.showTick ? styles.textResult_Item : ""}`}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "active" && (
        <div>
          <div className={styles.form}>
            <input
              type="text"
              id="month-input"
              className={styles.formcontrol}
              placeholder="add details"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button className={styles.btn}>Add</button>
          </div>

          {items.map(
            (item, index) =>
              !item.showTick && (
                <div key={index} className={styles.result}>
                  <div
                    className={`${styles.checkBox} ${item.showTick ? styles.checkboxItem : ""
                      }`}
                    onClick={() => handleToggleTick(index)}
                  >
                    {item.showTick && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                      </svg>
                    )}
                  </div>
                  <div className={styles.textResult}>{item.text}</div>
                </div>
              )
          )}
        </div>
      )}

      {activeTab === "completed" && (
        <div>
          {items.map(
            (item, index) =>
              item.showTick && (
                <div key={index} className={styles.result}>
                  <div
                    className={`${styles.checkBox} ${item.showTick ? styles.checkboxItem : ""
                      }`}
                    onClick={() => handleToggleTick(index)}
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>

                  <div className={`${styles.textResult} ${styles.textResult_Item}`}>
                    {item.text}
                  </div>
                  <div className={styles.icondelete}>
                    <svg onClick={() => handleDeleteItem(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </div>
                </div>
              )
          )}

          <div className={styles.btndeleteall} onClick={handleDeleteAllChecked}>
            <div className={styles.icondelete}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </div>
            <div className={styles.textdelete}>delete all</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;