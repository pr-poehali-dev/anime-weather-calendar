import { useState } from 'react';
import { DeviceCard, DeviceContent } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function LightControl() {
  const [isOn, setIsOn] = useState(true);

  return (
    <DeviceCard className="bg-smart-blue">
      <DeviceContent>
        <div className="flex items-center justify-between mb-4">
          <div className="text-white">
            <h3 className="text-lg font-medium mb-1">On</h3>
            <p className="text-sm text-white/80">Cozy Work</p>
          </div>
          <button
            onClick={() => setIsOn(!isOn)}
            className={`w-12 h-6 rounded-full transition-colors relative ${
              isOn ? "bg-white/30" : "bg-white/10"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                isOn ? "translate-x-6" : "translate-x-0.5"
              }`}
            />
          </button>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="Lightbulb" size={32} className="text-white" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-white/80">
            <Icon name="MapPin" size={16} />
          </div>
          <div className="text-sm text-white/80">Location</div>
        </div>
      </DeviceContent>
    </DeviceCard>
  );
}