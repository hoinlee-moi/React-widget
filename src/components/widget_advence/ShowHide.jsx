import { useState } from "react";
import styles from "../../styles/week02/showHide.module.css";

const ShowHide = () => {
  const [checked, setChecked] = useState(0);

  const checkHandler = (event) => {
    switch (event.target.id) {
      case "tab1":
        setChecked(0);
        break;
      case "tab2":
        setChecked(1);
        break;
      case "tab3":
        setChecked(2);
        break;
      default:
        setChecked(1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tab_inner}>
        <input
          type="radio"
          name="tabmenu"
          id="tab1"
          checked={checked === 0 && true}
          onChange={checkHandler}
        />
        <input
          type="radio"
          name="tabmenu"
          id="tab2"
          checked={checked === 1 && true}
          onChange={checkHandler}
        />
        <input
          type="radio"
          name="tabmenu"
          id="tab3"
          checked={checked === 2 && true}
          onChange={checkHandler}
        />
        <div className={`${styles.content} ${styles.slide01}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/week02/artistic-image-01.jpg`}
          />
        </div>
        <div className={`${styles.content} ${styles.slide02}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/week02/artistic-image-02.jpg`}
          />
        </div>
        <div className={`${styles.content} ${styles.slide03}`}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/week02/artistic-image-03.jpg`}
          />
        </div>
        <div className={styles.btn}>
          <label htmlFor="tab1"></label>
          <label htmlFor="tab2"></label>
          <label htmlFor="tab3"></label>
        </div>
      </div>
    </div>
  );
};

export default ShowHide;
