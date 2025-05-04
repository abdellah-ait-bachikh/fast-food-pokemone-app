import { time } from 'framer-motion'
import React, { useEffect, useState } from 'react'

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
    return (
        <div>{`${hour}h ${minut}m ${second}s`}</div>
    )
}

export default Crone