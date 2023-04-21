import styles from "../../styles/border/Border1.module.css";

const Border1 = () => {
  return (
    <div className={styles.squareBox}>
      <div className={styles.square}>
        <span />
        <span />
        <span />
        <div>
            <h2>Heading Text</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat praesentium autem facilis aliquam animi voluptatem necessitatibus, voluptate tempora officiis.
            </p>
            <a href="#none">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Border1;
