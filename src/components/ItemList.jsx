import React from "react";
import { widget } from "../widget/widget";

import styles from "./itemList.module.css";
import PublisingItem from "./PublisingItem";

const ItemList = () => {
  return (
    <div className={styles.listContainer}>
      {widget.map((component, idx) => {
        return (
          <PublisingItem key={Math.random().toString() + idx.toString()}>
            {component}
          </PublisingItem>
        );
      })}
    </div>
  );
};

export default ItemList;
