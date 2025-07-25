import { useState } from 'react';
import { DeviceCard, DeviceHeader, DeviceContent, CircularProgress } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function AirConditioner() {
  const [isOn, setIsOn] = useState(true);
  const [temperature, setTemperature] = useState(19);
  const [targetTemp, setTargetTemp] = useState(24);
  const [humidity, setHumidity] = useState(69);
  const [airQuality, setAirQuality] = useState(72);

  return (
    <DeviceCard className="col-span-2">
      <DeviceHeader
        title="Air Conditioner"
        subtitle="Samsung Boracay — AR09"
        icon={<Icon name="Wind" size={20} />}
        isOn={isOn}
        onToggle={() => setIsOn(!isOn)}
      />
      
      <DeviceContent>
        <div className="flex items-center justify-center mb-6">
          <CircularProgress
            value={temperature}
            maxValue={35}
            size={180}
            strokeWidth={12}
            color="hsl(var(--smart-cyan))"
          >
            <div className="text-center">
              <div className="text-4xl font-light text-card-foreground">{temperature}°</div>
              <div className="text-sm text-muted-foreground">COOLING TO</div>
            </div>
          </CircularProgress>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
            <Icon name="Clock" size={16} />
            <span className="text-sm">7:00 am</span>
          </div>
          <span className="text-muted-foreground">to</span>
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
            <Icon name="Clock" size={16} />
            <span className="text-sm">13:00 pm</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-smart-cyan rounded-full"></div>
            <div>
              <div className="text-2xl font-medium text-card-foreground">{humidity}</div>
              <div className="text-xs text-muted-foreground">Humidity</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-smart-purple rounded-full"></div>
            <div>
              <div className="text-2xl font-medium text-card-foreground">{airQuality}%</div>
              <div className="text-xs text-muted-foreground">Air Quality</div>
            </div>
          </div>
        </div>
      </DeviceContent>
    </DeviceCard>
  );
}