import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import clsx from "clsx";
import { ThemeToggle } from "../components/ThemeToggle";
import ScrollToTop from "../components/common/ScrollToTop";

export default function RootLayout() {
  const isSidebarCollapsed = useSelector((state: RootState) => state.dashboard.isSidebarCollapsed);

  return (
    <div className='min-h-screen bg-background text-foreground transition-colors duration-300'>
      <ScrollToTop />
      {/* <Sidebar /> */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className={clsx("transition-all duration-300 p-8")}>
        <Outlet />
      </main>
    </div>
  );
}
