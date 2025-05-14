import { formatDateWithDayInFrench, formatDateWithTime, formatMoneyMAD, formatNumberShort, getHours } from '@/lib/utils'
import { getShowDay } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import { Button, Chip, Popover, PopoverContent, PopoverTrigger, Spinner, Tooltip, User } from '@heroui/react'
import { useEffect, useState } from 'react'
import { CgArrowLongRightR } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MdOutlineTimer } from "react-icons/md";
import { FaMotorcycle } from 'react-icons/fa'
import DonatShart from '@/components/main/day/DonatShart'
import { FaFileInvoiceDollar } from "react-icons/fa6";
import SwiperWithDonutCharts from '@/components/main/day/SwiperWithDonutCharts'

const Show = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const { showDay } = useSelector((state: { day: TdayInitialState }) => state.day)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    dispatch(getShowDay(id, setIsLoading))
  }, [id])
  console.log(showDay)
  return (
    <>{isLoading ? <div className='h-screen flex items-center justify-center w-full'><Spinner size='lg' color='warning' /></div>
      :
      (showDay && <div className='w-full pb-3'>
        <div className='grid grid-cols-1  md:grid-cols-[400px_auto] gap-2'>
          <div className='  flex flex-col gap-3'>
            <div className='rounded-xl h-[64px]  bg-white dark:bg-slate-900 p-3 '>
              <div className='flex items-center gap-1 justify-center md:justify-between'> <Chip size='lg' radius='md' variant='flat' classNames={{ content: "font-semibold" }}>{formatDateWithTime(new Date(showDay.startAt))}</Chip>
                <CgArrowLongRightR className='' size={40} />
                {showDay.stopAt !== null ? <Chip size='lg' radius='md' variant='flat' classNames={{ content: "font-semibold" }} >{formatDateWithTime(new Date(showDay.stopAt))}</Chip> : <Chip color='danger' variant='flat'><MdOutlineTimer size={20} /></Chip>}
              </div>
              <div>

              </div>
            </div>
            <div className='bg-white rounded-xl  dark:bg-slate-900 p-3 max-h-[400px] overflow-hidden overflow-y-auto'>
              <SwiperWithDonutCharts data={showDay.shart} />
            </div>
          </div>
          <div className='rounded-xl bg-white dark:bg-slate-900 p-3  relative  overflow-hidden '>
            <div className=' overflow-auto max-h-[382px]'>
              <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
                <thead className="ltr:text-left rtl:text-right sticky  top-0 left-0 right-0  backdrop-blur-sm z-[996]">
                  <tr className=" *:text-gray-900 dark:*:text-white">
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                      Nome
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Produits
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Packes
                    </th>

                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Montant Collecté (DH)
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Montant De Livraisen (DH)
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {showDay.deleverys.length > 0 ? (
                    showDay.deleverys.map((item) => (
                      <tr
                        className="*:text-gray-900 *:first:font-medium dark:*:text-white"
                        key={item.id}
                      >
                        <td className="px-3 py-2 whitespace-nowrap">
                          <User
                            name={item.userName}
                            // description= {formatDateShort(new Date(item.createdAt))}
                            avatarProps={{
                              icon: <FaMotorcycle size={23} />,
                              color: "warning",
                            }}
                          />
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={item._count.ordersProducts}><span>{formatNumberShort(item._count.ordersProducts)}</span></Tooltip>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={item._count.ordersOffers}><span>{formatNumberShort(item._count.ordersOffers)}</span></Tooltip>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={formatMoneyMAD(item.totalEarnings)}><span>{formatNumberShort(item.totalEarnings)}</span></Tooltip>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={formatMoneyMAD(item.totalDeleveryPrice)}><span>{formatNumberShort(item.totalDeleveryPrice)}</span></Tooltip>
                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <div className="w-full text-center py-8 text-danger">  Aucun Livreur trouvé</div>
                      </td>
                    </tr>
                  )}


                </tbody>
              </table> </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-2 gap-2'>
          <div className='p-3 bg-white dark:bg-slate-900 rounded-xl'>
            <h1 className='font-semibold text-medium sm:text-xl'>Trende de Produits</h1>
            <div className='max-h-[400px]  overflow-auto '>
              <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
                <thead className="ltr:text-left rtl:text-right sticky  top-0 left-0 right-0  backdrop-blur-sm z-[996]">
                  <tr className=" *:text-gray-900 dark:*:text-white">

                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                      Produits
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Quantity
                    </th>




                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {showDay.products.length > 0 ? (
                    showDay.products.map((item) => (
                      <tr
                        className="*:text-gray-900 *:first:font-medium dark:*:text-white"
                        key={item.id}
                      >



                        <td className="px-3 py-2 whitespace-nowrap text-left">
                          {
                            item.category.name + " " + item.name
                          }
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={item.quantity}><span>{formatNumberShort(item.quantity)}</span></Tooltip>
                          {/* <Tooltip content={item._count.ordersOffers}><span>{formatNumberShort(item._count.ordersOffers)}</span></Tooltip> */}
                        </td>


                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <div className="w-full text-center py-8 text-danger">  Aucun Livreur trouvé</div>
                      </td>
                    </tr>
                  )}


                </tbody>
              </table>
            </div>
          </div>
          <div className='p-3 bg-white dark:bg-slate-900 rounded-xl'>
            <h1 className='font-semibold text-medium sm:text-xl'>Trende De Packe</h1>
            <div className='max-h-[400px] overflow-hidden overflow-y-auto'>
              <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
                <thead className="ltr:text-left rtl:text-right sticky  top-0 left-0 right-0  backdrop-blur-sm z-[996]">
                  <tr className=" *:text-gray-900 dark:*:text-white">

                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                      Packe
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Quantity
                    </th>




                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {showDay.offers.length > 0 ? (
                    showDay.offers.map((item) => (
                      <tr
                        className="*:text-gray-900 *:first:font-medium dark:*:text-white"
                        key={item.id}
                      >



                        <td className="px-3 py-2 whitespace-nowrap text-left">
                          {
                            item.name
                          }
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={item.quantity}><span>{formatNumberShort(item.quantity)}</span></Tooltip>
                          {/* <Tooltip content={item._count.ordersOffers}><span>{formatNumberShort(item._count.ordersOffers)}</span></Tooltip> */}
                        </td>


                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <div className="w-full text-center py-8 text-danger">  Aucun Livreur trouvé</div>
                      </td>
                    </tr>
                  )}


                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-2 gap-2'>
          <div className='p-3 bg-white dark:bg-slate-900 rounded-xl'>
            <h1 className='font-semibold text-medium sm:text-xl'>Factures de Produits</h1>
            <div className='max-h-[400px]  overflow-auto '>
              <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
                <thead className="ltr:text-left rtl:text-right sticky  top-0 left-0 right-0  backdrop-blur-sm z-[996]">
                  <tr className=" *:text-gray-900 dark:*:text-white">
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-left">
                      N°
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Produits
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Total
                    </th>

                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Livraison
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Facture
                    </th>
                    <th className="px-3 py-2 whitespace-nowrap font-semibold text-center">
                      Heure
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {showDay.deleverys.length > 0 ? (
                    showDay.deleverys.map((item) => (
                      <tr
                        className="*:text-gray-900 *:first:font-medium dark:*:text-white"
                        key={item.id}
                      >
                        <td className="px-3 py-2 whitespace-nowrap">
                          1
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center ">

                          <Chip size='sm' className='px-1' radius='lg' color='primary' variant='flat'>3</Chip>

                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={formatMoneyMAD(6036)}><span>{formatNumberShort(6036)}</span></Tooltip>
                          {/* <Tooltip content={item._count.ordersOffers}><span>{formatNumberShort(item._count.ordersOffers)}</span></Tooltip> */}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          {
                            true ? <Tooltip content={formatMoneyMAD(5)}><span>{formatNumberShort(5)}</span></Tooltip>
                              : <Chip color='danger' size='sm' variant='flat'>No</Chip>
                          }
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">

                          <Popover placement="right">
                            <PopoverTrigger>
                              <Button size='sm' className='px-1' radius='lg' color='warning' isIconOnly variant='flat'><FaFileInvoiceDollar size={20} /></Button>
                            </PopoverTrigger>
                            <PopoverContent>
                              <div className="px-1 py-2">
                                <div className="text-small font-bold">Popover Content</div>
                                <div className="text-tiny">This is the popover content</div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap text-center">
                          <Tooltip content={formatDateWithTime(new Date())}><span>{getHours()}</span></Tooltip>

                        </td>

                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5}>
                        <div className="w-full text-center py-8 text-danger">  Aucun Livreur trouvé</div>
                      </td>
                    </tr>
                  )}


                </tbody>
              </table>
            </div>
          </div>
          <div className='p-3 bg-white dark:bg-slate-900 rounded-xl'>
            <h1 className='font-semibold text-medium sm:text-xl'>Factures Des Produits</h1>
            <div className='max-h-[400px] overflow-hidden overflow-y-auto'>

            </div>
          </div>
        </div>
      </div>)}</>
  )
}

export default Show