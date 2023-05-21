import cn from 'classnames';
import { motion } from 'framer-motion';
import { NormalGridIcon } from '@/components/icons/normal-grid';
import { CompactGridIcon } from '@/components/icons/compact-grid';
import { OptionIcon } from '@/components/icons/option';
import { useDrawer } from '@/components/drawer-views/context';
import Button from '@/components/ui/button';
import Feeds from '@/components/search/feeds';
import { SortList } from '@/components/search/filters';
import { useGridSwitcher } from '@/lib/hooks/use-grid-switcher';

function GridSwitcher() {
  const { isGridCompact, setIsGridCompact } = useGridSwitcher();
  const { openDrawer, isOpen } = useDrawer();
  return (
    <div className="flex overflow-hidden rounded-lg">
      <button
        className={cn(
          'relative flex h-11 w-11 items-center justify-center bg-gray-100 transition dark:bg-gray-800',
          {
            'z-10 text-white': !isGridCompact,
            'text-brand dark:text-white': isGridCompact,
          }
        )}
        onClick={() => setIsGridCompact(!isGridCompact)}
        aria-label="Normal Grid"
      >
        {!isGridCompact && (
          <motion.span
            className="absolute left-0 right-0 bottom-0 h-full w-full bg-brand shadow-large"
            layoutId="gridSwitchIndicator"
          />
        )}
        <NormalGridIcon className="relative" />
      </button>
      <button
        className={cn(
          'relative flex h-11 w-11 items-center justify-center bg-gray-100 transition dark:bg-gray-800',
          {
            'z-10 text-white': isGridCompact,
            'text-brand dark:text-white': !isGridCompact,
          }
        )}
        onClick={() => setIsGridCompact(!isGridCompact)}
        aria-label="Normal Grid"
      >
        {isGridCompact && (
          <motion.span
            className="absolute left-0 right-0 bottom-0 h-full w-full  bg-brand shadow-large"
            layoutId="gridSwitchIndicator"
          />
        )}
        <CompactGridIcon className="relative" />
      </button>
      <button
        className={cn(
          'relative flex h-11 w-11 items-center justify-center bg-gray-100 transition dark:bg-gray-800',
          { 'z-10 text-white': isOpen, 'text-brand dark:text-white': !isOpen }
        )}
        onClick={() => openDrawer('DRAWER_SEARCH')}
        aria-label="Filter"
      >
        {isOpen && (
          <motion.span
            className="absolute left-0 right-0 bottom-0 h-full w-full  bg-brand shadow-large"
            layoutId="gridSwitchIndicator"
          />
        )}
        <OptionIcon className="relative h-auto w-5" />
      </button>
    </div>
  );
}

export default function RetroSearch() {
  const { openDrawer } = useDrawer();
  return (
    <>
      <div className="grid sm:pt-5">
    
        <Feeds className="md:!grid-cols-2 lg:!grid-cols-3" />
        {/* <div className="fixed bottom-6 left-1/2 z-10 w-full -translate-x-1/2 px-9 sm:hidden">
          <Button onClick={() => openDrawer('DRAWER_SEARCH')} fullWidth>
            Filters
          </Button>
        </div> */}
      </div>
    </>
  );
}
