import './Links.css'

function News({ links }) {
    return (
        <div className='sm:col-span-2 lg:col-span-1 md:col-span-1 mx-auto sm:mx-0'>
            <h6 className="text-base font-medium tracking-wide text-[#ffffff] pb-4">QUICK LINKS</h6>
            <ul className="max-h-[6rem] flex sm:flex-row md:flex-col md:gap-0 gap-5 flex-wrap mb-7">
                {
                    links.map((item) => (

                        <li className="link" key={item.id}>
                            <a className="text-sm leading-7 text-[#ffffff] hover:text-[#01b3a7] ease-out duration-200" href={item.urlLink}>{item.text}</a>
                        </li>
                    ))
                }
            </ul>

            <a className="py-4 px-7 bg-[#01b3a7] text-slate-100 hover:bg-[#50ba87] ease-in-out duration-300" href='#'>Get in touch</a>
        </div>
    )
}

export default News