import styles from "../../styles/week01/hoverToolTip.module.css"

const HoverToolTip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/HtmlIcon.jpg`}  />
        <span>
        Html . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/JavascriptIcon.jpg`}  />
        <span>
        JS . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/CssIcon.jpg`}  />
        <span>
        CSS . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
      <div className={styles.icon}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/ReactIcon.png`}  />
        <span>
        REACT . Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  );
};

export default HoverToolTip
