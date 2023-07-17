import styles from "../../styles/week01/customCheckBox.module.css";

const CustomCheckBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.custom}>
        <h1>Custom Checkbox</h1>
        <input type="checkbox" id="agree-chk" />
        <label htmlFor="agree-chk">
            <em></em>
          <span>약관을 충분히 이해하였으며 동의합니다</span>
        </label>
      </div>
      
      <div className={styles.grade}>
        <h1>Custom radio</h1>
        <input type="radio" name="grade" id="grade-check1"/><label htmlFor="grade-check1"><em></em>초등학생</label>
        <input type="radio" name="grade" id="grade-check2"/><label htmlFor="grade-check2"><em></em>중학생</label>
        <input type="radio" name="grade" id="grade-check3"/><label htmlFor="grade-check3"><em></em>고등학생</label>
        <input type="radio" name="grade" id="grade-check4"/><label htmlFor="grade-check4"><em></em>대학생</label>
      </div>

      <div className={styles.active_checkbox}>
        <h1>Active Checkbox</h1>
        <div>
            <form>
                <input type='checkbox' id="active-chk1" />
                <label htmlFor="active-chk1">HTML</label>
                <input type='checkbox' id="active-chk2" />
                <label htmlFor="active-chk2">CSS</label>
                <input type='checkbox' id="active-chk3" />
                <label htmlFor="active-chk3">REACT</label>
                <input type='checkbox' id="active-chk4" />
                <label htmlFor="active-chk4">NEXT.JS</label>
            </form>
        </div>
      </div>
    </div>
  );
};

export default CustomCheckBox;
