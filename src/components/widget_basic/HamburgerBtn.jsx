import styles from "../../styles/week01/hamburgerBtn.module.css";

const HamburgerBtn = () => {
  return (
    <div className={styles.container}>
      <input type="checkbox" id="trigger" />
      <label htmlFor="trigger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={styles.sidebar}></div>
    </div>
  );
};

export default HamburgerBtn;
