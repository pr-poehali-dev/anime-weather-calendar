import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: 'Home', label: 'Home', active: true },
  { icon: 'Clock', label: 'Schedule' },
  { icon: 'BarChart3', label: 'Analytics' },
  { icon: 'Settings', label: 'Settings' },
  { icon: 'Sparkles', label: 'Automation' },
  { icon: 'Smartphone', label: 'Devices' },
  { icon: 'Bell', label: 'Notifications' },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <div className="w-16 bg-sidebar rounded-2xl p-3 flex flex-col items-center gap-3">
      {menuItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setActiveItem(item.label)}
          className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
            activeItem === item.label
              ? "bg-smart-blue text-white"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          )}
        >
          <Icon name={item.icon as any} size={20} />
        </button>
      ))}
      
      <div className="mt-auto">
        <button className="w-10 h-10 rounded-xl flex items-center justify-center text-sidebar-foreground hover:bg-sidebar-accent">
          <Icon name="ChevronDown" size={20} />
        </button>
      </div>
    </div>
  );
}