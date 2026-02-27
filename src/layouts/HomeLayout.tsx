import { Outlet } from "react-router-dom";
import Navbar from "../pages/HomePage/layout/Navbar";
import Footer from "../pages/HomePage/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

export default function HomeLayout() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
