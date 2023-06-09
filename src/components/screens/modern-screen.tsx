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
  const text = '0x9ce68CE31c2Cd849d345f3E7534e57F9A1dfe9F8';

  const handleCopy = useCallback(() => {
    copy(text);
    toast.success('Copied');
  }, [text]);

  useEffect(
    (e) => {
      setTheme('dark');
    },
    [theme]
  );
  return (
    <>
      <NextSeo
        title="Siba Inu"
        description="Siba Inu - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="flex flex-wrap">
        <div className="mb-8 w-full  sm:ltr:pr-6 sm:rtl:pl-6 ">
          <CoinSlider coins={coinSlideData} />
          <div className='w-full  text-center flex justify-center mt-8' >
          <span style={{fontSize:"22px" , fontWeight:"700" , border:"3px solid #d45200"}} className='text-center rounded   py-3 px-5'>SIBA SON OF SHIBA</span>
             </div>
        </div>
        <div className="w-full">
          <div className="flex h-full flex-col justify-center rounded-lg bg-white p-6 shadow-card dark:bg-light-dark xl:p-8">
           <h3 className="mb-2 mt-4 text-center text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 3xl:mb-3">
              Contract Address
            </h3>
            <div
              style={{ cursor: 'pointer' }}
              onClick={handleCopy}
              className="mb-7 text-center font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl 3xl:mb-8 3xl:text-[32px]"
            >
              {text}
            </div>
            {/* <TopupButton /> */}
            <div className="flex w-full flex-wrap justify-between py-4">
              <span className="flex w-[50%] justify-center px-5">
                <Link className='w-full' href={"https://www.pinksale.finance/launchpad/0x440D2b3Ee97EdfF007d8C5596e3644fb65D3A6Bf?chain=BSC"}>
                <Button color='success' children="BUY" className="w-full" />
                </Link>
              </span>
              <span className="flex w-[50%] justify-center px-5">
              <Link className='w-full' href={"/swap"}>
                <Button color='info' className="w-full" children="CHART" />
                </Link>
              </span>
              <span className="flex w-[50%] justify-center px-5 mt-5">
              <Link className='w-full' href={"/swap"}>
                <Button color='warning' className="w-full" children="LOCK" />
                </Link>
              </span>
              <span className="flex w-[50%] justify-center px-5 mt-5">
              <Link download className='w-full' href={"/audit.pdf"}>
                <Button color='danger' className="w-full" children="AUDIT" />
                </Link>
              </span>
            </div>
           
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
          <span >Join Social Media</span>
          <div className='w-full flex justify-center items-center py-3'>
            <Link href={"https://twitter.com/SIBAINUtoken"}>
            <span className='social_icon'>
              <FaTwitter />
            </span>
            </Link>
            <Link href={"https://t.me/SibaInuchat"}>
            <span className='social_icon'>
              <FaTelegram />
            </span>
            </Link>
            <Link href={"mailto:info@sibatoken.com"}>
            <span className='social_icon'>
              <FaEnvelope />
            </span>
            </Link>
            <Link href={"https://github.com/Siba-Token"}>
            <span className='social_icon'>
              <FaGithub />
            </span>
            </Link>
          </div>
          <a href='mailto:info@sibatoken.com'>info@sibatoken.com</a>
        </div>
      </div>
    </>
  );
}
