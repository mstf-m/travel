

function News({ news }) {
    return (
        <div className="sm:max-w-[14rem] mx-auto sm:mx-0">
            <h6 className="text-base font-medium tracking-wide text-[#ffffff] pb-4">POPULAR NEWS</h6>
            <ul>
                {
                    news.map((item) => (

                        <li className="flex flex-col" key={item.id}>
                            <a className="text-sm text-[#01b3a7] hover:text-[#50ba87] leading-6" href={item.urlNew}>{item.new}</a>
                            <span className="text-xs font-semibold py-3 tracking-[0.075em] text-[#5b6b6a]">{item.date}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default News