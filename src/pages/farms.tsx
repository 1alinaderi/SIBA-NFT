import type { NextPageWithLayout } from '@/types';
import { NextSeo } from 'next-seo';
import RootLayout from '@/layouts/_root-layout';
import Farms from '@/components/farms/farms';

const FarmsPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo
        title="Farms"
        description="Siba Inu - React Next Web3 NFT Crypto Dashboard Template"
      />
      <Farms />
    </>
  );
};

FarmsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default FarmsPage;
