import MainNavbar from '../components/Navbar/MainNavbar';
import PrimarySideBar from './Sidebar/PrimarySideBar';
import { useSidebar } from '../context/sidebarContext'; // Import context

const MainLayout = ({ children }) => {
  const { isSidebarOpen } = useSidebar(); // Access sidebar state

  return (
    <div className="flex h-screen overflow-hidden">
      {isSidebarOpen && <PrimarySideBar />}
      <div className="flex flex-col flex-1">
        <MainNavbar />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
