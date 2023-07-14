import React, { useState } from "react";
import styles from "./itemList.module.css";

const PublisingItem = ({ children, click, itemOpen }) => {
  const [openItem, setOpenItem] = useState(false);
  const itemOpenClick = () => openItem || setOpenItem(true);
  const itemCloseClick = () => openItem && setOpenItem(false);
  return (
    <div
      className={openItem?styles.itemClick:styles.item  }
      onClick={itemOpenClick}
    >
      {openItem && (
        <span className={styles.closeItem} onClick={itemCloseClick}>
          X
        </span>
      )}
      {children}
    </div>
  );
};

export default PublisingItem;
