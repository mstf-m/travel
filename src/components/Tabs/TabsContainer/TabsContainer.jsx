import React, { useState } from 'react'
import './TabsContainer.css'

function TabsContainer({ tabs }) {
    const [Current, setCurrent] = useState(0)
    return (
        <div>
            <div className='flex justify-between text-base uppercase tracking-widest pb-2 relative text-[#9b9b9b] cursor-pointer font-medium'>
                {
                    tabs.map((item, i) => (
                        <a
                            className={" tabCase font-medium relative "+ (Current == i ? "text-[#01b3a7]" : "")}
                            key={item.title + i}
                            onClick={() => { setCurrent(i) }}
                        >
                            {item.title}
                        </a>
                    ))
                }
            </div>
            <hr></hr>
            <div>
                {
                    tabs.map((item, i) => (
                        i == Current ?
                            <div className='flex flex-col gap-4'>
                                <div className='py-5 text-justify'>{item.text}</div>
                                <div className='flex gap-4'>
                                    {item.buttons.map(item=>(
                                        <a 
                                        className={"cursor-pointer "+ item.style}
                                        type='button' 
                                        href={item.url}>
                                            {item.title}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            : null

                    ))
                }
            </div>
        </div>
    )
}

export default TabsContainer