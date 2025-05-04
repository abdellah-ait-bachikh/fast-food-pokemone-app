import DayProgress from '@/components/main/day/DayProgress'
import { fetchDayData } from '@/redux/api/day.api'
import { TdayInitialState } from '@/type/statesTypes'
import { Alert, Spinner } from '@heroui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {
    const { error } = useSelector((state: { day: TdayInitialState }) => state.day)
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchDayData(dispatch, setIsLoading)
    }, [])
    return (<>{
        isLoading ?
            <div className='w-full h-screen grid place-items-center'>
                <Spinner size='lg' color='warning' />
            </div> :
            (error ? <div className="w-full text-white">
                <Alert
                    color="danger"
                    description={error}
                    title="Ereur"
                    variant="faded"
                />
            </div> : <div className='w-full'>
                <h1 className='text-4xl font-semibold'>List De Journée</h1>
                <DayProgress />
            </div>)
    }</>
    )
}

export default List