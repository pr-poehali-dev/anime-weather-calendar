import { useState } from 'react';
import { DeviceCard, DeviceHeader, DeviceContent } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function SmartKettle() {
  const [isOn, setIsOn] = useState(false);
  const [temperature, setTemperature] = useState(12);

  return (
    <DeviceCard className="bg-smart-red">
      <DeviceHeader
        title="Smart Kettle"
        subtitle="Xiaomi Mi Smart — Pro"
        icon={<Icon name="Coffee" size={20} className="text-white" />}
        isOn={isOn}
        onToggle={() => setIsOn(!isOn)}
      />
      
      <DeviceContent>
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <div className="w-24 h-32 bg-white/20 rounded-2xl flex items-end justify-center p-2">
              <div className="w-16 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <Icon name="Droplets" size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon name="Thermometer" size={16} className="text-white/80" />
            <span className="text-sm text-white/80">{temperature}%</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Timer" size={16} className="text-white/80" />
            <span className="text-sm text-white/80">2 min</span>
          </div>
        </div>

        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/80 rounded-full transition-all duration-300"
            style={{ width: `${temperature}%` }}
          />
        </div>
      </DeviceContent>
    </DeviceCard>
  );
}