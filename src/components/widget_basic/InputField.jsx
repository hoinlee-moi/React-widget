import styles from "../../styles/week01/inputField.module.css";

const InputField = () => {
  return <div className={styles.container}>
    <form className={styles.info}>
        <div className={styles.item}>
            <input type='text' placeholder="Your Name" />
            <i className="fa fa-user"/>
        </div>
        <div className={styles.item}>
            <input type='email' placeholder="Email" />
            <i className="fa fa-envelope"/>
        </div>
        <div className={styles.item}>
            <input type="tel" placeholder="Phone Number" />
            <i className="fa fa-phone"/>
        </div>
    </form>
  </div>;
};

export default InputField;
