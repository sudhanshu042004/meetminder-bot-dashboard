
import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  BotIcon, 
  LayoutDashboard, 
  Video, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import { toast } from "@/components/ui/use-toast";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, label, href, isActive }: SidebarItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
      isActive 
        ? "bg-primary/10 text-primary font-medium" 
        : "text-muted-foreground hover:bg-muted"
    )}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  
  const handleLogout = () => {
    // This would be replaced with actual logout logic
    localStorage.removeItem("isAuthenticated");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/");
  };
  
  const sidebarItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Video size={20} />,
      label: "Meetings",
      href: "/dashboard/meetings",
    },
    {
      icon: <FileText size={20} />,
      label: "Transcripts",
      href: "/dashboard/transcripts",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "AI Chat",
      href: "/dashboard/chat",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];
  
  const renderSidebarContent = () => (
    <>
      <div className="flex items-center gap-2 px-4 py-3">
        <BotIcon className="text-primary h-7 w-7" />
        <span className="font-bold text-lg">MeetMinder</span>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={closeSidebar} className="ml-auto">
            <X size={20} />
          </Button>
        )}
      </div>
      
      <div className="px-3 mt-6 space-y-1">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isActive={location.pathname === item.href}
          />
        ))}
      </div>
      
      <div className="mt-auto border-t pt-4 px-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-md w-full text-muted-foreground hover:bg-muted transition-colors"
        >
          <LogOut size={20} />
          <span>Log out</span>
        </button>
      </div>
    </>
  );
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={closeSidebar}
        />
      )}
      
      {/* Sidebar for desktop */}
      {!isMobile && (
        <div className="w-64 border-r flex flex-col h-screen sticky top-0">
          {renderSidebarContent()}
        </div>
      )}
      
      {/* Sidebar for mobile */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out flex flex-col",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {renderSidebarContent()}
        </div>
      )}
      
      {/* Main content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b sticky top-0 z-30 bg-background">
          <div className="px-4 h-14 flex items-center justify-between">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <Menu size={20} />
              </Button>
            )}
            
            <div className="ml-auto flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
