import { getShowDay } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import React, { useEffect, useState } from 'react'
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
  return (
    <div>Show {id} </div>
  )
}

export default Show