import cn from 'classnames';
import { TopPoolsData } from '@/data/static/token-data';
import CurrencySwapIcons from '@/components/ui/currency-swap-icons';
import { CoinList } from '@/components/ui/currency-swap-icons';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';

interface TopPoolsProps {
  limit?: number;
}

export default function TopPools({ limit }: TopPoolsProps) {
  const { layout } = useLayout();
  return (
    <div
    id='tokenomic'
      className={cn(
        'rounded-lg bg-white p-6 shadow-card mb-5 dark:bg-light-dark sm:p-8 w-full ',
        {
          'w-full ': layout === LAYOUT_OPTIONS.RETRO,
        }
      )}
    >
       <div className="flex flex-col items-center justify-between  pb-5 dark:border-gray-700 md:flex-row">
          <h2 className="mb-1 shrink-0 text-lg font-medium uppercase text-black dark:text-white sm:text-xl md:mb-0 md:text-2xl">
            Tokenomics
          </h2>
        </div>
     
      <img src='/tokenomic.png' className='w-full' />
    </div>
  );
}
