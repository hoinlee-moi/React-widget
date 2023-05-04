import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styles from "../../styles/Board.module.css";
import Dropdown1 from "../hover/Dropdown1";
import HoverDetail from "../hover/HoverDetail";
import HoverToolTip from "../hover/HoverToolTip";

const HoverBoard = () => {
  const element = useRoutes([
    { path: "", element: <Dropdown1 /> },
    { path: "2", element: <HoverDetail /> },
    { path: "3", element: <HoverToolTip /> },
  ]);

  const navigate = useNavigate();

  return (
    <div className={styles.boardContainer}>
      <h2>HoverBoard</h2>
      <nav className={styles.boardNav}>
        <ul>
          <li onClick={() => navigate("/hoverBoard")}>Dropdown Navi</li>
          <li onClick={() => navigate("/hoverBoard/2")}>Hover Detail</li>
          <li onClick={() => navigate("/hoverBoard/3")}>Hover ToolTip</li>
        </ul>
      </nav>
      <section className={styles.item_section}>{element}</section>
    </div>
  );
};

export default HoverBoard;
