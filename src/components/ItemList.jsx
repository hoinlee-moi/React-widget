import React from "react";
import { widget } from "../widget/widget";

import styles from "./itemList.module.css";
import PublisingItem from "./PublisingItem";

const ItemList = () => {
  return (
    <div className={styles.listContainer}>
      {widget.map((component) => {
        return (
          <PublisingItem>
            {component}
          </PublisingItem>
        );
      })}
    </div>
  );
};

export default ItemList;
