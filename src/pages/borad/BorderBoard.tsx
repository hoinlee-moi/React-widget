import { useLocation, useNavigate, useRoutes } from "react-router-dom";

import styles from "../../styles/Board.module.css"
import Boder1 from "../borderAni/Border1";

const BorderBoard = () => {
    const element = useRoutes([
      { path: "1", element: <Boder1 /> },
    ]);
    const {pathname} = useLocation()
    const navigate = useNavigate();
  
    return (
      <div className={styles.boardContainer}>
        <h2>Loading Board</h2>
        <nav className={styles.boardNav}>
          <ul>
            <li onClick={() => navigate("/borderBoard/1")}>Border circle</li>
          </ul>
        </nav>
        <section className={pathname!=="/borderBoard"?styles.item_section:""}>{element}</section>
      </div>
    );
  };
  
  export default BorderBoard;