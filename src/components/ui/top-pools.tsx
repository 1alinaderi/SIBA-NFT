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
      <img src='/tokenomic.png' className='w-full' />
    </div>
  );
}
