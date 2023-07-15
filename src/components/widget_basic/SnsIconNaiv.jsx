import styles from "../../styles/week01/snsIconNavi.module.css";

const SnsIconNavi = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navi}>
        <a href="#none">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#none">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#none">
          <i className="fa fa-google-plus"></i>
        </a>
        <a href="#none">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="#none">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default SnsIconNavi;
