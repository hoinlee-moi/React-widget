import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/loadingBoard")}>로딩게시판</button>
    </div>
  );
};

export default Main;
