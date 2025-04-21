
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-tube-dark">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isCollapsed={isSidebarCollapsed} />
      <main className={cn(
        "tube-main", 
        isSidebarCollapsed ? "tube-main-sidebar-collapsed" : ""
      )}>
        <div className="tube-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
