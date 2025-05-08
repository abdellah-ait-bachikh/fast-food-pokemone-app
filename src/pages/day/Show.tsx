import { formatDateWithDayInFrench, formatDateWithTime } from '@/lib/utils'
import { getShowDay } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import { Chip, Spinner } from '@heroui/react'
import { useEffect, useState } from 'react'
import { CgArrowLongRightR } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { MdOutlineTimer } from "react-icons/md";

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
      <div className='grid grid-cols-1 md:grid-cols-[400px_auto] gap-2'>
        <div className='rounded-xl bg-white dark:bg-slate-900 p-3 '>
          <div className='flex items-center gap-1 justify-center md:justify-between'> <Chip size='lg' radius='md' variant='flat' classNames={{ content: "font-semibold" }}>{formatDateWithTime(new Date(showDay.startAt))}</Chip>
            <CgArrowLongRightR className='' size={40} />
            {showDay.stopAt !== null ? <Chip size='lg' radius='md' variant='flat' classNames={{ content: "font-semibold" }} >{formatDateWithTime(new Date(showDay.stopAt))}</Chip> : <Chip color='danger' variant='flat'><MdOutlineTimer size={20} /></Chip>}
          </div>
          <div></div>
        </div>
        <div className='rounded-xl bg-white dark:bg-slate-900 p-3'></div>
      </div>
    </div>)}</>
  )
}

export default Show