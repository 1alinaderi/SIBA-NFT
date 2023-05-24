import { useState } from 'react';
import type { NextPageWithLayout } from '@/types';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import Button from '@/components/ui/button';
import CoinInput from '@/components/ui/coin-input';
import TransactionInfo from '@/components/ui/transaction-info';
import { SwapIcon } from '@/components/icons/swap-icon';
import Trade from '@/components/ui/trade';
import Image from '@/components/ui/image';
import RootLayout from '@/layouts/_root-layout';

const WhitePaper: NextPageWithLayout = () => {
  let [toggleCoin, setToggleCoin] = useState(false);
  return (
    <>
      <NextSeo
        title="White Paper"
        description="Siba Inu - React Next Web3 NFT Crypto Dashboard Template"
      />
      <div className="rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8">
        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 uppercase tracking-wider sm:mb-2 sm:text-base">
          Siba Inu
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          We want equitable revenue share and safe ecosystem between the
          artists, art gallery and the investor(holder). We put the needs
          together to share and receive the fees. The investor will receive free
          pass to the art gallery. Do you wish to purchase an art work? This is
          why we have prepared the way to access NFT Blockchain by using
          internet to buy and sell. We will implement this by 'THE PUNK WORLD'.
        </div>
        <img alt='' src='/white (1).jpg' className='w-[300px] my-5 mx-auto' />
        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          # 'THE PUNK WORLD' (NFT Virtual Game soon)
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          ' THE PUNK WORLD ' is NFT game. It's Pixel Virtual world is similar
          with Minecraft. By accessing this program, you can inter the Tokyo art
          gallery without visiting Tokyo. The virtual world will be same as the
          actual Tokyo art gallery. You can monitor public art, Locked Art from
          here and also able to purchase it. There will be a fee occurring to
          tjis transaction, this fee will be distributed to holder and artist
          fee, and art gallery fee. # 'THE PUNK WORLD' (NFT Virtual Game soon)
        </div>
        <img alt='' src='/white (2).jpg' className='w-[300px] my-5 mx-auto' />

        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          Siba inu Finance
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          WHY BSC BLOCKCHAIN? Binance Smart Chain (BSC) is known as a blockchain
          operating on mainnet, activating the blockchain in parallel with
          Binance Chain. BSC allows the creation of smart contracts for
          blockchain tokens associated with the Binance brand. Siba Inu chose the
          BSC blockchain for the following reasons:
          <ul>
            <li>
              · A rich and growing digital asset ecosystem powered by Binance
              DEX, the leading decentralized exchange{' '}
            </li>
            <li>· Cheap transaction fees that reach as low as 1 cent </li>
            <li>
              · High performance with a network capable of producing a block
              every 3seconds{' '}
            </li>
            <li>
              · Cross-chain DeFi mechanisms that increase DeFi interoperability{' '}
            </li>
            <li>
              · A supportive Binance ecosystem that funds and bootstraps many
              DeFi projects{' '}
            </li>
            <li>
              · A growing ecosystem of millions of users across Binance.com and
              Binance DEX{' '}
            </li>
          </ul>
          A network of major crypto projects already collaborating with BSC NFT
          Siba Whitepaper This project was launched on 10 Jun 2021 by a team of
          developers from the US and JAPAN(NFTPUNK's business partner and new
          power programmer). Subsequently, an internationally team was formed
          with the addition of our community’s investors and holders. The
          project is a community driven one and the team have stayed true to its
          core with full transparency to the community and organizing polls and
          discussions with the community for key decisions.
        </div>
        <img alt='' src='/white (3).jpg' className='w-[300px] my-5 mx-auto' />

        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          THE UPCOMING PLATFORM
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Our platform will be powered by our deflationary utility-token
          Siba Inu andusers of our platform will be able to stake our token to
          claim or issue NFT’s.We are setting out to become the easiest NFT
          platform to use by amongst other things implementing simple drag &
          drop solutions. First, we are releasing a web version and later apps
          for both Android & IOS. Our apps will enable the creation of NFT’s
          from phones.
        </div>
        <img alt='' src='/white (4).jpg' className='w-[300px] my-5 mx-auto' />

        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          SAFETY
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
        Siba Inu  aims to be a safe, long-term investment that grows with its
          community. We opened with a fair launch with no presale. The Liquidity
          Pool has been burned. Siba Inu  tokens at launch toensure that a
          developer rug-pull can’t happen. There may still be holders with large
          amounts of tokens, as any long-term holder could become a whale one
          day with the amount of tokens being burnt and liquidity being added.
          However, this does mean that there is certainty of no developer rug
          pull. A whale dumping may cause short term harm to the value of NFT .
          Siba, but the community can always recover. To ensure a long life of
          Siba Inu  , liquidity is added to theLiquidity Pool with every
          transaction. As it is all burnt, no one (including the developer
          oradmins) can pull the liquidity out. The more transactions, the
          higher the floor gets!
        </div>
        <img alt='' src='/white (5).jpg' className='w-[300px] my-5 mx-auto' />

        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          TOKENOMICS
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
        Siba Inu  launched with a maximum total supply 200,000,000,000,000,000
          <br />
          %70 Liquidity
          <br />
          %18 Burn
          <br />
          %7 Marketing
          <br />
          %5 Team
          <br />
        </div>
        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          Roadmap
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Q2 2023
          <br />
          launch website
          <br />
          create token
          <br />
          Launch swap
          <br />
          Launch App <br />
          Launch market place
          <br />
          social media setup
          <br />
          listing in pancakeswap
          <br />
          listing CMC - CG
          <br />
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Q3 2023
          <br />
          launch IOS version
          <br />
          launch android version
          <br />
          listing in cex exchange
          <br />
          phase 1 marketing
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Q4 2023
          <br />
          relase the orginal version app
          <br />
          lottery launch <br />
          phase 2 marketing
          <br />
        </div>
        <img alt='' src='/white (6).jpg' className='w-[300px] my-5 mx-auto' />

        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          BACKGROUND
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Siba Inu was stealth-launched by an Japanese developer&American on May
          4, 2023 Since its inception,an international development team was
          formed out of investors from the community. Continuingwith the
          community-driven aspect, the development team aims for community
          involvement andmaintains full transparency for the project, holding
          polls and discussions with the community forkey decisions with the
          project, holding polls and discussions with the community forkey
          decisions with the project, culminating with a community-led decision
          to pursue SibaPixel Artrehabilitation efforts with Artist growing up.
          <br />
          <br />
          The development team comes from a diverse background of established
          positions in different sectors and respectable companies, providing
          their expertise and experience for the mutual benefit of the project
          and holders. Siba Inu long term goal is to establish NFT Pixel Art
          Platform and gallary. Decentralized Finance sector, focusing on
          ecological conservation efforts to reduce the man- induced effects of
          global climate change, while providing economic empowerment for all
          through an appreciating decentralized yield-generating cryptocurrency.
        </div>
        <img alt='' src='/white (7).jpg' className='w-[300px] my-5 mx-auto' />

        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          What is NFT 2.0?
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          The team has put a lot of thought into how the current NFT market can
          be improved. NFT 2 .0 will be a bridge between physical art and the
          NFT market. The public art pieces displayed in art galleries will be
          able to be locked and transferred to an NFT blockchain, a process that
          will be verified and certified by the related art galleries. In the
          event when an owner of a NFT loses its private key, the locked art in
          the art gallery will be burned.
        </div>
        <img alt='' src='/white (8).jpg' className='w-[300px] my-5 mx-auto' />
        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 mt-6 uppercase tracking-wider sm:mb-2 sm:text-base">
          Purpose of the project
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Our team launched the project in hopes of creating a healthier and
          better NFT space for art galleries, artists and collectors. We want to
          redefine the NFT market with our vision. We believe that an art
          piece’s value should be derived from the exposure it has and the
          period of time that it has existed for. Therefore, we are pushing for
          a revolution of NFT, NFT 2.0, where the value of art can be more
          clearly defined.
        </div>
      </div>
    </>
  );
};

WhitePaper.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default WhitePaper;
