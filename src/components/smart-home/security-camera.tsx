import { DeviceCard, DeviceContent } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function SecurityCamera() {
  return (
    <DeviceCard>
      <DeviceContent>
        <div className="relative mb-3">
          <div className="aspect-video bg-muted rounded-xl overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/d169f5f0-37ee-4196-9223-b36046fa65ba.png" 
              alt="Security camera view" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/50 rounded-full px-2 py-1">
            <div className="w-2 h-2 bg-smart-green rounded-full"></div>
            <span className="text-xs text-white">Online</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Living Room</div>
          <Icon name="MoreHorizontal" size={16} className="text-muted-foreground" />
        </div>
      </DeviceContent>
    </DeviceCard>
  );
}