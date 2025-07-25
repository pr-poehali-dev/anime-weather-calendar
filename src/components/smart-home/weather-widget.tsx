import { DeviceCard, DeviceContent } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function WeatherWidget() {
  return (
    <DeviceCard>
      <DeviceContent>
        <div className="flex items-center gap-3 mb-2">
          <Icon name="Sun" size={32} className="text-smart-yellow" />
          <div>
            <div className="text-2xl font-light text-card-foreground">24°</div>
            <div className="text-sm text-muted-foreground">/ 17°</div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">Temperature Outside</div>
      </DeviceContent>
    </DeviceCard>
  );
}