import { useNavigate, useRoutes } from "react-router-dom";

import styles from "../../styles/Board.module.css";
import Boder1 from "../borderAni/Border1";

const BorderBoard = () => {
  const element = useRoutes([{ path: "", element: <Boder1 /> }]);

  const navigate = useNavigate();

  return (
    <div className={styles.boardContainer}>
      <h2>Loading Board</h2>
      <nav className={styles.boardNav}>
        <ul>
          <li onClick={() => navigate("/borderBoard")}>Border circle</li>
        </ul>
      </nav>
      <section
        className={styles.item_section}
        style={{ backgroundColor: "#363636" }}
      >
        {element}
      </section>
    </div>
  );
};

export default BorderBoard;
