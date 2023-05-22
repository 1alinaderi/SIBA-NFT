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
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { useCallback } from 'react';
import copy from 'clipboard-copy';
import { toast } from 'react-toastify';
import { FaEnvelope, FaFacebook, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

export default function ModernScreen() {
  const { theme, setTheme } = useTheme();
  const text = '0xddsakopkpo12kop21kco12ijc211uj';

  const handleCopy = useCallback(() => {
    copy(text);
    toast.success('Copied');
  }, [text]);

  useEffect(
    (e) => {
      setTheme('dark');
      console.log(theme);
    },
    [theme]
  );
  return (
    <>
      <NextSeo
        title="Siba NFT"
        description="Siba NFT - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="flex flex-wrap">
        <div className="mb-8 w-full sm:mb-0 sm:ltr:pr-6 sm:rtl:pl-6 ">
          <CoinSlider coins={coinSlideData} />
        </div>
        <div className="w-full">
          <div className="flex h-full flex-col justify-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark xl:p-8">
            <div className="flex w-full justify-between py-4">
              <span className="flex w-[50%] justify-center px-5">
                <Link className='w-full' href={"/swap"}>
                <Button color='success' children="BUY" className="w-full" />
                </Link>
              </span>
              <span className="flex w-[50%] justify-center px-5">
              <Link className='w-full' href={"/swap"}>
                <Button color='info' className="w-full" children="CHART" />
                </Link>

              </span>
            </div>
            {/* <h3 className="mb-2 mt-4 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
              Address
            </h3>
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleCopy}
              className="mb-7 text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]"
            >
              {text}
            </div> */}
            {/* <TopupButton /> */}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:my-10 md:grid-cols-2">
        <LiquidityChart />
        <VolumeChart />
      </div>

      <div id="roadmap" className="my-8 sm:my-10">
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
        <div className={cn('w-full  ltr:lg:pr-6 rtl:lg:pl-6  ')}>
          <TransactionTable />
        </div>
        <div className="center w-full pt-6 text-center">
          <a href="mailto:info@sibatoken.com">info@sibatoken.com</a>
          <div className='w-full flex justify-center items-center py-3'>
            <Link href={"/"}>
            <span className='social_icon'>
              <FaTwitter />
            </span>
            </Link>
            <Link href={"/"}>
            <span className='social_icon'>
              <FaFacebook />
            </span>
            </Link>
            <Link href={"/"}>
            <span className='social_icon'>
              <FaTelegram />
            </span>
            </Link>
            <Link href={"/"}>
            <span className='social_icon'>
              <FaEnvelope />
            </span>
            </Link>
            <Link href={"/"}>
            <span className='social_icon'>
              <FaGithub />
            </span>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
