import styles from "../../styles/week01/hover3DAni.module.css";

const Hover3DAni = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app_ui}>
        <img src={`${process.env.PUBLIC_URL}/assets/app-ui-01.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/assets/app-ui-02.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/assets/app-ui-03.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/assets/app-ui-04.jpg`} />
      </div>
    </div>
  );
};
export default Hover3DAni;
