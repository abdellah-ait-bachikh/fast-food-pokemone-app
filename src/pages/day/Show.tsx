import { formatDateWithDayInFrench, formatDateWithTime, formatMoneyMAD, formatNumberShort } from '@/lib/utils'
import { getShowDay } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import { Chip, Spinner, Tooltip, User } from '@heroui/react'
import { useEffect, useState } from 'react'
import { CgArrowLongRightR } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MdOutlineTimer } from "react-icons/md";
import { FaMotorcycle } from 'react-icons/fa'

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
    <>{isLoading ? <div className='h-screen flex items-center justify-center w-full'><Spinner size='lg' color='warning' /></div> : (showDay && <div className='w-full'>
      <div className='grid grid-cols-1  md:grid-cols-[400px_auto] gap-2'>
        <div className='rounded-xl h-[64px]  bg-white dark:bg-slate-900 p-3 '>
          <div className='flex items-center gap-1 justify-center md:justify-between'> <Chip size='lg' radius='md' variant='flat' classNames={{ content: "font-semibold" }}>{formatDateWithTime(new Date(showDay.startAt))}</Chip>
            <CgArrowLongRightR className='' size={40} />
            {showDay.stopAt !== null ? <Chip size='lg' radius='md' variant='flat' classNames={{ content: "font-semibold" }} >{formatDateWithTime(new Date(showDay.stopAt))}</Chip> : <Chip color='danger' variant='flat'><MdOutlineTimer size={20} /></Chip>}
          </div>
          <div></div>
        </div>
        <div className='rounded-xl bg-white dark:bg-slate-900 p-3  relative  overflow-hidden'>
          <div className=' overflow-auto max-h-[300px]'>
            <table className="min-w-full divide-y-2 divide-gray-200 dark:divide-gray-700 ">
              <thead className="ltr:text-left rtl:text-right sticky  top-0 left-0 right-0 h-[41px] backdrop-blur-sm z-[996]">
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
                    <td colSpan={4}>
                      <div className="w-full text-center py-8">  Aucun Livreur trouvé</div>
                    </td>
                  </tr>
                )}
              
              </tbody>
            </table> </div>
        </div>
      </div>
    </div>)}</>
  )
}

export default Show