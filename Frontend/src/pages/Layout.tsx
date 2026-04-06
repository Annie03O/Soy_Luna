import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";
import "../styles/Layout.css";
export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};