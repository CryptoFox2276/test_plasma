import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const AppLayout = () => {
    return <div className="body-container">
        <Sidebar />
        <Outlet />
    </div>;
};

export default AppLayout;
