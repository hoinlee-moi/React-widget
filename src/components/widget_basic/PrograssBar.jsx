import { useState } from "react";
import styles from "../../styles/week01/prograssBar.module.css";
const PrograssBar = () => {
  const [reset, setReset] = useState(false);

  const clickHandle = () => {
    setReset(!reset)
    console.log('클릭됨')
  }
  return (
    <div className={styles.container}>
      <div className={styles.skill_progress}>
        <span
          className={`fa fa-repeat ${styles.reset}`}
          onClick={clickHandle}
        />
        <h1>SOFTWARE SKILLS</h1>
        <div className={styles.item}>
          <p>
            <span>HTML5</span>
            <span>90%</span>
          </p>
          <div className={styles.progress}>
            <div
              className={styles.progress_level}
              style={{ width: `"90%"` }}
            ></div>
          </div>
        </div>
        <div className={styles.item}>
          <p>
            <span>CSS3</span>
            <span>80%</span>
          </p>
          <div className={styles.progress}>
            <div
              className={styles.progress_level}
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className={styles.item}>
          <p>
            <span>jQuery</span>
            <span>65%</span>
          </p>
          <div className={styles.progress}>
            <div
              className={styles.progress_level}
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
        <div className={styles.item}>
          <p>
            <span>Photoshop</span>
            <span>70%</span>
          </p>
          <div className={styles.progress}>
            <div
              className={styles.progress_level}
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        <div className={styles.item}>
          <p>
            <span>Illustrator</span>
            <span>82%</span>
          </p>
          <div className={styles.progress}>
            <div
              className={styles.progress_level}
              style={{ width: "82%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrograssBar;
