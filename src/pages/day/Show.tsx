import { getShowDay } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import { Chip } from '@heroui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

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
    <div className='w-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div className='col-span-1 rounded-xl bg-white dark:bg-slate-900 p-3'>
          <Chip ></Chip>
        </div>
        <div className='col-span-1 md:col-span-2 rounded-xl bg-white dark:bg-slate-900 p-3'></div>
      </div>
    </div>
  )
}

export default Show