
import { getFullTime, getTimeDeferent } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { CgArrowLongRightR } from "react-icons/cg";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Chip } from '@heroui/react';

const Crone = ({ startAt }: { startAt: Date }) => {
    const [hour, setHour] = useState(new Date().getHours())
    const [minut, setMinut] = useState(new Date().getMinutes())
    const [second, setSecond] = useState(new Date().getSeconds())

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            setHour(now.getHours())
            setMinut(now.getMinutes())
            setSecond(now.getSeconds())
        }
        updateTime()
        const timeInterval = setInterval(updateTime, 1000)
        return () => clearInterval(timeInterval)
    }, [])
    return (<div className='flex items-center flex-col'>
        <div className='flex items-center gap-2 '>
            <div className='font-semibold'>{getFullTime(startAt)}</div>
            <CgArrowLongRightR size={30} />
            <div className='font-semibold'>{`${hour}h ${minut}m ${second}s`}</div>
        </div>
        <div><Chip size='lg' color='primary' variant='flat' classNames={{ content: 'flex  items-center gap-2 ' }}> <span><AiOutlineFieldTime size={23} /></span><span className='font-semibold'>{getTimeDeferent(startAt)}</span></Chip> </div>
    </div>
    )
}

export default Crone