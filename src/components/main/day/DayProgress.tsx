import { createDay, stopDay } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import { Alert, Button } from '@heroui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Crone from './Crone'

const DayProgress = () => {
    const { currentDay } = useSelector((state: { day: TdayInitialState }) => state.day)
    const dispatch = useDispatch<AppDispatch>()
    const [isLoading, setIsLoading] = useState(false)
    const handelStartDay = () => {
        dispatch(createDay(undefined, setIsLoading))
    }
    const handelStopDay = () => {
        dispatch(stopDay(currentDay ? currentDay?.id : null, undefined, setIsLoading))
    }
    return (<>
        {currentDay ?
            (currentDay.stopAt !== null ?
                <div className='w-full text-center mt-3' >
                    <Button isLoading={isLoading} size='lg' className='font-semibold' color='warning' variant='flat' onPress={handelStartDay}>DemaréJournée</Button>
                </div> :
                <div className='w-full flex items-center justify-center mt-3' >
                    <div className='rounded-2xl bg-white dark:bg-slate-900 p-4 w-fit'>
                        <Crone startAt={currentDay.startAt} />
                        <Button isLoading={isLoading} size='lg' className='font-semibold mt-2' fullWidth color='danger' variant='flat' onPress={handelStopDay}>Stope Journée</Button>
                    </div>
                </div>) :
            <div className='w-full text-center mt-3' >
                <Button isLoading={isLoading} size='lg' className='font-semibold' color='warning' variant='flat' onPress={handelStartDay}>DemaréJournée</Button>
            </div>
        }
    </>
    )
}

export default DayProgress