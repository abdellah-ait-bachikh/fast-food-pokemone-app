import { formatDateWithTime } from '@/lib/utils'
import { getDaysWithPaymentsCount } from '@/redux/api/day.api'
import { AppDispatch, TdayInitialState } from '@/type/statesTypes'
import { DatePicker, DateValue, Pagination, Select, SelectItem, Spinner, } from '@heroui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Table = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { days, currentDay, pagination } = useSelector((state: { day: TdayInitialState }) => state.day)
    const [rowsPerPage, setRowsPerPage] = useState('all')
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(null)
    const [page, setPage] = useState<number | ''>('')

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        dispatch(getDaysWithPaymentsCount(setLoading, { rowsPerPage, startAt: selectedDate ? new Date(selectedDate.toString()) : undefined, page }))
    }, [rowsPerPage, selectedDate, currentDay, page])

    return (
        <div className='w-full mt-4'>
            <div className='w-full flex justify-center '>
                <div className='w-fit text-nowrap px-2 bg-white dark:bg-slate-900 rounded-xl p-2.5 flex items-center gap-2'>
                    <DatePicker size='lg' showMonthAndYearPickers fullWidth={false} aria-label='select-date' onChange={setSelectedDate} />
                    <Select
                        className="w-[100px]"
                        size='sm'
                        label="Rouws"

                        placeholder="Select rows"
                        variant='flat'
                        scrollShadowProps={{
                            isEnabled: false,
                        }}
                        onChange={e => setRowsPerPage(e.target.value)}
                        aria-label='rowsPerPage'
                    >

                        <SelectItem key={'10'} aria-label='10'>10</SelectItem>
                        <SelectItem key={'30'} aria-label='30'>30</SelectItem>
                        <SelectItem key={'all'} aria-label='all'>tous</SelectItem>

                    </Select></div>
            </div>

            {loading ? <div className='w-full flex items-center justify-center py-4'><Spinner size='lg' color='warning' /></div> : <div className='rounded-xl w-full bg-white dark:bg-slate-900 p-2.5 mt-4  max-h-[60vh] flex flex-col gap-3'>
                <div className='w-full flex-1 overflow-auto'>  <table className='w-full'>
                    <thead className='sticky top-0 bg-transparent backdrop-blur-lg'>
                        <tr  >
                            <th className='font-semibold text-left py-1.5 w-fit text-nowrap px-3'>N</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Depart</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Fin</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Factures</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Factures des produits</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Facturezs des packes</th>
                            <th className='font-semibold text-center py-1.5 '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {days && (days.length > 0 ? days.map(item => (<tr key={item.id} className='hover:bg-gray-200 dark:hover:bg-slate-800'>
                            <td className='text-left py-1.5 w-fit text-nowrap px-3'>{item.id}</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>{formatDateWithTime(item.startAt)}</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>{formatDateWithTime(item.stopAt)}</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>{item._count.payments}</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>{item._count.paymentsProducts}</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>{item._count.paymentsOffers}</td>
                            <td className=''>
                                <div className='flex items-center gap-2 justify-center'>
                                    edit
                                </div>
                            </td>
                        </tr>)) : <tr><td colSpan={7}>aucain journéé trover</td></tr>)}

                    </tbody>
                    <tfoot></tfoot>
                </table></div>
                <div className=''>{pagination && pagination?.totalPages > 1 && (
                    <Pagination
                        showControls
                        page={pagination.currentPage}
                        total={pagination.totalPages}
                        onChange={setPage}
                    />
                )}
                </div>

            </div>}
        </div>
    )
}

export default Table