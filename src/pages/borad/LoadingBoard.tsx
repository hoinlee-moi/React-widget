import React from "react";
import { Link, useNavigate, useRoutes } from "react-router-dom";
import styles from "../../styles/Loading/Loading.module.css";
import Loading1 from "../loading/Loading1";
import Loading2 from "../loading/Loading2";
import Loading3 from "../loading/Loading3";

const LoadingBoard = () => {
  const element = useRoutes([
    { path: "1", element: <Loading1 /> },
    { path: "2", element: <Loading2 /> },
    { path: "3", element: <Loading3 /> },
  ]);
  const navigate = useNavigate();
  return (
    <div className={styles.boardContainer}>
      <h2>Loading Board</h2>
      <nav className={styles.boardNav}>
        <ul>
          <li onClick={() => navigate("/loadingBoard/1")}>Circle</li>
          <li onClick={() => navigate("/loadingBoard/2")}>Square</li>
          <li onClick={() => navigate("/loadingBoard/3")}>Gradation</li>
        </ul>
      </nav>
      <section className={styles.item_section}>{element}</section>
    </div>
  );
};

export default React.memo(LoadingBoard);
