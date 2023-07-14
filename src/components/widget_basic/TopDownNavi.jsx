import styles from "../../styles/week01/topDownNavi.module.css"

const TopDownNavi = () => {
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <div className={styles.front}>
            <img src={`${process.env.PUBLIC_URL}/assets/planet01.jpg`} />
            <h2>PLANET-01</h2>
        </div>
        <div className={styles.back}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eligendi aperiam! Corrupti, mollitia, quasi ipsa dignissimos 
            </p>
            <a href="#none">Read More</a>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.front}>
            <img src={`${process.env.PUBLIC_URL}/assets/planet02.jpg`} />
            <h2>PLANET-02</h2>
        </div>
        <div className={styles.back}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eligendi aperiam! Corrupti, mollitia, quasi ipsa dignissimos 
            </p>
            <a href="#none">Read More</a>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.front}>
            <img src={`${process.env.PUBLIC_URL}/assets/planet03.jpg`} />
            <h2>PLANET-03</h2>
        </div>
        <div className={styles.back}>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eligendi aperiam! Corrupti, mollitia, quasi ipsa dignissimos 
            </p>
            <a href="#none">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default TopDownNavi
