import React from 'react';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useSortBy,
  usePagination,
} from 'react-table';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import Scrollbar from '@/components/ui/scrollbar';
import { ChevronDown } from '@/components/icons/chevron-down';
import { TopCurrencyData } from '@/data/static/top-currency-data';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';

const COLUMNS = [
  {
    Header: '#',
    accessor: 'id',
    minWidth: 60,
    maxWidth: 80,
  },
  {
    Header: 'Name',
    accessor: 'coin',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      // <div className="ltr:text-right rtl:text-left">{value}</div>
      <div className="mb-5 grid grid-cols-3 gap-4 text-sm text-gray-900 last:mb-0 dark:text-white">
        <div className="col-span-2 flex items-center gap-2">
          <span className="w-6 shrink-0">{value.icon}</span>
          <span className="flex flex-col gap-0.5">
            <span className="whitespace-nowrap text-xs font-medium capitalize">
              {value.name}
            </span>
            <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
              {value.symbol}
            </span>
          </span>
        </div>
      </div>
    ),
    minWidth: 140,
    maxWidth: 260,
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        Price
      </div>
    ),
    accessor: 'usd_price',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="ltr:text-right rtl:text-left">${value}</div>
    ),
    minWidth: 100,
    maxWidth: 140,
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        24H Change
      </div>
    ),
    accessor: 'usd_price_change_24h',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div
        className={`ltr:text-right rtl:text-left ${
          value > 0 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {value}%
      </div>
    ),
    minWidth: 100,
    maxWidth: 140,
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        24H Volume
      </div>
    ),
    accessor: 'usd_volume_24h',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="ltr:text-right rtl:text-left">${value}</div>
    ),
    minWidth: 100,
    maxWidth: 140,
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        Market Cap
      </div>
    ),
    accessor: 'usd_marketcap',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="flex items-center justify-end">${value}</div>
    ),
    minWidth: 100,
    maxWidth: 140,
  },
  {
    Header: () => (
      <div className="ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left">
        7D Chart
      </div>
    ),
    accessor: 'prices',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="h-10 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={value}>
            <defs>
              <linearGradient
                id="liquidity-gradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#bc9aff" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#7645D9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="natural"
              dataKey="value"
              stroke="#7645D9"
              strokeWidth={1.5}
              fill="url(#liquidity-gradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    ),
    minWidth: 200,
    maxWidth: 300,
  },
];

export default function TopCurrencyTable() {
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const data = React.useMemo(() => TopCurrencyData, []);
  const columns = React.useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    state,
    headerGroups,
    page,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
    },
    useSortBy,
    useResizeColumns,
    useFlexLayout,
    usePagination
  );

  const { pageIndex } = state;

  return (
    <div className="">
      <div className="rounded bg-white px-4 py-6 dark:bg-light-dark md:px-8 md:py-8">
        <img src='/roadmap.jpg' className='w-full' />
      </div>
     
    </div>
  );
}
