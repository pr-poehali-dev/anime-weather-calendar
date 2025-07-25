import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DeviceCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function DeviceCard({ children, className, onClick }: DeviceCardProps) {
  return (
    <div
      className={cn(
        "bg-card rounded-2xl p-4 transition-all duration-200 hover:scale-[1.02] cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface DeviceHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  isOn?: boolean;
  onToggle?: () => void;
}

export function DeviceHeader({ title, subtitle, icon, isOn, onToggle }: DeviceHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        {icon && <div className="text-muted-foreground">{icon}</div>}
        <div>
          <h3 className="font-medium text-card-foreground">{title}</h3>
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
      {onToggle && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={cn(
            "w-12 h-6 rounded-full transition-colors relative",
            isOn ? "bg-smart-blue" : "bg-muted"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform",
              isOn ? "translate-x-6" : "translate-x-0.5"
            )}
          />
        </button>
      )}
    </div>
  );
}

interface DeviceContentProps {
  children: ReactNode;
}

export function DeviceContent({ children }: DeviceContentProps) {
  return <div className="space-y-3">{children}</div>;
}

interface CircularProgressProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  children?: ReactNode;
}

export function CircularProgress({
  value,
  maxValue,
  size = 160,
  strokeWidth = 8,
  color = "hsl(var(--smart-blue))",
  children
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (value / maxValue) * 100;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="none"
          className="opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

interface ProgressBarProps {
  value: number;
  maxValue: number;
  color?: string;
  className?: string;
}

export function ProgressBar({ value, maxValue, color = "hsl(var(--smart-blue))", className }: ProgressBarProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-500 rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: color
          }}
        />
      </div>
      <span className="text-sm font-medium text-card-foreground">{value}%</span>
    </div>
  );
}