import AppNavbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
        <AppNavbar />
        <Outlet />
        <Footer />
    </>
  )
}
export default MainLayout;
