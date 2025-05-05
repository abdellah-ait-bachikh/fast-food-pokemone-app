import { DatePicker, } from '@heroui/react'

const Table = () => {
    return (
        <div className='w-full mt-4'>
            <div className='w-full flex justify-center '>
                <div className='w-fit text-nowrap px-2 bg-white dark:bg-slate-900 rounded-xl p-2.5'><DatePicker fullWidth={false} /></div>
            </div>
            <div className='rounded-xl w-full bg-white dark:bg-slate-900 p-2.5 mt-4 overflow-x-auto'>
                <table className='w-full'>
                    <thead>
                        <tr >
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>N</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Depart</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Fin</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Factures</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Factures des produits</th>
                            <th className='font-semibold text-center py-1.5 w-fit text-nowrap px-3'>Facturezs des packes</th>
                            <th className='font-semibold text-center py-1.5 '>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>1</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>11/12/2025 a 17:30</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>ENCOR</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>1500</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>1000</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>500</td>
                            <td className=''>
                                <div className='flex items-center gap-2 justify-center'>
                                    edit
                                </div>
                            </td>
                        </tr>
                        <tr className=''>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>1</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>11/12/2025 a 17:30</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>11/12/2025 a 00:36</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>1500</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>1000</td>
                            <td className='text-center py-1.5 w-fit text-nowrap px-3'>500</td>
                            <td className=''>
                                <div className='flex items-center gap-2 justify-center'>
                                    edit
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        </div>
    )
}

export default Table