import { useState } from 'react';
import { format } from 'date-fns';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LiquidityData } from '@/data/static/liquidity';

function CustomAxis({ x, y, payload }: any) {
  const date = format(new Date(payload.value * 1000), 'd');
  return (
    <g
      transform={`translate(${x},${y})`}
      className="text-xs text-gray-500 md:text-sm"
    >
      <text x={0} y={0} dy={10} textAnchor="end" fill="currentColor">
        {date}
      </text>
    </g>
  );
}

const numberAbbr = (number: any) => {
  if (number < 1e3) return number;
  if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + 'K';
  if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + 'M';
  if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + 'B';
  if (number >= 1e12) return +(number / 1e12).toFixed(1) + 'T';
};

export default function LiquidityChart() {
  let [date, setDate] = useState(1624147200);
  let [liquidity, setLiquidity] = useState('547792029');
  const formattedDate = format(new Date(date * 1000), 'MMMM d, yyyy');
  const dailyLiquidity = numberAbbr(liquidity);

  return (
    <>
      <div className="rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8">
        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 uppercase tracking-wider sm:mb-2 sm:text-base">
          Swap your favourite tokens
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Our current AMM architecture is proprietary, combining our upgraded
          Pancake SwapV2 AMM with our brand new stable swap.This combination
          delivers the unique ability to achieve lightning quick swaps at the
          best rates the market has to offer. We will add your favorite Meme
          tokens to our exchange section. Currently we have placed four coins
          SIBA, DOGE, SHIB, FLOKI, tokens. But later, according to the request
          of the community, we will add other tokens.
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8">
        <h3 className="text-md text-dark-600 dark:text-dark-400 mb-1.5 uppercase tracking-wider sm:mb-2 sm:text-base">
          THE UPCOMING PLATFORM
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 sm:text-sm">
          Our platform will be powered by our deflationary utility-token Siba
          Inu Finance andusers of our platform will be able to stake our token
          to claim or issue NFT’s.We are setting out to become the easiest NFT
          platform to use by amongst other things implementing simple drag &
          drop solutions. First, we are releasing a web version and later apps
          for both Android & IOS. Our apps will enable the creation of NFT’s
          from phones.
        </div>
      </div>
    </>
  );
}
