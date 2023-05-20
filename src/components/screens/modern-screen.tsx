import cn from 'classnames';
import { NextSeo } from 'next-seo';
import CoinSlider from '@/components/ui/coin-card';
import OverviewChart from '@/components/ui/chats/overview-chart';
import LiquidityChart from '@/components/ui/chats/liquidity-chart';
import VolumeChart from '@/components/ui/chats/volume-chart';
import TopPools from '@/components/ui/top-pools';
import TransactionTable from '@/components/transaction/transaction-table';
import TopCurrencyTable from '@/components/top-currency/currency-table';
import { coinSlideData } from '@/data/static/coin-slide-data';
import Avatar from '@/components/ui/avatar';
import TopupButton from '@/components/ui/topup-button';

//images
import AuthorImage from '@/assets/images/author.jpg';
import Button from '../ui/button';

export default function ModernScreen() {
  return (
    <>
      <NextSeo
        title="Criptic"
        description="Criptic - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="flex flex-wrap">
        <div className="mb-8 w-full sm:mb-0 sm:ltr:pr-6 sm:rtl:pl-6 ">
          <CoinSlider coins={coinSlideData} />
        </div>
        <div className="w-full">
          <div className="flex h-full flex-col justify-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark xl:p-8">
            <div className='w-full flex justify-between py-4'>
                <span className='w-[50%] flex justify-center px-5'>
                  <Button children="BUY"  className='w-full'/>
                </span>
                <span className='w-[50%] flex justify-center px-5'>
                  <Button className='w-full' children="CHART" />
                </span>
            </div>
            <h3 className="mb-2 mt-4 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
              Address
            </h3>
            <div className="mb-7 text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]">
               0xddsakopkpo12kop21kco12ijc211uj
            </div>
            {/* <TopupButton /> */}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:my-10 md:grid-cols-2">
        <LiquidityChart />
        <VolumeChart />
      </div>

      <div id='roadmap' className="my-8 sm:my-10">
        <TopCurrencyTable />
      </div>

      <div className="flex flex-wrap">
      <div
          className={cn(
            'mb-8 grid w-full grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2  lg:mb-0 lg:flex  lg:flex-col '
          )}
        >
          <OverviewChart />
          <TopPools />
        </div>
        <div
          className={cn(
            'w-full  ltr:lg:pr-6 rtl:lg:pl-6  '
          )}
        >
          <TransactionTable />
        </div>
     
      </div>
    </>
  );
}
