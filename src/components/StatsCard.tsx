interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: any;
}

export function StatsCard({ title, value, change, isPositive, icon: Icon }: StatsCardProps) {
  return (
    <div className='bg-card rounded-xl p-6 shadow-lg border border-border/10'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-muted-foreground text-sm font-medium'>{title}</p>
          <p className='text-2xl font-bold text-card-foreground mt-1'>{value}</p>
        </div>
        <div className='bg-muted rounded-lg p-3'>
          <Icon className='w-6 h-6 text-primary' />
        </div>
      </div>
      {/* <div className='mt-4'>
        <span className={`text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}>
          {isPositive ? "↑" : "↓"} {change}
        </span>
        <span className='text-gray-400 text-sm ml-2'>vs last month</span>
      </div> */}
    </div>
  );
}
