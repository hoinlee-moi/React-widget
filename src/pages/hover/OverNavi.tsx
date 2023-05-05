import styles from "../../styles/hover/OverNavi.module.css";

const OverNavi = () => {
  return (
    <div className={styles.gnb}>
      <a href="#none">New Arrivals</a>
      <a href="#none">Summer Collection</a>
      <a href="#none">Winter Collection</a>
      <a href="#none">Special Offers</a>
      <a href="#none">Trends</a>
    </div>
  );
};

export default OverNavi;
