import { Icon, Pill, Tablets } from 'lucide-react';
import React from 'react'

/**
 * Represents the props for the UpComingApp component.
 */
export type drugprops = {
    name: string;
    content: string;
    quantity: number;
    price: string;
}

export default function FreqDrugs(props: drugprops) {
  return (
    <div className='flex flex-wrap justify-between gap-3'>
        <section className='flex justify-between gap-3'>
        <div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
            <Pill className='h-10 w-10 text-gray-400'/>
        </div>
        <div className='text-sm'>
            <p>{props.name}</p>
            <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400'>
                {props.content}
                <div className='font-semibold text-black'>
                Quantity: {props.quantity}
                </div>
            </div>
        </div>
        
        </section>
        <p>{props.price}</p>
    </div>
  )
}
