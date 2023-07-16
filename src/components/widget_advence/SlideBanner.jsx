import { useState } from "react";
import styles from "../../styles/week02/slideBanner.module.css";

const SlideBanner = () => {
  const [checked, setChecked] = useState(0);

  const checkHandler = (event) => {
    switch (event.target.id) {
      case "slideTab1":
        setChecked(0);
        break;
      case "slideTab2":
        setChecked(1);
        break;
      case "slideTab3":
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
          name="slideTabmenu"
          id="slideTab1"
          checked={checked === 0 && true}
          onChange={checkHandler}
        />
        <input
          type="radio"
          name="slideTabmenu"
          id="slideTab2"
          checked={checked === 1 && true}
          onChange={checkHandler}
        />
        <input
          type="radio"
          name="slideTabmenu"
          id="slideTab3"
          checked={checked === 2 && true}
          onChange={checkHandler}
        />
        <div className={styles.slide}>
            <div className={styles.slide_inner}>
            <a href="#none">
                <img src={`${process.env.PUBLIC_URL}/assets/images/week02/slide-01.jpg`} />
            </a>
            <a href="#none2">
                <img src={`${process.env.PUBLIC_URL}/assets/images/week02/slide-02.jpg`} />
            </a>
            <a href="#none3">
                <img src={`${process.env.PUBLIC_URL}/assets/images/week02/slide-03.jpg`} />
            </a>
            </div>
        </div>
        <div className={styles.btn}>
          <label htmlFor="slideTab1" />
          <label htmlFor="slideTab2" />
          <label htmlFor="slideTab3" />
        </div>
      </div>
    </div>
  );
};

export default SlideBanner;
