
import { Home, Compass, Clock, ThumbsUp, Film, Play, Users, Bookmark, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
}

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  href: string;
};

const mainItems: SidebarItem[] = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: Play, label: 'Subscriptions', href: '/subscriptions' },
];

const libraryItems: SidebarItem[] = [
  { icon: Clock, label: 'History', href: '/history' },
  { icon: Film, label: 'Your videos', href: '/your-videos' },
  { icon: ThumbsUp, label: 'Liked videos', href: '/liked-videos' },
  { icon: Bookmark, label: 'Saved videos', href: '/saved-videos' },
];

const subscriptionItems: SidebarItem[] = [
  { icon: Users, label: 'Music', href: '/c/music' },
  { icon: Users, label: 'Sports', href: '/c/sports' },
  { icon: Users, label: 'Gaming', href: '/c/gaming' },
  { icon: Users, label: 'News', href: '/c/news' },
];

const SidebarItem = ({ icon: Icon, label, href, isCollapsed }: SidebarItem & { isCollapsed: boolean }) => {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center py-3 px-3 rounded-md hover:bg-tube-hover",
        isCollapsed ? "justify-center" : "px-4"
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {!isCollapsed && <span className="ml-3 text-sm">{label}</span>}
    </Link>
  );
};

const Sidebar = ({ isCollapsed }: SidebarProps) => {
  return (
    <div className={cn("tube-sidebar", isCollapsed && "tube-sidebar-collapsed")}>
      <div className="py-2">
        {/* Main navigation */}
        <div className="mb-2">
          {mainItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>

        {/* Library section */}
        {!isCollapsed && (
          <div className="border-t border-tube-light pt-2 mt-2">
            <div className="px-4 py-2 text-sm font-medium text-tube-darkText">Library</div>
            {libraryItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        )}

        {/* Subscriptions section */}
        {!isCollapsed && (
          <div className="border-t border-tube-light pt-2 mt-2">
            <div className="px-4 py-2 text-sm font-medium text-tube-darkText">Subscriptions</div>
            {subscriptionItems.map((item) => (
              <SidebarItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
                isCollapsed={isCollapsed}
              />
            ))}
          </div>
        )}
        
        {/* Settings */}
        <div className={cn("border-t border-tube-light pt-2 mt-2", isCollapsed ? "text-center" : "")}>
          <SidebarItem
            icon={Settings}
            label="Settings"
            href="/settings"
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
