import styles from "../../styles/week01/hoverToolTip.module.css"

const HoverToolTip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/HtmlIcon.jpg`}  />
        <span>
        Html . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/JavascriptIcon.jpg`}  />
        <span>
        JS . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/CssIcon.jpg`}  />
        <span>
        CSS . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/ReactIcon.png`}  />
        <span>
        REACT . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  );
};

export default HoverToolTip
