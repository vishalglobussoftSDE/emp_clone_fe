import MainNavbar from '../components/Navbar/MainNavbar';
import PrimarySideBar from '../components/Sidebar/PrimarySideBar';

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <PrimarySideBar />
      <div className="flex flex-col flex-1">
        <MainNavbar />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
