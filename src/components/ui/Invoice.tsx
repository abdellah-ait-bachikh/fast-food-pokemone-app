import { formatDateShort, formatDateWithTime } from '@/lib/utils';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@heroui/react';
import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { MdPhone } from "react-icons/md";

const Invoice = (props: {
    id: number;
    dailyNumber: number;
    clientPhoneNumber: string;
    createdAt: string;
    delevry: {
        userName: string;
    };
    delevryPrice: number;
    detailsProducts: {
        id: number;
        product: {
            id: number;
            name: string;
            price: number;
            category: {
                name: string;
            };
        };
        quantity: number;
        totalePrice: number;
    }[];
    isPayed: boolean;
    totalePrice: number;
    updatedAt: string;
    delevryId: number;
}) => {
    return (
        <Popover placement="right" classNames={{ base: 'w-[350px]' }}>
            <PopoverTrigger>
                <Button size='sm' className='px-1' radius='lg' color='warning' isIconOnly variant='flat'>
                    <FaFileInvoiceDollar size={20} />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-2 py-3 flex flex-col items-start w-full relative space-y-4">

                    <div className='w-full flex flex-col items-center space-y-2'>
                        <img src="/images/poke_logo.png" alt="poke_logo" className='w-28' />
                        <div className='flex items-center gap-2 font-semibold'>
                            <MdPhone />
                            <span>06 12 54 87 96</span>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className="text-lg font-bold text-center underline underline-offset-4">N° : {props.dailyNumber}</div>
                        <div className="tracking-wide text-[14px] font-semibold ">Réf : # {props.id}</div>
                        <div className="text-[14px] font-semibold flex items-center tracking-wide ">
                            {formatDateWithTime(new Date(props.createdAt))}
                        </div>
                        {props.delevryId ? <><div className="text-[14px] font-semibold tracking-wide">Livreur : {props.delevry.userName}</div>
                            <div className="text-[14px] font-semibold flex items-center gap-2 tracking-wide">
                                <span>Client : </span><span>{props.clientPhoneNumber}</span>
                            </div> </> : <div className="text-[14px] font-semibold tracking-wide text-center">sans livraison</div>
                        }

                        <table className='w-full border-collapse border border-gray-300 mt-2'>
                            <thead className='dark:text-black'>
                                <tr className='bg-gray-100'>
                                    <th className='border border-gray-300 p-1 text-left'>Nom</th>
                                    <th className='border border-gray-300 p-1'>Quantité</th>
                                    <th className='border border-gray-300 p-1'>Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.detailsProducts.map(item => (
                                        <tr key={item.id} className='border border-gray-300'>
                                            <td className='border border-gray-300 p-1 text-left'> {item.product.category.name} {item.product.name}</td>
                                            <td className='border border-gray-300 p-1 text-center w-auto'> {item.quantity}</td>
                                            <td className='border border-gray-300 p-1 text-center w-auto'> {item.totalePrice}</td>
                                        </tr>
                                    ))
                                }
                                {
                                    props.delevryId && <tr key={props.delevryId} className='border border-gray-300'>
                                        <td className='border border-gray-300 p-1 text-left' colSpan={2}> Livraison</td>

                                        <td className='border border-gray-300 p-1 text-center' >{props.delevryPrice}</td>
                                    </tr>
                                }
                                {
                                    <tr key={'totale'} className='border border-gray-300'>
                                        <td className='border border-gray-300 p-1 text-left' colSpan={2}> Total</td>

                                        <td className='border border-gray-300 p-1 text-center' >{props.totalePrice}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}

export default Invoice;
""