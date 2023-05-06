import React from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import styles from "../../styles/Board.module.css";
import Dropdown1 from "../hover/Dropdown1";
import Hover3DAni from "../hover/Hover3DAni";
import HoverDetail from "../hover/HoverDetail";
import HoverToolTip from "../hover/HoverToolTip";
import OverNavi from "../hover/OverNavi";
import TopDownNavi from "../hover/TopDownNavi";

const HoverBoard = () => {
  const element = useRoutes([
    { path: "", element: <Dropdown1 /> },
    { path: "2", element: <HoverDetail /> },
    { path: "3", element: <HoverToolTip /> },
    { path: "4", element: <OverNavi /> },
    { path: "5", element: <TopDownNavi /> },
    { path: "6", element: <Hover3DAni /> },

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
          <li onClick={() => navigate("/hoverBoard/4")}>Over Navi</li>
          <li onClick={() => navigate("/hoverBoard/5")}>TopDown Navi</li>
          <li onClick={() => navigate("/hoverBoard/6")}>Hover3DAni</li>
        </ul>
      </nav>
      <section className={styles.item_section}>{element}</section>
    </div>
  );
};

export default HoverBoard;
