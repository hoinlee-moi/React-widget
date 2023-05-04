import styles from "../../styles/hover/Dropdown1.module.css";
const Dropdown1 = () => {
  return (
    <div>
      <div className={styles.dropdown}>
        <button className={styles.dropdown_btn}>Real Estate Type</button>
        <div className={styles.dropdown_submenu}>
            <a href="#none">All</a>
            <a href="#none">One room</a>
            <a href="#none">1.5 rooms</a>
            <a href="#none">Two Room</a>
            <a href="#none">Three Room</a>
            <a href="#none">Officetel</a>
            <a href="#none">Apartment</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown1;
