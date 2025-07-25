import { Sidebar } from '@/components/smart-home/sidebar';
import { Header } from '@/components/smart-home/header';
import { AirConditioner } from '@/components/smart-home/air-conditioner';
import { VacuumCleaner } from '@/components/smart-home/vacuum-cleaner';
import { SmartKettle } from '@/components/smart-home/smart-kettle';
import { WeatherWidget } from '@/components/smart-home/weather-widget';
import { MusicPlayer } from '@/components/smart-home/music-player';
import { LightControl } from '@/components/smart-home/light-control';
import { SecurityCamera } from '@/components/smart-home/security-camera';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark flex gap-4 p-4">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <div className="grid grid-cols-4 gap-4">
          <AirConditioner />
          <VacuumCleaner />
          <SmartKettle />
          <WeatherWidget />
          <LightControl />
          <SecurityCamera />
          <MusicPlayer />
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="px-6 py-2 bg-muted rounded-full text-muted-foreground hover:bg-accent transition-colors">
            Living Room
          </button>
          <button className="px-6 py-2 bg-muted rounded-full text-muted-foreground hover:bg-accent transition-colors">
            Bathroom
          </button>
          <button className="px-6 py-2 bg-muted rounded-full text-muted-foreground hover:bg-accent transition-colors">
            Kitchen
          </button>
          <button className="w-12 h-12 bg-smart-blue rounded-full flex items-center justify-center">
            <Icon name="Plus" size={20} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

export default Index;