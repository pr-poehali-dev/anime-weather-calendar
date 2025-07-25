import { useState } from 'react';
import { DeviceCard, DeviceHeader, DeviceContent, ProgressBar } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function VacuumCleaner() {
  const [isOn, setIsOn] = useState(true);
  const [batteryLevel, setBatteryLevel] = useState(72);

  return (
    <DeviceCard className="bg-smart-green">
      <DeviceHeader
        title="Vacuum Cleaner"
        subtitle="Xiaomi Vacuum — X10"
        icon={<Icon name="Disc" size={20} className="text-white" />}
        isOn={isOn}
        onToggle={() => setIsOn(!isOn)}
      />
      
      <DeviceContent>
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center">
              <div className="w-24 h-24 bg-black/30 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <ProgressBar 
            value={batteryLevel} 
            maxValue={100} 
            color="rgba(255, 255, 255, 0.8)"
            className="text-white"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Gauge" size={16} className="text-white/80" />
            <span className="text-sm text-white/80">Auto Mode</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="MapPin" size={16} className="text-white/80" />
            <span className="text-sm text-white/80">Living Room</span>
          </div>
        </div>
      </DeviceContent>
    </DeviceCard>
  );
}