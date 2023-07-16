import React from "react";
import styles from "../../styles/week01/hoverDetail.module.css";

const HoverDetail = () => {
  return (
    <div className={styles.items}>
      <div className={styles.item}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/product-01.jpg`} alt="" />
        <div className={styles.caption}>
          <h2>Rirakuma doll 25cm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis
            eos. Porro minima officia
          </p>
          <p>
            Price : <s>$12</s> → $10
          </p>
          <a href="">View Details</a>
        </div>
      </div>

      <div className={styles.item}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/product-02.jpg`} alt="" />
        <div className={styles.caption}>
          <h2>Rirakuma doll 25cm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis
            eos. Porro minima officia
          </p>
          <p>
            Price : <s>$12</s> → $10
          </p>
          <a href="">View Details</a>
        </div>
      </div>

      <div className={styles.item}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/week01/product-03.jpg`} alt="" />
        <div className={styles.caption}>
          <h2>Rirakuma doll 25cm</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quis
            eos. Porro minima officia
          </p>
          <p>
            Price : <s>$12</s> → $10
          </p>
          <a href="">View Details</a>
        </div>
      </div>
    </div>
  );
};

export default HoverDetail;
