import { useNavigate } from "react-router-dom";
import "../../styles.css";

function NotFoundPage() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };
  return (
    <>
      <div>
        <h1>Страница не найдена</h1>
        <button onClick={handleRedirect}>На главную</button>
      </div>
    </>
  );
}

export default NotFoundPage;
