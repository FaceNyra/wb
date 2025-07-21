import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";
export const MainLayout = observer(() => {

  return (
    <>
        <Outlet />  
    </>
  );
});         
