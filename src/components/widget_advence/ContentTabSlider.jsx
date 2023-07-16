import { useState } from "react";
import styles from "../../styles/week02/contentTabSlider.module.css";

const ContentTabSlider = () => {
  const [checked, setChecked] = useState(0);

  const checkHandler = (event) => {
    switch (event.target.id) {
      case "tabMenu01":
        setChecked(0);
        break;
      case "tabMenu02":
        setChecked(1);
        break;
      case "tabMenu03":
        setChecked(2);
        break;
      default:
        setChecked(0);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.tab_inner}>
        <input
          type="radio"
          name="tabMenu"
          id="tabMenu01"
          checked={checked === 0 && true}
          onChange={checkHandler}
        />
        <input
          type="radio"
          name="tabMenu"
          id="tabMenu02"
          checked={checked === 1 && true}
          onChange={checkHandler}
        />
        <input
          type="radio"
          name="tabMenu"
          id="tabMenu03"
          checked={checked === 2 && true}
          onChange={checkHandler}
        />
        <div className={styles.tabs}>
          <div className={styles.items}>
            <div>
              <h1>Slide Content 01</h1>
            </div>
            <div>
              <h1>Slide Content 02</h1>
            </div>
            <div>
              <h1>Slide Content 03</h1>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <label htmlFor="tabMenu01">Graphic</label>
          <label htmlFor="tabMenu02">Web Publishing</label>
          <label htmlFor="tabMenu03">Logo & CI</label>
        </div>
      </div>
    </div>
  );
};
export default ContentTabSlider;
