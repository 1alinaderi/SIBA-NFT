import { useState, useEffect } from 'react';
import type { NextPageWithLayout } from '@/types';
import cn from 'classnames';
import { NextSeo } from 'next-seo';
import Button from '@/components/ui/button';
import CoinInput from '@/components/ui/coin-input';
import TransactionInfo from '@/components/ui/transaction-info';
import { SwapIcon } from '@/components/icons/swap-icon';
import Trade from '@/components/ui/trade';
import RootLayout from '@/layouts/_root-layout';
import { FaAngleDown, FaLongArrowAltRight } from 'react-icons/fa';
import Web3 from 'web3';
import { AbiDogeContract, AbiRouterContract, AbiToken } from '../abi/abi';
import { ToastContainer, toast } from 'react-toastify';
import { WalletContext } from '@/lib/hooks/use-connect';
import { useWeb3Modal } from '@web3modal/react';
import { bsc } from 'wagmi/chains';
import { useContext } from 'react';

const SwapPage: NextPageWithLayout = (props) => {
  const TokenAddress = '';
  const RouterAddress = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
  const DogeAddress = '0xbA2aE424d960c26247Dd6c32edC70B295c744C43';
  const ShibaAddress = '0xb1547683DA678f2e1F003A780143EC10Af8a832B';
  const WBNBAddress = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';
  const FlokiAddress = '0xfb5B838b6cfEEdC2873aB27866079AC55363D37E';
  const web3 = new Web3(Web3.givenProvider);

  const Tokencontract = new web3.eth.Contract(AbiToken, TokenAddress);
  const Routercontract = new web3.eth.Contract(
    AbiRouterContract,
    RouterAddress
  );
  const DogeContract = new web3.eth.Contract(AbiDogeContract, DogeAddress);
  const SHIBAContract = new web3.eth.Contract(AbiDogeContract, ShibaAddress);
  const FlokiContract = new web3.eth.Contract(AbiDogeContract, FlokiAddress);

  const [isapproved, setisapproved] = useState(false);
  const { ethereumClient } = props;
  const [address, setaddress] = useState();
  const [price, setPrice] = useState(0.0);
  const [loading, setloading] = useState();
  const [BNBinput, setBNBinput] = useState();
  const [migmigeinput, setmigmigeinput] = useState();
  const [dropdown, setdropdown] = useState(false);
  const [dropdown2, setdropdown2] = useState(false);
  const [itemswap, setItemswap] = useState({
    title: 'BNB',
    src: '/BNB.png',
    address: WBNBAddress,
    decimals: 18,
    contract: '',
  });
  const [itemswap2, setItemswap2] = useState({
    title: 'DOGE',
    src: '/DODGE.png',
    address: DogeAddress,
    decimals: 8,
    contract: DogeContract,
  });
  const { setDefaultChain } = useWeb3Modal();

  useEffect(() => {
    setaddress(ethereumClient?.getAccount()?.address);
    setDefaultChain(bsc);
  }, [ethereumClient?.getAccount()?.address]);

  useEffect(
    (e) => {
      async function giveApproved() {
        if (address) {
          if (itemswap.address !== WBNBAddress) {
            const currentAllowance = await itemswap.contract?.methods
              ?.allowance(address, RouterAddress)
              ?.call();
            if (currentAllowance > BNBinput * 10 ** itemswap.decimals) {
              setisapproved(true);
            } else {
              setisapproved(false);
            }
          }
        }
       
      }
      async function giveInformation(buyToken, sellToken, sellAmount) {
        await setloading(true);
        const response = await fetch(
          `https://bsc.api.0x.org/swap/v1/quote?buyToken=${buyToken}&sellToken=${sellToken}&sellAmount=${sellAmount}&excludedSources=LiquidityProvider`
        );
        const quote = await response.json();
        await setPrice(quote.buyAmount / 10 ** itemswap2.decimals);
        await setloading(false);
      }
      if (address) {
        if (ethereumClient?.getNetwork()?.chain?.id !== 56) {
          toast.warning("you're not connected to bsc");
          setDefaultChain(bsc);
        }
      }

      giveApproved();
      giveInformation(
        itemswap2.address,
        itemswap.address,
        BNBinput * 10 ** itemswap.decimals
      );
    },
    [BNBinput]
  );
  console.log((BNBinput * 10 ** itemswap.decimals).toFixed())

  async function BNBTOTOKEN() {
    // Perform the swap.
    const gasPrice = await web3.eth.getGasPrice();
    const gas = await Routercontract?.methods
      ?.swapExactETHForTokens(
        0,
        [WBNBAddress, itemswap2.address],
        address,
        Math.floor(Date.now() / 1000) + 60 * 5
      )
      .estimateGas({
        from: address,
        value: (BNBinput * 10 ** itemswap.decimals).toFixed(),
      })
      .then((e) => {
        toast.success(e.message);
      })
      .catch((e) => {
        toast.error(e.message);
      });

    await Routercontract?.methods
      ?.swapExactETHForTokens(
        0,
        [WBNBAddress, itemswap2.address],
        address,
        Math.floor(Date.now() / 1000) + 60 * 5
      )
      .send({
        from: address,
        gas: gas,
        value: (BNBinput * 10 ** itemswap.decimals).toFixed(),
        gasPrice: gasPrice,
        chainId: 56,
      })
      .then((e) => {
        toast.success(e.message);
      })
      .catch((e) => {
        toast.error(e.message);
        return;
      });
  }

  async function _swaptokenforBNB() {
    // Perform the swap.
    const currentAllowance = await itemswap?.contract?.methods
      ?.allowance(address, RouterAddress)
      ?.call();
    if (currentAllowance < BNBinput * 10 ** itemswap.decimals) {
      const newAllowance = new web3.utils.BN('2')
        ?.pow(new web3.utils.BN('256'))
        ?.sub(new web3.utils.BN('1'));
      const gasAprrroved = await itemswap.contract.methods
        ?.approve(RouterAddress, newAllowance)
        ?.estimateGas({ from: address });
      await itemswap.contract.methods
        ?.approve(RouterAddress, newAllowance)
        ?.send({ from: address, gas: gasAprrroved })
        ?.then((e) => {
          setisapproved(true);
          toast.success('Approved success');
        })
        .catch((e) => {
          toast.error(e.message);
        });
    }
    if (itemswap2.address === WBNBAddress) {
      const gasPrice = await web3?.eth?.getGasPrice();
      const gas = await Routercontract?.methods
        ?.swapExactTokensForETH(
          (BNBinput * 10 ** itemswap.decimals).toFixed(),
          0,
          [itemswap.address, WBNBAddress],
          address,
          Math.floor(Date.now() / 1000) + 60 * 5
        )
        ?.estimateGas({
          from: address,
        });
      if (isapproved) {
        await Routercontract?.methods
          ?.swapExactTokensForETH(
            (BNBinput * 10 ** itemswap.decimals).toFixed(),
            0,
            [itemswap.address, WBNBAddress],
            address,
            Math.floor(Date.now() / 1000) + 60 * 5
          )
          ?.send({
            from: address,
            gas: gas,
            gasPrice: gasPrice,
            chainId: 56,
          })
          ?.then((e) => {
            toast.success(e.message);
          })
          ?.catch((e) => {
            toast.error(e.message);
          });
      }
    } else {
      const gasPrice = await web3?.eth?.getGasPrice();
      const gas = await Routercontract?.methods
        ?.swapExactTokensForTokens(
          (BNBinput * 10 ** itemswap.decimals).toFixed(),
          0,
          [itemswap.address, itemswap2.address],
          address,
          Math.floor(Date.now() / 1000) + 60 * 5
        )
        ?.estimateGas({
          from: address,
        });
      if (isapproved) {
        await Routercontract?.methods
          ?.swapExactTokensForTokens(
            (BNBinput * 10 ** itemswap.decimals).toFixed(),
            0,
            [itemswap.address, itemswap2.address],
            address,
            Math.floor(Date.now() / 1000) + 60 * 5
          )
          ?.send({
            from: address,
            gas: gas,
            gasPrice: gasPrice,
            chainId: 56,
          })
          ?.then((e) => {
            toast.success(e.message);
          })
          ?.catch((e) => {
            toast.error(e.message);
          });
      }
    }
  }
  return (
    <>
      <NextSeo title="Swap" description="Siba Inu swap page" />
      <Trade>
        <div className="mb-5 border-b border-dashed border-white-200 pb-5 dark:border-white-800 xs:mb-7 xs:pb-6">
          <div className={cn('relative flex flex-col gap-3')}>
            <div
              className={cn(
                'group flex min-h-[60px] rounded-lg border border-white-200 transition-colors duration-200 hover:border-white-900 dark:border-white-700 dark:hover:border-white-600'
              )}
            >
              <div
                style={{ position: 'relative' }}
                className=" min-w-[80px] border-r border-white-200 p-2 transition-colors duration-200 group-hover:border-white-900 dark:border-white-700 dark:group-hover:border-white-600"
              >
                {dropdown && (
                  <div className="dropdown_container px-3">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        setItemswap({
                          title: 'DOGE',
                          src: '/DODGE.png',
                          address: DogeAddress,
                          decimals: 8,
                          contract: DogeContract,
                        });
                        setPrice('');
                        setdropdown(false);
                      }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/DODGE.png" className="w-[50%] pe-4" />
                      DOGE
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        setItemswap({
                          title: 'SHIB',
                          src: '/SHIP.png',
                          address: ShibaAddress,
                          decimals: 18,
                          contract: SHIBAContract,
                        });
                        setPrice('');
                        setdropdown(false);
                      }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/SHIP.png" className="w-[50%] pe-4" />
                      SHIB
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        setItemswap({
                          title: 'FLOKI',
                          src: '/Floki.png',
                          address: FlokiAddress,
                          decimals: 9,
                          contract: FlokiContract,
                        });
                        setPrice('');
                        setdropdown(false);
                      }}
                      className="flex w-full items-center py-2"
                    >

                      <img src="/Floki.png" className="w-[50%] pe-4" />
                      FLOKI
                    </span>
                    <span
                      onClick={(e) => {
                        setItemswap({
                          title: 'BNB',
                          src: '/BNB.png',
                          address: WBNBAddress,
                          decimals: 18,
                          contract: '',
                        });
                        setPrice('');
                        setdropdown(false);
                      }}
                      style={{ cursor: 'pointer' }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/BNB.png" className="w-[50%] pe-4" />
                      BNB
                    </span>
                    <span
                      onClick={(e) => {
                        setItemswap({
                          title: 'SIBA',
                          src: '/logo.png',
                          address: TokenAddress,
                          decimals: 9,
                          contract: Tokencontract,
                        });
                        setPrice('');
                        setdropdown(false);
                      }}
                      style={{ cursor: 'pointer' }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/logo.png" className="w-[50%] pe-4" />
                      SIBA
                    </span>
                  </div>
                )}
                <button
                  onClick={(e) => {
                    dropdown ? setdropdown(false) : setdropdown(true);
                  }}
                  className="flex flex-wrap items-center font-medium outline-none dark:text-gray-100"
                >
                  <img style={{ maxWidth: '28px' }} src={itemswap.src} />
                  <span className="ltr:ml-2 rtl:mr-2">{itemswap.title} </span>
                  <span className="m-0 flex w-full justify-center p-0">
                    <FaAngleDown size={14} />
                  </span>
                </button>
              </div>
              <div className="flex flex-1 flex-col text-right">
                <input
                  value={BNBinput}
                  onChange={(e) => setBNBinput(e.target.value)}
                  type="text"
                  placeholder="0.0"
                  className="input_token w-full rounded-br-lg rounded-tr-lg border-0 pb-0 text-right text-lg outline-none focus:ring-0 dark:bg-light-dark"
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 z-[1] -ml-4 -mt-4 rounded-full bg-white shadow-large dark:bg-gray-600">
              <Button
                size="mini"
                color="gray"
                shape="circle"
                variant="transparent"
                onClick={() => {
                  setItemswap({
                    address: itemswap2.address,
                    decimals: itemswap2.decimals,
                    contract: itemswap2.contract,
                    src: itemswap2.src,
                    title: itemswap2.title,
                  });
                  setItemswap2({
                    address: itemswap.address,
                    decimals: itemswap.decimals,
                    contract: itemswap.contract,
                    src: itemswap.src,
                    title: itemswap.title,
                  });
                }}
              >
                <SwapIcon className="h-auto w-3" />
              </Button>
            </div>

            <div
              className={cn(
                'group flex min-h-[60px] rounded-lg border border-white-200 transition-colors duration-200 hover:border-white-900 dark:border-white-700 dark:hover:border-white-600'
              )}
            >
              <div
                style={{
                  position: 'relative',
                }}
                className="min-w-[80px] border-r border-white-200 p-2 transition-colors duration-200 group-hover:border-white-900 dark:border-white-700 dark:group-hover:border-white-600"
              >
                {dropdown2 && (
                  <div className="dropdown_container px-3">
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        setItemswap2({
                          title: 'DOGE',
                          src: '/DODGE.png',
                          address: DogeAddress,
                          decimals: 8,
                          contract: DogeContract,
                        });
                        setPrice('');
                        setdropdown2(false);
                      }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/DODGE.png" className="w-[50%] pe-4" />
                      DOGE
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        setItemswap2({
                          title: 'SHIB',
                          src: '/SHIP.png',
                          address: ShibaAddress,
                          decimals: 18,
                          contract: SHIBAContract,
                        });
                        setPrice('');
                        setdropdown2(false);
                      }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/SHIP.png" className="w-[50%] pe-4" />
                      SHIB
                    </span>
                    <span
                      style={{ cursor: 'pointer' }}
                      onClick={(e) => {
                        setItemswap2({
                          title: 'FLOKI',
                          src: '/Floki.png',
                          address: FlokiAddress,
                          decimals: 9,
                          contract: FlokiContract,
                        });
                        setPrice('');
                        setdropdown2(false);
                      }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/Floki.png" className="w-[50%] pe-4" />
                      FLOKI
                    </span>
                    <span
                      onClick={(e) => {
                        setItemswap2({
                          title: 'BNB',
                          src: '/BNB.png',
                          address: WBNBAddress,
                          decimals: 18,
                          contract: '',
                        });
                        setPrice('');
                        setdropdown2(false);
                      }}
                      style={{ cursor: 'pointer' }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/BNB.png" className="w-[50%] pe-4" />
                      BNB
                    </span>
                    <span
                      onClick={(e) => {
                        setItemswap2({
                          title: 'SIBA',
                          src: '/logo.png',
                          address: TokenAddress,
                          decimals: 9,
                          contract: Tokencontract,
                        });
                        setPrice('');
                        setdropdown2(false);
                      }}
                      style={{ cursor: 'pointer' }}
                      className="flex w-full items-center py-2"
                    >
                      <img src="/logo.png" className="w-[50%] pe-4" />
                      SIBA
                    </span>
                  </div>
                )}
                <button
                  onClick={(e) => {
                    dropdown2 ? setdropdown2(false) : setdropdown2(true);
                  }}
                  className="flex flex-wrap items-center font-medium outline-none dark:text-gray-100"
                >
                  <img style={{ maxWidth: '28px' }} src={itemswap2.src} />
                  <span className="ltr:ml-2 rtl:mr-2">{itemswap2.title}</span>
                  <span className="m-0 flex w-full justify-center p-0">
                    <FaAngleDown size={14} />
                  </span>
                </button>
              </div>
              <div className="flex flex-1 flex-col text-right">
                <input
                  value={
                    loading
                      ? '...loading'
                      : price && price.toFixed(itemswap2.decimals)
                  }
                  disabled
                  type="number"
                  placeholder="0.0"
                  className="input_token w-full rounded-br-lg rounded-tr-lg border-0 pb-0 text-right text-lg outline-none focus:ring-0 dark:bg-light-dark"
                />
                <small className='pe-7'>{loading && "...loading"}</small>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 xs:gap-[18px]">
          <TransactionInfo label={'Min. Received'} />
          <TransactionInfo label={'Rate'} />
          <TransactionInfo label={'Offered by'} />
          <TransactionInfo label={'Price Slippage'} value={'1%'} />
          <TransactionInfo label={'Network Fee'} />
          <TransactionInfo label={'Criptic Fee'} />
        </div> */}
        {itemswap.address === WBNBAddress ? (
          <Button
            size="large"
            shape="rounded"
            fullWidth={true}
            className="mt-6 uppercase xs:mt-8 xs:tracking-widest"
            onClick={(e) => {
              BNBTOTOKEN();
            }}
          >
            <button
              style={{ width: '100%', height: '100%' }}
             
            >
              SWAP
            </button>
          </Button>
        ) : (
          <Button
            size="large"
            shape="rounded"
            fullWidth={true}
            className="mt-6 uppercase xs:mt-8 xs:tracking-widest"
            onClick={(e) => {
              _swaptokenforBNB();
            }}
          >
            <button
              style={{ width: '100%', height: '100%' }}
            >
              {isapproved ? 'SWAP' : 'APPROVE'}
            </button>
          </Button>
        )}
      </Trade>
    </>
  );
};

SwapPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default SwapPage;
