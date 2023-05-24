import cn from 'classnames';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useLayout } from '@/lib/hooks/use-layout';
import { LAYOUT_OPTIONS } from '@/lib/constants';

const data = [
  {
    name: 'Page A',
    uv: 1200,
    pv: 800,
  },
  {
    name: 'Page B',
    uv: 2600,
    pv: 100,
  },
  {
    name: 'Page C',
    uv: 1900,
    pv: 1600,
  },
  {
    name: 'Page D',
    uv: 2280,
    pv: 1508,
  },
  {
    name: 'Page E',
    uv: 1290,
    pv: 3500,
  },
  {
    name: 'Page F',
    uv: 1690,
    pv: 3000,
  },
  {
    name: 'Page G',
    uv: 2590,
    pv: 4500,
  },
];

interface Props {
  chartWrapperClass?: string;
}

export default function OverviewChart({ chartWrapperClass }: Props) {
  const { layout } = useLayout();

  return (
    <div
    id='aboutUs'
      className={cn(
        'rounded-lg bg-light-dark p-6 text-white shadow-card sm:p-8',
        {
          'w-full ': layout === LAYOUT_OPTIONS.RETRO,
        }
      )}
    >
      <h3 className="text-xl font-medium tracking-tighter text-white sm:text-3xl">
        Purpose of the project
      </h3>
      <p className="mb-1 mt-2 text-xs font-medium text-gray-400 sm:text-sm">
        Our team launched the project in hopes of creating a healthier and
        better NFT space for art galleries, artists and collectors. We want to
        redefine the NFT market with our vision. We believe that an art piece’s
        value should be derived from the exposure it has and the period of time
        that it has existed for. Therefore, we are pushing for a revolution of
        NFT, NFT 2.0, where the value of art can be more clearly defined.
      </p>
      <h3 className="mt-7 text-xl font-medium tracking-tighter text-white sm:text-3xl">
        SAFETY
      </h3>
      <p className="mb-1 mt-2 text-xs font-medium text-gray-400 sm:text-sm">
      Siba Inu Finance aims to be a safe, long-term investment that grows with
        its community. We opened with a fair launch with no presale. The
        Liquidity Pool has been burned. Siba Inu Finance tokens at launch
        toensure that a developer rug-pull can’t happen
      </p>
    </div>
  );
}
