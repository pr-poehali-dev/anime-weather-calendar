import { useState } from 'react';
import { DeviceCard, DeviceContent } from '@/components/ui/device-card';
import Icon from '@/components/ui/icon';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <DeviceCard className="col-span-2">
      <DeviceContent>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-smart-orange rounded-xl overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/d169f5f0-37ee-4196-9223-b36046fa65ba.png" 
              alt="Album cover" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-smart-green rounded-full"></div>
              <span className="text-xs text-muted-foreground">Legends Never Die</span>
            </div>
            <h3 className="font-medium text-card-foreground mb-1">Juice WRLD — Hate th...</h3>
            <div className="text-sm text-muted-foreground">Album:</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mb-4">
          <Icon name="SkipBack" size={20} className="text-muted-foreground cursor-pointer hover:text-card-foreground" />
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={20} className="text-gray-800 ml-0.5" />
          </button>
          
          <Icon name="SkipForward" size={20} className="text-muted-foreground cursor-pointer hover:text-card-foreground" />
          <Icon name="Shuffle" size={20} className="text-muted-foreground cursor-pointer hover:text-card-foreground" />
        </div>

        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div className="w-3/4 h-full bg-white rounded-full" />
        </div>
      </DeviceContent>
    </DeviceCard>
  );
}