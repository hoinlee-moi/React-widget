import { useState } from "react";
import styles from "../../styles/week02/BackgroundChange.module.css";

const BackgroundChange = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState("");

  const hoverHandler = (hoverd) => {
    const { image } = hoverd.target.dataset;
    setBackgroundImageUrl(image);
  };
  const leaveHandler = () =>
    setBackgroundImageUrl("/assets/images/week02/portrait-initial.jpg");

  return (
    <div className={styles.container}>
      <div
        className={styles.backgroundPhoto}
        style={{
          backgroundImage: `url(${
            backgroundImageUrl || "/assets/images/week02/portrait-initial.jpg"
          })`,
        }}
      ></div>
      <ul className={styles.navi}>
        <li>
          <a
            href="#none"
            data-text="ABOUT"
            data-image="/assets/images/week02/portrait-01.jpg"
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            href="#none"
            data-text="INSTRUCTOR"
            data-image="/assets/images/week02/portrait-02.jpg"
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
          >
            INSTRUCTOR
          </a>
        </li>
        <li>
          <a
            href="#none"
            data-text="CLASS"
            data-image="/assets/images/week02/portrait-03.jpg"
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
          >
            CLASS
          </a>
        </li>
        <li>
          <a
            href="#none"
            data-text="LOCATION"
            data-image="/assets/images/week02/portrait-04.jpg"
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
          >
            LOCATION
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BackgroundChange;
