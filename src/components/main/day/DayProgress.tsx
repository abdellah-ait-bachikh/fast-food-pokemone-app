import { TdayInitialState } from '@/type/statesTypes'
import { Alert, Button } from '@heroui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const DayProgress = () => {
    const { currentDay } = useSelector((state: { day: TdayInitialState }) => state.day)

    return (<>
        {currentDay ?
            (currentDay.stopAt === null ?
                <div className='w-full text-center mt-3' >
                    <Button size='lg' className='font-semibold' color='warning' variant='flat'>Demaré</Button>
                </div> :
                <div>raning day</div>) :
            <Alert
                color="danger"
                description={"not trouver"}
                title="Ereur"
                variant="faded"
            />
        }
    </>
    )
}

export default DayProgress