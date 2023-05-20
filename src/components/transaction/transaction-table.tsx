import React, { useEffect } from 'react';
import cn from 'classnames';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useSortBy,
  usePagination,
} from 'react-table';
import Button from '@/components/ui/button';
import Scrollbar from '@/components/ui/scrollbar';
import { ChevronDown } from '@/components/icons/chevron-down';
import { LongArrowRight } from '@/components/icons/long-arrow-right';
import { LongArrowLeft } from '@/components/icons/long-arrow-left';
import { LinkIcon } from '@/components/icons/link-icon';
import { TransactionData } from '@/data/static/transaction-data';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';

const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
    minWidth: 60,
    maxWidth: 80,
  },
  {
    Header: 'Type',
    accessor: 'transactionType',
    minWidth: 60,
    maxWidth: 80,
  },
  {
    Header: () => <div className="ltr:ml-auto rtl:mr-auto">Date</div>,
    accessor: 'createdAt',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="ltr:text-right rtl:text-left">{value}</div>
    ),
    minWidth: 160,
    maxWidth: 220,
  },
  {
    Header: () => <div className="ltr:ml-auto rtl:mr-auto">Asset</div>,
    accessor: 'symbol',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="ltr:text-right rtl:text-left">{value}</div>
    ),
    minWidth: 80,
    maxWidth: 120,
  },
  {
    Header: () => <div className="ltr:ml-auto rtl:mr-auto">Status</div>,
    accessor: 'status',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="ltr:text-right rtl:text-left">{value}</div>
    ),
    minWidth: 100,
    maxWidth: 180,
  },
  {
    Header: () => <div className="ltr:ml-auto rtl:mr-auto">Address</div>,
    accessor: 'address',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="flex items-center justify-end">
        <LinkIcon className="h-[18px] w-[18px] ltr:mr-2 rtl:ml-2" /> {value}
      </div>
    ),
    minWidth: 220,
    maxWidth: 280,
  },
  {
    Header: () => <div className="ltr:ml-auto rtl:mr-auto">Amount</div>,
    accessor: 'amount',
    // @ts-ignore
    Cell: ({ cell: { value } }) => (
      <div className="-tracking-[1px] ltr:text-right rtl:text-left">
        <strong className="mb-0.5 flex justify-end text-base md:mb-1.5 md:text-lg lg:text-base 3xl:text-2xl">
          {value.balance}
          <span className="inline-block ltr:ml-1.5 rtl:mr-1.5 md:ltr:ml-2 md:rtl:mr-2">
            BTC
          </span>
        </strong>
        <span className="text-gray-600 dark:text-gray-400">
          ${value.usdBalance}
        </span>
      </div>
    ),
    minWidth: 200,
    maxWidth: 300,
  },
];

export default function TransactionTable() {
  const data = React.useMemo(() => TransactionData, []);
  const columns = React.useMemo(() => COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
  } = useTable(
    {
      // @ts-ignore
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useSortBy,
    useResizeColumns,
    useFlexLayout,
    usePagination
  );

  const { pageIndex } = state;

  return (
    <div id='contactUs' className="">
      <div className="rounded bg-white px-4 pt-6 dark:bg-light-dark md:px-8 md:pt-8">
        <div className="flex flex-col items-center justify-between  pb-5 dark:border-gray-700 md:flex-row">
          <h2 className="mb-3 shrink-0 text-lg font-medium uppercase text-black dark:text-white sm:text-xl md:mb-0 md:text-2xl">
            Contact Us
          </h2>
        </div>
        <form style={{flexDirection:"column"}} className='w-full flex justify-center items-center py-5 px-4'>
          <input placeholder='Name' className='w-full lg:w-[45%] eforms_input my-2' />
          <input placeholder='Surname' className='w-full lg:w-[45%] eforms_input my-2' />
          <input placeholder='Email' className='w-full lg:w-[45%] eforms_input my-2' />
          <textarea placeholder='Message' className='w-full lg:w-[45%] eforms_textarea my-2' />
          <Button onClick={(e)=>{e.preventDefault() ; alert("Successfull")}} children="Send a Message" className='my-2' />
        </form>
      </div>
      
    </div>
  );
}
