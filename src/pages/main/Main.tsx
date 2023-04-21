import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/loadingBoard")}>loading animation</button>
      <button onClick={() => navigate("/borderBoard")}>border animation</button>
    </div>
  );
};

export default Main;
