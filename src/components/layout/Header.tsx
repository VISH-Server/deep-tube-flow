
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Video, Bell, User, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-tube-dark z-10 flex items-center px-4 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Left section */}
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-tube-lightText mr-4"
            onClick={toggleSidebar}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center">
            <span className="text-tube-red font-bold text-xl">Deep</span>
            <span className="font-bold text-xl">Tube</span>
          </Link>
        </div>

        {/* Middle section - Search */}
        <div className="hidden sm:flex items-center max-w-xl w-full mx-4">
          <div className="relative w-full">
            <Input 
              type="search"
              placeholder="Search" 
              className="bg-tube-dark border-tube-light focus:border-tube-light pr-12 py-1.5 text-tube-lightText w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              className="absolute right-0 top-0 h-full bg-tube-light hover:bg-tube-hover border-l border-tube-light rounded-l-none"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="ml-2 text-tube-lightText" aria-label="Voice search">
            <Mic className="h-5 w-5" />
          </Button>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex text-tube-lightText" aria-label="Create">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex text-tube-lightText" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-tube-lightText">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
