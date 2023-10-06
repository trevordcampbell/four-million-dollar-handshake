function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

type ProgressBarProps = {
  current: number;
};

const GOAL_REVENUE = 4000000;

const ProgressBar: React.FC<ProgressBarProps> = ({ current }) => {
  const percentage = Math.min((current / GOAL_REVENUE) * 100, 100);

  return (
    <div className="pt-12 sm:pt-16 px-4">
      <div className="relative">
        {/* Current Revenue Label */}
        <div 
          style={{ left: `calc(${percentage}%)` }}
          className="absolute bottom-full -mb-1 sm:mb-1 transform -translate-x-1/2"
        >
            <div className="px-2 py-1 bg-gray-800 text-white text-xs sm:text-sm tracking-wide rounded">
              ${current.toLocaleString()}
            </div>
            <div 
              className="mx-auto w-0 h-0 
                border-l-[10px] border-l-transparent
                border-t-[10px] border-t-gray-800
                border-r-[10px] border-r-transparent"
            >
            </div>
          
        </div>

        {/* Progress Bar */}
        <div className="h-4 sm:h-6 bg-gray-300 rounded-full overflow-hidden">
          {/* TODO: Add 'min-w-4' for when values are low ? */}
          <div style={{ width: `${percentage}%` }} className={classNames(current >= 4000000 ? 'bg-gradient-to-r from-green-700 to-green-500' : 'bg-gradient-to-r from-blue-700 to-blue-500', 'h-full rounded-full')}></div>
        </div>

        {/* Labels below the bar */}
        <div className="sm:mt-2 flex text-lg justify-between font-medium text-slate-500">
          <span className={classNames(current >= 0 ? 'text-blue-600 font-semibold' : '', current >= 4000000 ? 'text-green-700 font-semibold': '', 'text-center -ml-4')}>$0</span>
          <span className={classNames(current >= 1000000 ? 'text-blue-600 font-semibold' : '', current >= 4000000 ? 'text-green-700 font-semibold': '', 'text-center')}>$1M</span>
          <span className={classNames(current >= 2000000 ? 'text-blue-600 font-semibold' : '', current >= 4000000 ? 'text-green-700 font-semibold': '', 'text-center')}>$2M</span>
          <span className={classNames(current >= 3000000 ? 'text-blue-600 font-semibold' : '', current >= 4000000 ? 'text-green-700 font-semibold': '', 'text-center')}>$3M</span>
          <span className={classNames(current >= 4000000 ? 'text-green-700 font-semibold' : '', 'text-center -mr-4')}>$4M</span>
        </div>
      </div>

    </div>
  );
};

export default ProgressBar;