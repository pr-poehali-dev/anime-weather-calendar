import Icon from '@/components/ui/icon';

export function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-smart-orange rounded-lg overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/d169f5f0-37ee-4196-9223-b36046fa65ba.png" 
              alt="Home" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-medium text-foreground">My Home</h1>
            <p className="text-sm text-muted-foreground">UAE, Dubai</p>
          </div>
          <Icon name="Edit2" size={16} className="text-muted-foreground ml-2" />
        </div>

        <div className="flex items-center gap-3 ml-8">
          <div className="flex items-center gap-2 bg-card rounded-lg px-3 py-2">
            <Icon name="Mic" size={16} className="text-smart-blue" />
            <span className="text-sm text-muted-foreground">Vacuum...</span>
          </div>
          <Icon name="Mic" size={16} className="text-muted-foreground" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Icon name="Search" size={20} className="text-muted-foreground" />
        <Icon name="Users" size={20} className="text-muted-foreground" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-smart-blue rounded-full overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/d169f5f0-37ee-4196-9223-b36046fa65ba.png" 
              alt="Danill" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-foreground">Hey, Danill</span>
          <Icon name="ChevronDown" size={16} className="text-muted-foreground" />
        </div>
      </div>
    </div>
  );
}