import "../../styles.css";
import { observer } from "mobx-react";
import authStore from "../../store";

const MainPage = observer(() => {
  const handleLogout = () => {
    authStore.clearUser();
  };
  return (
    <>
      <div>
        <h1>Добро пожаловать, {authStore.user.email}</h1>
      </div>
      <button onClick={handleLogout}>Выйти</button>
    </>
  );
});

export default MainPage;
