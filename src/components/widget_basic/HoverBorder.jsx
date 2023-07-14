import styles from "../../styles/week01/hoverBorder.module.css";

const HoverBorder = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gnbBox01}>
        <a href="#none">HoverBorder text section</a>
      </div>

      <ul className={styles.gnbBox02}>
        <li>
          <a href="#none">HOME</a>
        </li>
        <li>
          <a href="#none">ABOUT</a>
        </li>
        <li>
          <a href="#none">SERVICE</a>
        </li>
        <li>
          <a href="#none">PORTFOLIO</a>
        </li>
        <li>
          <a href="#none">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default HoverBorder;
